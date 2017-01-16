import template from './imgUpload.html';
import controller from './imgUpload.controller';
import './imgUpload.scss';

const iOAddButtonComponent = {
  restrict: 'E',
  bindings: {
    onSuccess: '&',
    onError: '&',
    onDelete: '&',
    clImg: '<',
    canEdit: '<',
  },
  template,
  controller,
};

export default iOAddButtonComponent;
