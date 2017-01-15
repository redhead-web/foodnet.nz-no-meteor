/* global inject, expect */
import OrganisationEditLocationFormModule from './organisationEditLocationForm';
import OrganisationEditLocationFormController from './organisationEditLocationForm.controller';
import OrganisationEditLocationFormComponent from './organisationEditLocationForm.component';
import OrganisationEditLocationFormTemplate from './organisationEditLocationForm.html';

describe('OrganisationEditLocationForm', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationEditLocationFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationEditLocationFormController();
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
      expect(OrganisationEditLocationFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationEditLocationFormComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationEditLocationFormTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationEditLocationFormController);
    });
  });
});
