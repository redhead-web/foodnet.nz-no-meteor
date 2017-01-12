/* global inject, expect */
import SearchModule from './search';
import SearchController from './search.controller';
import SearchComponent from './search.component';
import SearchTemplate from './search.html';

describe('Search', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(SearchModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new SearchController();
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
      expect(SearchTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = SearchComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SearchTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SearchController);
    });
  });
});
