const MAX_DAYS_GAP = 7;

const TASK_COUNT = 22;

const SortType = {
  DEFAULT: `default`,
  DATE_DOWN: `date-down`,
  DATE_UP: `date-up`
};

const UserAction = {
  UPDATE_TASK: `UPDATE_TASK`,
  ADD_TASK: `ADD_TASK`,
  DELETE_TASK: `DELETE_TASK`
};

const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`
};

const FilterType = {
  ALL: `all`,
  OVERDUE: `overdue`,
  TODAY: `today`,
  FAVORITES: `favorites`,
  REPEATING: `repeating`,
  ARCHIVE: `archive`
};

const MenuItem = {
  ADD_NEW_TASK: `ADD_NEW_TASK`,
  TASKS: `TASKS`,
  STATISTICS: `STATISTICS`
};

const Color = {
  BLACK: `black`,
  YELLOW: `yellow`,
  BLUE: `blue`,
  GREEN: `green`,
  PINK: `pink`
};

const COLORS = Object.values(Color);

export {MAX_DAYS_GAP, TASK_COUNT, SortType, UserAction, UpdateType, FilterType, MenuItem, Color, COLORS};
