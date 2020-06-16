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

const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();
const APP = EXPRESS();
const PASSPORT = require("passport");
require("../../config/passport-setup");
const FETCH = require("node-fetch");
const CID = require("../../config/keys").githubClientId;
const CS = require("../../config/keys").githubClientSecret;

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

/**
 * @purpose to
 * @route /api/auth/login/github
 */
ROUTER.get("/login/github", (req, res) => {
  const URL = `https://github.com/login/oauth/authorize?client_id=${CID}&redirect_uri=http://localhost:5000/api/auth/login/github/callback`;
  res.redirect(URL);
});

/**
 * @purpose
 *
 */
async function getAccessToken(code) {
  console.log(`clientID is ${CID}`);
  console.log(`clientSecret is ${CS}`);
  console.log(`this is the code in getAccessToken: ${code}`);
  const res = await FETCH("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      CID,
      CS,
      code,
    }),
  });

  const theData = await res.text();
  console.log("This is the data " + theData);
  const paramz = new URLSearchParams(theData);
  console.log(paramz);
  return paramz.get("access_token");
}

/**
 * @purpose to
 * @route /api/auth/login/github/callback
 */

ROUTER.get("/login/github/callback", async (req, res) => {
  const CODE = req.query.code;
  console.log(`this is the code: ${CODE}`);
  const token = await getAccessToken(CODE);
  console.log(token);
  res.send(`this is the token: ${token}`);
});

/**
 * @purpose Logs user out while destroying session
 * @route /api/auth/logout
 */
ROUTER.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

module.exports = ROUTER;
