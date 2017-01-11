/* global inject, expect */
import OrganisationEditOutputsModule from './organisationEditOutputs';
import OrganisationEditOutputsController from './organisationEditOutputs.controller';
import OrganisationEditOutputsComponent from './organisationEditOutputs.component';
import OrganisationEditOutputsTemplate from './organisationEditOutputs.html';

describe('OrganisationEditOutputs', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationEditOutputsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationEditOutputsController();
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
      expect(OrganisationEditOutputsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationEditOutputsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationEditOutputsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationEditOutputsController);
    });
  });
});
