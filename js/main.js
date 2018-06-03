import Category from './Category.js';
import * as app from './app';



const options = (function () {
  let currentPanel = story;
  return {
    currentPanel,
  };
})();



$(document).ready(function () {
  // $("#addCategory").click(addCategory);
  // story.title.change(onchangeTitle);

  // options.storyButton.click(onclickStory);
});

function onclickStory() {
  console.log("story clicked!");
}

function onchangeTitle() {
  // const id = options.storyPanel.data("data-category-id");
  // const category = app.getCategory(id);
  // category.title = story.title.val() ? story.title.val() : "no name";
  // $("#left-row-" + category.id).text(category.title);

}

function onclickCategory(id) {
  // find opened category and close it
  let test = 
  
  // $( '#leftMenu .opened').removeClass('opened');
  
  const category = app.getCategory(id);
  options.storyPanel.data("data-category-id", category.id);
  category.getButton().addClass('opened');
  story.title.val(category.title);
}

function addCategory() {
  let category = app.addCategory();
  category.getButton().click(() => onclickCategory(category.id));
}
