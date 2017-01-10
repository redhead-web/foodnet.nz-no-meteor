import template from './userInfo.html';
import controller from './userInfo.controller';
import './userInfo.scss';

const userInfoComponent = {
  restrict: 'E',
  bindings: {
    user: '<',
  },
  template,
  controller,
};

export default userInfoComponent;
