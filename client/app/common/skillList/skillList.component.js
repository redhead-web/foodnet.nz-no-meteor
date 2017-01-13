import template from './skillList.html';
import controller from './skillList.controller';
import './skillList.scss';

const skillListComponent = {
  restrict: 'E',
  bindings: {
    onModify: '&',
    skills: '<',
    hideHeader: '<',
    pageOwned: '<',
  },
  template,
  controller,
};

export default skillListComponent;
