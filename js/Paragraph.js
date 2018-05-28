export default class Paragraph {
  constructor(name) {
    this.name = name;
    this.subparagraph = [];
  }
}

export default class Subparagraph extends Paragraph {
  constructor(name) {
    super(name);
    this.options = [];
  }
}

