import Category from './Category.js';

const app = (function () {
  let categories = [];

  return {
    getCategoryLength: () => categories.length,
    addCategory: () => {
      let c = new Category(categories.length, "New Category")
      categories.push(c);
      return c;
    },
    getCategory: (id) => categories[id],
  };
})();

const main = (function () {
  const title = $("#title");
  const rest = $("#rest");
  const content = $("#content");
  return {
    title,
    rest,
    content
  };
})();

$(document).ready(function () {
  $("#addCategory").click(addCategory);
  main.title.change(onchangeTitle);
});

function onchangeTitle() {
  const id = main.content.data("data-category-id");
  const category = app.getCategory(id);
  category.title = main.title.val();
  console.log(category.title);

}

function onclickCategory(id) {
  const category = app.getCategory(id);
  main.content.data("data-category-id", category.id);
  main.title.val(category.title);
}

function nextCategory() {
  const category = app.getCategory(app.getCategoryLength() - 1);
  return '<div id="left-row-' + category.id + '" class="leftRow category draggable"><a href="#" type="button" class="btn btn-light">' + category.name + '</a></div>'
}

function addCategory() {
  let category = app.addCategory();
  $("#leftMenu").append(nextCategory());
  $("#left-row-" + category.id).click(() => onclickCategory(category.id));

}
