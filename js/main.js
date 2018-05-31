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

const story = (function () {
  const title = $("#title");
  const rest = $("#rest");

  return {
    title,
    rest,

  };
})();

const leftPanel = (function () {

  return {

  };
})();

const options = (function () {
  const story = $("#story");
  const storyPanel = $("#storyPanel");
  const storyButton = $("#storyButton");


  let currentPanel = story;
  return {
    currentPanel,
    story,
    storyPanel,
    storyButton
  };
})();



$(document).ready(function () {
  $("#addCategory").click(addCategory);
  story.title.change(onchangeTitle);

  options.storyButton.click(onclickStory);
});

function onclickStory() {
  console.log("story clicked!");
}

function onchangeTitle() {
  const id = options.storyPanel.data("data-category-id");
  const category = app.getCategory(id);
  category.title = story.title.val() ? story.title.val() : "no name";
  $("#left-row-" + category.id).text(category.title);

}

function onclickCategory(id) {
  console.log(id);
  $( ".opened" ).removeClass('opened');
  const category = app.getCategory(id);
  options.storyPanel.data("data-category-id", category.id);
  $("#left-row-" + id).addClass('opened');
  story.title.val(category.title);
}

function nextCategory() {
  const category = app.getCategory(app.getCategoryLength() - 1);
  return '<div class="leftRow category draggable"><a href="#" id="left-row-' + category.id + '" type="button" class="btn btn-light">' + category.name + '</a></div>'
}

function addCategory() {
  let category = app.addCategory();
  $("#leftMenu").append(nextCategory());
  $("#left-row-" + category.id).click(() => onclickCategory(category.id));

}
