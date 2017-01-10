import template from './skillAvatar.html';
import controller from './skillAvatar.controller';
import './skillAvatar.scss';

const skillAvatarComponent = {
  restrict: 'E',
  bindings: {
    size: '<',
  },
  template,
  controller,
};

export default skillAvatarComponent;
