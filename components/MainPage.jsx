const React = require("react");
const Layout = require("./Layout");
// const CategoryItems = require('./CategoryItems');

function MainPage({ title, category, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Main page</h1>
      {/* <CategoryItems category = {category} /> */}
    </Layout>
  );
}

module.exports = MainPage;
