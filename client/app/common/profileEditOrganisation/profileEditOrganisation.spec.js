/* global inject, expect */
import ProfileEditOrganisationModule from './profileEditOrganisation';
import ProfileEditOrganisationController from './profileEditOrganisation.controller';
import ProfileEditOrganisationComponent from './profileEditOrganisation.component';
import ProfileEditOrganisationTemplate from './profileEditOrganisation.html';

describe('ProfileEditOrganisation', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ProfileEditOrganisationModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new ProfileEditOrganisationController();
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
      expect(ProfileEditOrganisationTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ProfileEditOrganisationComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProfileEditOrganisationTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProfileEditOrganisationController);
    });
  });
});
