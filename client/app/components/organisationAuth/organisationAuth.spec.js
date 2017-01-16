/* global inject, expect */
import OrganisationAuthModule from './organisationAuth';
import OrganisationAuthController from './organisationAuth.controller';
import OrganisationAuthComponent from './organisationAuth.component';
import OrganisationAuthTemplate from './organisationAuth.html';

describe('OrganisationAuth', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationAuthModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationAuthController();
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
      expect(OrganisationAuthTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationAuthComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationAuthTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationAuthController);
    });
  });
});
