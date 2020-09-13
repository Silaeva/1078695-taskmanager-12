import SiteMenuView from "./view/site-menu.js";
import StatisticsView from "./view/statistics.js";
import {generateTask} from "./mock/task.js";
import {TASK_COUNT, MenuItem, UpdateType, FilterType} from "./const.js";
import BoardPresenter from "./presenter/board.js";
import FilterPresenter from "./presenter/filter.js";
import TasksModel from "./model/tasks.js";
import {render, remove} from "./utils/render.js";
import FilterModel from "./model/filter.js";

const tasks = new Array(TASK_COUNT).fill().map(generateTask);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterModel = new FilterModel();

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const siteMenuComponent = new SiteMenuView();
render(siteHeaderElement, siteMenuComponent);

const boardPresenter = new BoardPresenter(siteMainElement, tasksModel, filterModel);
const filterPresenter = new FilterPresenter(siteMainElement, filterModel, tasksModel);

const handleTaskNewFormClose = () => {
  siteMenuComponent.getElement().querySelector(`[value=${MenuItem.TASKS}]`).disabled = false;
  siteMenuComponent.setMenuItem(MenuItem.TASKS);
};

let statisticsComponent = null;

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.ADD_NEW_TASK:
      remove(statisticsComponent);
      boardPresenter.destroy();
      filterModel.setFilter(UpdateType.MAJOR, FilterType.ALL);
      boardPresenter.init();
      boardPresenter.createTask(handleTaskNewFormClose);
      siteMenuComponent.getElement().querySelector(`[value=${MenuItem.TASKS}]`).disabled = true;
      break;
    case MenuItem.TASKS:
      boardPresenter.init();
      remove(statisticsComponent);
      break;
    case MenuItem.STATISTICS:
      boardPresenter.destroy();
      statisticsComponent = new StatisticsView(tasksModel.getTasks());
      render(siteMainElement, statisticsComponent);
      break;
  }
};

siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);

filterPresenter.init();
boardPresenter.init();
