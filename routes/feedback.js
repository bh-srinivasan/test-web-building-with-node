const express = require('express');

const {check,validationResult} = require('express-validator');

const router = express.Router();

module.exports = params => {
  const { feedbackService } = params;

  router.get('/', async (request, response, next) => {
    try {
      const feedback = await feedbackService.getList();
      const errors = request.session.feedback? request.session.feedback.errors:false;
      request.session.feedback={};
      return response.render('layout', {
        pageTitle: 'Feedback',
        template: 'feedback',
        feedback,
        errors
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
      request.session.feedback={ errors: errors.array() };
      return response.redirect('/feedback');
    }
  
    console.log(request.body);
    await feedbackService.addEntry(request.body.name, request.body.email, request.body.title, request.body.message);
    return response.send('Feedback form posted');
  });
  
  return router;
};
