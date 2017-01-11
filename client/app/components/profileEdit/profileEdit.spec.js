/* global inject, expect */
import ProfileEditModule from './profileEdit';
import ProfileEditController from './profileEdit.controller';
import ProfileEditComponent from './profileEdit.component';
import ProfileEditTemplate from './profileEdit.html';

describe('ProfileEdit', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ProfileEditModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new ProfileEditController();
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
      expect(ProfileEditTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ProfileEditComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProfileEditTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProfileEditController);
    });
  });
});
