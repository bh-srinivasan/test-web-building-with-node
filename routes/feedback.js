const express = require('express');

const { check, validationResult } = require('express-validator');

const router = express.Router();

module.exports = params => {
  const { feedbackService } = params;

  router.get('/', async (request, response, next) => {
    try {
      const feedback = await feedbackService.getList();
      const errors = request.session.feedback ? request.session.feedback.errors : false;
      request.session.feedback = {};
      return response.render('layout', {
        pageTitle: 'Feedback',
        template: 'feedback',
        feedback,
        errors,
        messages: request.flash(),
        success: request.query.success // read success query parameter to determine if the form was just submitted
      });
    } catch (err) {
      return next(err);
    }
  });

  router.post('/', [
    check('name').trim().isLength({ min: 3 }).withMessage('Name is required'),
    check('email').trim().isEmail().withMessage('Invalid email address'),
    check('title').trim().isLength({ min: 3 }).withMessage('Title is required'),
    check('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters long'),
  ], async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      request.session.feedback = { errors: errors.array() };
      return response.redirect('/feedback');
    }

    const { name, email, title, message } = request.body;
    await feedbackService.addEntry(name, email, title, message);

    // redirect to the same page with a success query parameter
    return response.redirect('/feedback?success=true');
  });

  return router;
};
