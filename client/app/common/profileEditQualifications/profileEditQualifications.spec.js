/* global inject, expect */
import ProfileEditQualificationsModule from './profileEditQualifications';
import ProfileEditQualificationsController from './profileEditQualifications.controller';
import ProfileEditQualificationsComponent from './profileEditQualifications.component';
import ProfileEditQualificationsTemplate from './profileEditQualifications.html';

describe('ProfileEditQualifications', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ProfileEditQualificationsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new ProfileEditQualificationsController();
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
      expect(ProfileEditQualificationsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ProfileEditQualificationsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProfileEditQualificationsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProfileEditQualificationsController);
    });
  });
});
