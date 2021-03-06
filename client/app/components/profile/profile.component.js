import template from './profile.html';
import controller from './profile.controller';
import './profile.scss';

const profileComponent = {
  restrict: 'E',
  bindings: { profileData: '<' },
  template,
  controller,
};

export default profileComponent;
