/* global inject, expect */
import OrganisationSummaryModule from './organisationSummary';
import OrganisationSummaryController from './organisationSummary.controller';
import OrganisationSummaryComponent from './organisationSummary.component';
import OrganisationSummaryTemplate from './organisationSummary.html';

describe('OrganisationSummary', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationSummaryModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationSummaryController();
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
      expect(OrganisationSummaryTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationSummaryComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationSummaryTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationSummaryController);
    });
  });
});
