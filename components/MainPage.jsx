const React = require("react");
const Layout = require("./Layout");
const CategoryItems = require("./CategoryItems");

function MainPage({ title, categories }) {
  return (
    <Layout title={title}>
      <h1>Выбери тему</h1>
      <div className="card__container">
        {categories.map((el, index) => (
          <CategoryItems key={index} category={el} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
