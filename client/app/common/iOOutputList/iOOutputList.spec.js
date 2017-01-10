/* global inject, expect */
import IOOutputListModule from './iOOutputList';
import IOOutputListController from './iOOutputList.controller';
import IOOutputListComponent from './iOOutputList.component';
import IOOutputListTemplate from './iOOutputList.html';

describe('IOOutputList', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(IOOutputListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new IOOutputListController();
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
      expect(IOOutputListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = IOOutputListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(IOOutputListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(IOOutputListController);
    });
  });
});
