# ==========================================
# ETAPA 1: Compilación (Build Stage)
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar los archivos de definición de dependencias
COPY package*.json ./

# Instalar dependencias necesarias para compilar el frontend
RUN npm ci

# Copiar los archivos necesarios para la compilación del Frontend
COPY src/ ./src
COPY public/ ./public
COPY index.html ./index.html
COPY vite.config.js ./vite.config.js

# Compilar el Frontend con Vite (esto genera la carpeta /app/dist)
RUN npm run build

# ==========================================
# ETAPA 2: Producción (Production Stage)
# ==========================================
FROM node:20-alpine

ENV NODE_ENV=production
WORKDIR /app

# Copiar los archivos de definición de dependencias en el entorno final
COPY package*.json ./

# Instalar dependencias solo para producción (backend) e instalar 'serve' globalmente para el frontend
RUN npm ci --only=production && npm install -g serve

# Copiar el Frontend compilado desde la etapa anterior
COPY --from=builder /app/dist ./dist

# Copiar el código del Backend (permanecerá inactivo en la Fase 1)
COPY server/ ./server

# Exponer los puertos
# - Puerto 3000 para el Frontend (Fase 1)
# - Puerto 5000 para el Backend (Fase 2 por defecto, configurable mediante la variable de entorno PORT)
EXPOSE 3000
EXPOSE 5000

# COMANDO POR DEFECTO (FASE 1): Servir el Frontend estático en el puerto 3000
# Para la FASE 2, se cambiará el comando en Easypanel a: node server/index.js
CMD ["serve", "-s", "dist", "-l", "3000"]
