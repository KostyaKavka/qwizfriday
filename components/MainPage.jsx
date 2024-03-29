const React = require("react");
const Layout = require("./Layout");
const CategoryItems = require("./CategoryItems");

function MainPage({ title, categories, user }) {
  return (
    <Layout title={title} user={user} className="main">
      <h1>Выбери тему</h1>
      <div className="card">
        {categories.map((el, index) => (
          <CategoryItems className='card' key={index} category={el} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
