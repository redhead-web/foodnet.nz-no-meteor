import template from './userAvatar.html';
import controller from './userAvatar.controller';
import './userAvatar.scss';

const userAvatarComponent = {
  restrict: 'E',
  bindings: {
    size: '<',
  },
  template,
  controller,
};

export default userAvatarComponent;
