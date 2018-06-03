/*
 *  These are various options for Categories
 * to specify e.g. Name, race, religion etc. 
 */

export default class Option {
  constructor(name) {
    this.name = name;
    this.type = "label";
    this.content = "";
  }
}

export default class Input extends Option {
  constructor(name) {
    super(name);
    this.type = "input";
  }
}