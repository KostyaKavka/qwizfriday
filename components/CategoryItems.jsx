const React = require("react");

function CategoryItems({ category }) {
  return (
    <div>
        <h2>{ category.title }</h2>
        <img src={`${ category.img }`} alt="" />
    </div>
  );
}
module.exports = CategoryItems;
