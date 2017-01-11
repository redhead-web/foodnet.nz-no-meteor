import template from './profileEditOrganisations.html';
import controller from './profileEditOrganisations.controller';
import './profileEditOrganisations.scss';

const profileEditOrganisationsComponent = {
  restrict: 'E',
  bindings: {
    user: '<',
    organisations: '<',
  },
  template,
  controller,
};

export default profileEditOrganisationsComponent;
