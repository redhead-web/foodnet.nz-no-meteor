/* global inject, expect */
import OrganisationListModule from './organisationList';
import OrganisationListController from './organisationList.controller';
import OrganisationListComponent from './organisationList.component';
import OrganisationListTemplate from './organisationList.html';

describe('OrganisationList', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationListController();
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
      expect(OrganisationListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationListController);
    });
  });
});
