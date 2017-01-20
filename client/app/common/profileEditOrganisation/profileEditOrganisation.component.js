import template from './profileEditOrganisation.html';
import controller from './profileEditOrganisation.controller';
import './profileEditOrganisation.scss';

const profileEditOrganisationComponent = {
  restrict: 'E',
  bindings: {
    user: '<',
    index: '<',
    organisation: '<',
    modifyOrganisation: '&',
  },
  template,
  controller,
};

export default profileEditOrganisationComponent;
