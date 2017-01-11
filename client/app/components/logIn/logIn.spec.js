/* global inject, expect */
import LogInModule from './logIn';
import LogInController from './logIn.controller';
import LogInComponent from './logIn.component';
import LogInTemplate from './logIn.html';

describe('LogIn', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(LogInModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new LogInController();
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
      expect(LogInTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = LogInComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(LogInTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(LogInController);
    });
  });
});
