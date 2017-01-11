/* global inject, expect */
import OrganisationListSmallModule from './organisationListSmall';
import OrganisationListSmallController from './organisationListSmall.controller';
import OrganisationListSmallComponent from './organisationListSmall.component';
import OrganisationListSmallTemplate from './organisationListSmall.html';

describe('OrganisationListSmall', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationListSmallModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationListSmallController();
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
      expect(OrganisationListSmallTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationListSmallComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationListSmallTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationListSmallController);
    });
  });
});
