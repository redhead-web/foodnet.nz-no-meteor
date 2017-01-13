import template from './organisationEditLinks.html';
import controller from './organisationEditLinks.controller';
import './organisationEditLinks.scss';

const organisationEditLinksComponent = {
  restrict: 'E',
  bindings: {
    modifyOrganisation: '&',
    organisation: '<',
  },
  template,
  controller,
};

export default organisationEditLinksComponent;
