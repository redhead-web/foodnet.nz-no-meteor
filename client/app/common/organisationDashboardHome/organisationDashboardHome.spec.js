/* global inject, expect */
import OrganisationDashboardHomeModule from './organisationDashboardHome';
import OrganisationDashboardHomeController from './organisationDashboardHome.controller';
import OrganisationDashboardHomeComponent from './organisationDashboardHome.component';
import OrganisationDashboardHomeTemplate from './organisationDashboardHome.html';

describe('OrganisationDashboardHome', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationDashboardHomeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationDashboardHomeController();
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
      expect(OrganisationDashboardHomeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationDashboardHomeComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationDashboardHomeTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationDashboardHomeController);
    });
  });
});
