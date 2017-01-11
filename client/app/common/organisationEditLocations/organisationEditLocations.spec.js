/* global inject, expect */
import OrganisationEditLocationsModule from './organisationEditLocations';
import OrganisationEditLocationsController from './organisationEditLocations.controller';
import OrganisationEditLocationsComponent from './organisationEditLocations.component';
import OrganisationEditLocationsTemplate from './organisationEditLocations.html';

describe('OrganisationEditLocations', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationEditLocationsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationEditLocationsController();
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
      expect(OrganisationEditLocationsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationEditLocationsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationEditLocationsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationEditLocationsController);
    });
  });
});
