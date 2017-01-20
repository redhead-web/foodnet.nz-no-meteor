import template from './organisationAvatar.html';
import controller from './organisationAvatar.controller';
import './organisationAvatar.scss';

const organisationAvatarComponent = {
  restrict: 'E',
  bindings: {
    size: '<',
    image: '<',
  },
  template,
  controller,
};

export default organisationAvatarComponent;
