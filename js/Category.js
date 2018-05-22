export default class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.categories = [];
  }

  addCategory(category) {
    this.categories.push(category);
    return this;
  }
}
