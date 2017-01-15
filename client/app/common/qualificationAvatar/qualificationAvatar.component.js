import template from './qualificationAvatar.html';
import controller from './qualificationAvatar.controller';
import './qualificationAvatar.scss';

const qualificationAvatarComponent = {
  restrict: 'E',
  bindings: {
    size: '<',
  },
  template,
  controller,
};

export default qualificationAvatarComponent;
