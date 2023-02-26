class Thought {
  #dataForm = {};
  #id = null;

  setData(dataForm) {
    this.#dataForm = dataForm;
  }

  getData() {
    return this.#dataForm;
  }

  getId() {
    return this.#id;
  }

  createButton(isDelete) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn');
    button.classList.add(`btn-${isDelete ? 'delete' : 'edit'}`);
    button.innerText = isDelete ? '✗' : '✎';

    return button;
  }

  setNode() {
    const { date, mood, progress, thought, rating } = this.getData();

    const day = document.createElement('div');
    day.classList.add( `day`, `pt-3`, `pb-3`, `mt-5`, `border`,`border-1`, `border-light`)

    const html = `
    <div class="btn-group ">
      </div>
    <p class="fw-bold">${date}  ${rating}</p>
    <p class="pt-1 fst-italic">My mood today is ${mood}</p>
    <p class="pt-1">My progress: ${progress}</p>
    <p class="pt-1">${thought}</p>
        `;


    day.insertAdjacentHTML('beforeend', html);

    const btnGroup = day.querySelector('.btn-group');
    const editButton = this.createButton(false);
    const deleteButton = this.createButton(true);

    btnGroup.append(editButton, deleteButton);

    this.node = day;
    this.deleteBtn = deleteButton;
    this.editBtn = editButton;
  }



  // <button class="btn btn-edit">✎</button>
  //   <button class="btn btn-delete text-white">✗</button>



  constructor(dataForm) {
    this.#id = Date.now();
    this.setData(dataForm);
    this.setNode();
  }
}


export default Thought;