import express from 'express';
import { register, login } from '../controllers/authController.js';
import { requireAuth } from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication operations
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *               role:
 *                 type: string
 *                 enum: [admin, editor]
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Missing fields
 *       409:
 *         description: User already exists
 *       500:
 *         description: Internal server error
 */
router.post('/register', register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login and receive a JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       400:
 *         description: Missing fields
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
router.post('/login', login);

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Get current authenticated user basic info
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Reutrns user details
 *       401:
 *         description: Access denied. No token provided.
 *       403:
 *         description: Invalid or expired token.
 */
router.get('/me', requireAuth, (req, res) => {
  res.json({ message: 'You have access!', user: req.user });
});

export default router;
