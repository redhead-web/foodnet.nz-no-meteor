import template from './buttonPopup.html';
import controller from './buttonPopup.controller';
import './buttonPopup.scss';

const buttonPopupComponent = {
  restrict: 'E',
  bindings: {
    onComplete: '&',
    fields: '<',
    listName: '<',
  },
  template,
  controller,
};

export default buttonPopupComponent;
