/*
 *  App
 */

const app = {
  categories: []
}

export const leftMenu = document.getElementById('leftMenu')
export const story = document.getElementById('story')
export const storyPanel = document.getElementById('storyPanel')
export const storyButton = document.getElementById('storyButton')

export function getCategoryLength () {
  return app.length
}

export function addCategory (category) {
  app.categories.push(category)
  return category
}

export function getCategory () {

}
