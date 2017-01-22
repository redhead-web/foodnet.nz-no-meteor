/* global inject, expect */
import GaAutocompleteModule from './gaAutocomplete';
import GaAutocompleteController from './gaAutocomplete.controller';
import GaAutocompleteComponent from './gaAutocomplete.component';
import GaAutocompleteTemplate from './gaAutocomplete.html';

describe('GaAutocomplete', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(GaAutocompleteModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new GaAutocompleteController();
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
      expect(GaAutocompleteTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = GaAutocompleteComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(GaAutocompleteTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(GaAutocompleteController);
    });
  });
});
