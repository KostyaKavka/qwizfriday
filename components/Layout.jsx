const React = require('react');
const NavBar = require('./Navbar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        {/* <link href="/styles/bootstrap.css" rel="stylesheet" crossorigin="anonymous"></link> */}
        {/* <script src="/scripts/test.js" /> */}
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};
