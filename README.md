# inventory-tracker

Web based inventory management system.

### after pulling things down from github

If your app needs you to reinstall dependencies heres what you should run for both client and server.

## For the Client

npm i reactstrap bootstrap @emotion/styled @emotion/core react-router-dom

[Emotion Styling Documentation](https://emotion.sh/docs/styled).
[Reactstrap Documentation](https://reactstrap.github.io/).
[React Routing Tutorial 26:33](https://www.youtube.com/watch?v=XRfD8xIOroA)
**watch this one at 1.5 or 2x speed**

## For the Server

npm i body-parser concurrently express mongoose @sendgrid/mail

npm i -D nodemon

[sendgrid/Mail Documentation](https://www.npmjs.com/package/@sendgrid/mail)
In order to use SendGrid you'll need an account and an email address that has been approved. You'll use the approved email address/Domain as the FROM address. **If you do not use an approved from email you will get a 401 error :(**

NOTE: You will need to edit the **scripts** portion of your package.json in the server

It should look like this:
"scripts": {
"start": "node server.js",
"server": "nodemon server.js"
}

When developing and **_needing the server run this command:_**

**npm run server**

# Resources

[Mern CRUD Tutorial](https://www.djamware.com/post/59faec0a80aca7739224ee1f/building-crud-web-application-using-mern-stack)
[JSON.org](https://www.json.org/json-en.html)
