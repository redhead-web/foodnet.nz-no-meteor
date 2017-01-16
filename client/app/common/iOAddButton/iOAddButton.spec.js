/* global inject, expect */
import IOAddButtonModule from './iOAddButton';
import IOAddButtonController from './iOAddButton.controller';
import IOAddButtonComponent from './iOAddButton.component';
import IOAddButtonTemplate from './iOAddButton.html';

describe('IOAddButton', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(IOAddButtonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new IOAddButtonController();
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
      expect(IOAddButtonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = IOAddButtonComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(IOAddButtonTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(IOAddButtonController);
    });
  });
});
