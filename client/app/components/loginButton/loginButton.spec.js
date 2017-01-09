/* global inject, expect */
import LoginButtonModule from './loginButton';
import LoginButtonController from './loginButton.controller';
import LoginButtonComponent from './loginButton.component';
import LoginButtonTemplate from './loginButton.html';

describe('LoginButton', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(LoginButtonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new LoginButtonController();
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
      expect(LoginButtonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = LoginButtonComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(LoginButtonTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(LoginButtonController);
    });
  });
});
