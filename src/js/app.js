import Form from './Form';
import Alert from './Alert';
import Thought from './Thought';
import List from './List';


document.addEventListener('DOMContentLoaded', () => {
  const form = new Form();
  const alert = new Alert();
  const list = new List();


  const onAdd = () => {

    try {
      const dataForm = form.getData();
      const thought = new Thought(dataForm);
      // console.log(thought);

      thought.deleteBtn.addEventListener('click', () => list.removeThought(thought.getId()));
      list.addThought(thought);
      form.clear();
      alert.showAlert('Note added');

    } catch ({ message }) {
      alert.showAlert(message, true);
    }


  }


    form.node.addEventListener('submit', (e) => {
      e.preventDefault();
      onAdd();
    
    });

  });




