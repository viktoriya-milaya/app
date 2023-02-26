class List {
  #thoughts = [];


  updateList() {
    this.node.innerHTML = '';
    this.#thoughts.map(({ node }) => this.node.append(node));
  }

  addThought(thought) {
    this.#thoughts.unshift(thought);
    this.node.prepend(thought.node);
    this.updateList();
  }

  removeThought(id) {
    this.#thoughts = this.#thoughts.filter((thought) => thought.getId() !== id);
    this.updateList();
  }


  constructor() {
    this.node = document.getElementById(`thoughts-list`);

  }

}

export default List;