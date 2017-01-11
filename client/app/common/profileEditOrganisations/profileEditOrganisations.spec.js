/* global inject, expect */
import ProfileEditOrganisationsModule from './profileEditOrganisations';
import ProfileEditOrganisationsController from './profileEditOrganisations.controller';
import ProfileEditOrganisationsComponent from './profileEditOrganisations.component';
import ProfileEditOrganisationsTemplate from './profileEditOrganisations.html';

describe('ProfileEditOrganisations', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ProfileEditOrganisationsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new ProfileEditOrganisationsController();
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
      expect(ProfileEditOrganisationsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ProfileEditOrganisationsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProfileEditOrganisationsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProfileEditOrganisationsController);
    });
  });
});
