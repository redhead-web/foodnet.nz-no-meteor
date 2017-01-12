/* global inject, expect */
import BookmarksModule from './bookmarks';
import BookmarksController from './bookmarks.controller';
import BookmarksComponent from './bookmarks.component';
import BookmarksTemplate from './bookmarks.html';

describe('Bookmarks', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(BookmarksModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new BookmarksController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(BookmarksTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = BookmarksComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BookmarksTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BookmarksController);
    });
  });
});
