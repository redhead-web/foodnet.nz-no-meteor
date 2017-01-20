import template from './userAvatar.html';
import controller from './userAvatar.controller';
import './userAvatar.scss';

const userAvatarComponent = {
  restrict: 'E',
  bindings: {
    size: '<',
    image: '<',
  },
  template,
  controller,
};

export default userAvatarComponent;
