/*
 *  App
 */

const app = {
  categories: []
}

export const leftMenu = document.getElementById('leftMenu'),
  story = document.getElementById('story'),
  storyPanel = document.getElementById('storyPanel'),
  storyButton = document.getElementById('storyButton');


export function getCategoryLength() {
  return app.length;
}

export function addCategory(category) {
  app.categories.push(category);
  return category;
}

export function getCategory() {

}

