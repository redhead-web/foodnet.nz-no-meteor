import template from './profileEditBasic.html';
import controller from './profileEditBasic.controller';
import './profileEditBasic.scss';

const profileEditBasicComponent = {
  restrict: 'E',
  bindings: {
    user: '=',
  },
  template,
  controller,
};

export default profileEditBasicComponent;
