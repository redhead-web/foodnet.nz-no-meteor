/* global inject, expect */
import OrganisationEditModule from './organisationEdit';
import OrganisationEditController from './organisationEdit.controller';
import OrganisationEditComponent from './organisationEdit.component';
import OrganisationEditTemplate from './organisationEdit.html';

describe('OrganisationEdit', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationEditModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationEditController();
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
      expect(OrganisationEditTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationEditComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationEditTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationEditController);
    });
  });
});
