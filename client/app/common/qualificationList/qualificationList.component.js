import template from './qualificationList.html';
import controller from './qualificationList.controller';
import './qualificationList.scss';

const qualificationListComponent = {
  restrict: 'E',
  bindings: {
    onModify: '&',
    qualifications: '<',
    hideHeader: '<',
    pageOwned: '<',
  },
  template,
  controller,
};

export default qualificationListComponent;
