/* global inject, expect */
import SearchSuggestionsModule from './searchSuggestions';
import SearchSuggestionsController from './searchSuggestions.controller';
import SearchSuggestionsComponent from './searchSuggestions.component';
import SearchSuggestionsTemplate from './searchSuggestions.html';

describe('SearchSuggestions', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(SearchSuggestionsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new SearchSuggestionsController();
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
      expect(SearchSuggestionsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = SearchSuggestionsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SearchSuggestionsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SearchSuggestionsController);
    });
  });
});
