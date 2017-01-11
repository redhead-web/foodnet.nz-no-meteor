/* global inject, expect */
import ProfileEditLinksModule from './profileEditLinks';
import ProfileEditLinksController from './profileEditLinks.controller';
import ProfileEditLinksComponent from './profileEditLinks.component';
import ProfileEditLinksTemplate from './profileEditLinks.html';

describe('ProfileEditLinks', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ProfileEditLinksModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new ProfileEditLinksController();
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
      expect(ProfileEditLinksTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ProfileEditLinksComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProfileEditLinksTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProfileEditLinksController);
    });
  });
});
