import template from './organisationEditLinks.html';
import controller from './organisationEditLinks.controller';
import './organisationEditLinks.scss';

const organisationEditLinksComponent = {
  restrict: 'E',
  bindings: {
    organisation: '=',
  },
  template,
  controller,
};

export default organisationEditLinksComponent;
