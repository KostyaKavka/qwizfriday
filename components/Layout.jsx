const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/navbar.css" />
        <link rel="stylesheet" href="/styles/index.css" />

        {/* <script src="/scripts/test.js" /> */}
      </head>
      <body>
        <section>

        </section>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
};
