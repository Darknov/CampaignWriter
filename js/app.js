/*
 *  App
 */

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




export const leftMenu = document.getElementById('leftMenu'),
  story = document.getElementById('story'),
  storyPanel = document.getElementById('storyPanel'),
  storyButton = document.getElementById('storyButton');
