import template from './profileEditQualifications.html';
import controller from './profileEditQualifications.controller';
import './profileEditQualifications.scss';

const profileEditQualificationsComponent = {
  restrict: 'E',
  bindings: {
    modifyQualifications: '&',
    user: '<',
    qualifications: '<',
  },
  template,
  controller,
};

export default profileEditQualificationsComponent;
