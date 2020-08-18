import AbstractView from "./abstract.js";

const createTaskListTemplate = () => {
  return `<div class="board__tasks"></div>`;
};

class TaskList extends AbstractView {
  getTemplate() {
    return createTaskListTemplate();
  }
}

export default TaskList;
