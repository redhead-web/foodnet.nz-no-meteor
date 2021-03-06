import template from './profileEditLinks.html';
import controller from './profileEditLinks.controller';
import './profileEditLinks.scss';

const profileEditLinksComponent = {
  restrict: 'E',
  bindings: {
    modifyProfile: '&',
    user: '<',
  },
  template,
  controller,
};

export default profileEditLinksComponent;
