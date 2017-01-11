/* global inject, expect */
import ProfileEditBasicModule from './profileEditBasic';
import ProfileEditBasicController from './profileEditBasic.controller';
import ProfileEditBasicComponent from './profileEditBasic.component';
import ProfileEditBasicTemplate from './profileEditBasic.html';

describe('ProfileEditBasic', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ProfileEditBasicModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new ProfileEditBasicController();
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
      expect(ProfileEditBasicTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ProfileEditBasicComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProfileEditBasicTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProfileEditBasicController);
    });
  });
});
