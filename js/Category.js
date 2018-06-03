export default class Category {
  constructor(id, name, categoryId = "") {
    this.id = id;
    this.name = name;
    this.categories = [];
    this.paragraphs = [];
    this.title = "";
    this.content = "";
    const parentCategory = categoryId ? categoryId + '-' : '';
    $("#leftMenu")
      .append('<div class="leftRow category draggable"><a href="#" id="left-row-' 
      + parentCategory + id + '" type="button" class="btn btn-light">' + name + '</a></div>');
  }

  addCategory(category) {
    this.categories.push(category);
    return this;
  }

  getButton() {
    return $("#left-row-" + this.id);
  }
}
