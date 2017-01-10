/* global inject, expect */
import ProfileModule from './profile';
import ProfileController from './profile.controller';
import ProfileComponent from './profile.component';
import ProfileTemplate from './profile.html';

describe('Profile', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ProfileModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new ProfileController();
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
      expect(ProfileTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ProfileComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProfileTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProfileController);
    });
  });
});
