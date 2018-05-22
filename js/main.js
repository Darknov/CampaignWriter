import Category from './Category.js';

const app = (function () {
  let categories = [];

  return {
    getCategoryLength: () => categories.length,
    addCategory: () => {
      categories.push(new Category(categories.length, "New Category"));
    },
    getCategory: (id) => categories[id],
  };
})();

$(document).ready(function () {
  $("#addCategory").click(addCategory);
});

function nextCategory() {
  const category = app.getCategory(app.getCategoryLength() - 1);
  console.log(category);
  return '<div id="' + category.id + '" class="leftRow"><a href="#" type="button" class="btn btn-light">' + category.name + '</a></div>'
}

function addCategory() {
  app.addCategory();
  $("#leftMenu").append(nextCategory());
}
