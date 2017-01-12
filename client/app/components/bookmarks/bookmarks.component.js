import template from './bookmarks.html';
import controller from './bookmarks.controller';
import './bookmarks.scss';

const bookmarksComponent = {
  restrict: 'E',
  bindings: { bookmarksData: '<' },
  template,
  controller,
};

export default bookmarksComponent;
