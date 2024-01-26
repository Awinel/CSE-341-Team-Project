// validation/validate.js
const { body, validationResult } = require('express-validator');

const saveContact = [
  body('firstName').notEmpty().isString(),
  body('lastName').notEmpty().isString(),
  body('email').notEmpty().isEmail(),
  body('favoriteColor').notEmpty().isString(),
  body('birthday').optional().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(412).json({
        success: false,
        message: 'Validation failed',
        data: errors.array()
      });
    }
    next();
  }
];

module.exports = {
  saveContact
};
