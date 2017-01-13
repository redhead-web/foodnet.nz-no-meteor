import template from './organisationEditBranding.html';
import controller from './organisationEditBranding.controller';
import './organisationEditBranding.scss';

const organisationEditBrandingComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
    modifyOrganisation: '&',
  },
  template,
  controller,
};

export default organisationEditBrandingComponent;
