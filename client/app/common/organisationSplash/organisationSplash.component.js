import template from './organisationSplash.html';
import controller from './organisationSplash.controller';
import './organisationSplash.scss';

const organisationSplashComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
  },
  template,
  controller,
};

export default organisationSplashComponent;
