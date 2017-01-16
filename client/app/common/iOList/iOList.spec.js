/* global inject, expect */
import iOListModule from './iOList';
import IOListController from './iOList.controller';
import iOListComponent from './iOList.component';
import iOListTemplate from './iOList.html';

describe('iOList', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(iOListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new IOListController();
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
      expect(iOListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = iOListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(iOListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(IOListController);
    });
  });
});
