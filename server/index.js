import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger Setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Soulware API',
      version: '1.0.0',
      description: 'API for Soulware internal SaaS',
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./server/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Base route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Soulware API is running!' });
});

// Routes
import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
