const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/navbar.css" />
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="stylesheet" href="/styles/main.css" />

        {/* <script src="/scripts/test.js" /> */}
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
