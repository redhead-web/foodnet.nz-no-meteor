import template from './profileEdit.html';
import controller from './profileEdit.controller';
import './profileEdit.scss';

const profileEditComponent = {
  restrict: 'E',
  bindings: { profileData: '<' },
  template,
  controller,
};

export default profileEditComponent;
