/* global inject, expect */
import OrganisationEditInputsModule from './organisationEditInputs';
import OrganisationEditInputsController from './organisationEditInputs.controller';
import OrganisationEditInputsComponent from './organisationEditInputs.component';
import OrganisationEditInputsTemplate from './organisationEditInputs.html';

describe('OrganisationEditInputs', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationEditInputsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationEditInputsController();
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
      expect(OrganisationEditInputsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationEditInputsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationEditInputsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationEditInputsController);
    });
  });
});
