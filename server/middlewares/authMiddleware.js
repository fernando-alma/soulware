import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_for_development';

export const requireAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user payload to request
    
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid or expired token.' });
  }
};
