import template from './iOAvatar.html';
import controller from './iOAvatar.controller';
import './iOAvatar.scss';

const iOAvatarComponent = {
  restrict: 'E',
  bindings: {
    size: '<',
  },
  template,
  controller,
};

export default iOAvatarComponent;
