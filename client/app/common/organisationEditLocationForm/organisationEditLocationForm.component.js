import template from './organisationEditLocationForm.html';
import controller from './organisationEditLocationForm.controller';
import './organisationEditLocationForm.scss';

const organisationEditLocationFormComponent = {
  restrict: 'E',
  bindings: {
    location: '<',
    modifyLocation: '&',
  },
  template,
  controller,
};

export default organisationEditLocationFormComponent;
