import template from './profileEditBasic.html';
import controller from './profileEditBasic.controller';
import './profileEditBasic.scss';

const profileEditBasicComponent = {
  restrict: 'E',
  bindings: {
    modifyProfile: '&',
    user: '<',
  },
  template,
  controller,
};

export default profileEditBasicComponent;
