import template from './promoSplash.html';
import controller from './promoSplash.controller';
import './promoSplash.scss';

const promoSplashComponent = {
  restrict: 'E',
  bindings: {
    text: '<',
  },
  template,
  controller,
};

export default promoSplashComponent;
