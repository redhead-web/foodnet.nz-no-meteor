/* global inject, expect */
import UserAssociationsModule from './userAssociations';
import UserAssociationsController from './userAssociations.controller';
import UserAssociationsComponent from './userAssociations.component';
import UserAssociationsTemplate from './userAssociations.html';

describe('UserAssociations', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(UserAssociationsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new UserAssociationsController();
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
      expect(UserAssociationsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = UserAssociationsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(UserAssociationsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(UserAssociationsController);
    });
  });
});
