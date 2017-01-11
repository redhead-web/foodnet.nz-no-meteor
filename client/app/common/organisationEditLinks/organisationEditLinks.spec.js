/* global inject, expect */
import OrganisationEditLinksModule from './organisationEditLinks';
import OrganisationEditLinksController from './organisationEditLinks.controller';
import OrganisationEditLinksComponent from './organisationEditLinks.component';
import OrganisationEditLinksTemplate from './organisationEditLinks.html';

describe('OrganisationEditLinks', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationEditLinksModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationEditLinksController();
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
      expect(OrganisationEditLinksTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationEditLinksComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationEditLinksTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationEditLinksController);
    });
  });
});
