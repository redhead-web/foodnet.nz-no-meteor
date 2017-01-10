/* global inject, expect */
import IOInputListModule from './iOInputList';
import IOInputListController from './iOInputList.controller';
import IOInputListComponent from './iOInputList.component';
import IOInputListTemplate from './iOInputList.html';

describe('IOInputList', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(IOInputListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new IOInputListController();
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
      expect(IOInputListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = IOInputListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(IOInputListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(IOInputListController);
    });
  });
});
