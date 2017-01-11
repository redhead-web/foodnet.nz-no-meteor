/* global inject, expect */
import OrganisationEditBrandingModule from './organisationEditBranding';
import OrganisationEditBrandingController from './organisationEditBranding.controller';
import OrganisationEditBrandingComponent from './organisationEditBranding.component';
import OrganisationEditBrandingTemplate from './organisationEditBranding.html';

describe('OrganisationEditBranding', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationEditBrandingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationEditBrandingController();
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
      expect(OrganisationEditBrandingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationEditBrandingComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationEditBrandingTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationEditBrandingController);
    });
  });
});
