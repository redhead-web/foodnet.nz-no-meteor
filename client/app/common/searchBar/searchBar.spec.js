/* global inject, expect */
import SearchBarModule from './searchBar';
import SearchBarController from './searchBar.controller';
import SearchBarComponent from './searchBar.component';
import SearchBarTemplate from './searchBar.html';

describe('SearchBar', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(SearchBarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new SearchBarController();
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
      expect(SearchBarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = SearchBarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SearchBarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SearchBarController);
    });
  });
});
