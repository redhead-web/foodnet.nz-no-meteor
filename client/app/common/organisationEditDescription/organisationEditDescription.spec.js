/* global inject, expect */
import OrganisationEditDescriptionModule from './organisationEditDescription';
import OrganisationEditDescriptionController from './organisationEditDescription.controller';
import OrganisationEditDescriptionComponent from './organisationEditDescription.component';
import OrganisationEditDescriptionTemplate from './organisationEditDescription.html';

describe('OrganisationEditDescription', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationEditDescriptionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationEditDescriptionController();
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
      expect(OrganisationEditDescriptionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationEditDescriptionComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationEditDescriptionTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationEditDescriptionController);
    });
  });
});
