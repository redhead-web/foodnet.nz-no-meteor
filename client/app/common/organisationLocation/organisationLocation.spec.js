/* global inject, expect */
import OrganisationLocationModule from './organisationLocation';
import OrganisationLocationController from './organisationLocation.controller';
import OrganisationLocationComponent from './organisationLocation.component';
import OrganisationLocationTemplate from './organisationLocation.html';

describe('OrganisationLocation', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationLocationModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationLocationController();
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
      expect(OrganisationLocationTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationLocationComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationLocationTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationLocationController);
    });
  });
});
