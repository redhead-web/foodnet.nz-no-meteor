/* global inject, expect */
import OrganisationDashboardIOModule from './organisationDashboardIO';
import OrganisationDashboardIOController from './organisationDashboardIO.controller';
import OrganisationDashboardIOComponent from './organisationDashboardIO.component';
import OrganisationDashboardIOTemplate from './organisationDashboardIO.html';

describe('OrganisationDashboardIO', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationDashboardIOModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationDashboardIOController();
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
      expect(OrganisationDashboardIOTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationDashboardIOComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationDashboardIOTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationDashboardIOController);
    });
  });
});
