/**
 * server/Routes/API/Auth.js
 *
 * @routes /api/google
 * @routes /api/google/callback
 * post / Sends email
 *
 * @todos finish
 *
 * @issues
 *
 */

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

app.get('/google', passport.authenticate('google', { scope: ['profile'] }));

app.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);
