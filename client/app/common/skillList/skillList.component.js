import template from './skillList.html';
import controller from './skillList.controller';
import './skillList.scss';

const skillListComponent = {
  restrict: 'E',
  bindings: {
    user: '<',
    skills: '<',
  },
  template,
  controller,
};

export default skillListComponent;
