import jwt from 'jsonwebtoken';
import config from '../config/index.js';

const generateToken = (payload) => {
    return jwt.sign(payload, config.JWT_SECRET, {expiresIn: config.JWT_EXPIRATION});
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token,config.JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid or expired token.');
    }
}

export {
    generateToken,
    verifyToken
};