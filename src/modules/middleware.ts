import { validationResult } from 'express-validator';

export const handleInputError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ message: errors.array() });
        return;
    }
    next();
}