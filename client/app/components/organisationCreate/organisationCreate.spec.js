/* global inject, expect */
import OrganisationCreateModule from './organisationCreate';
import OrganisationCreateController from './organisationCreate.controller';
import OrganisationCreateComponent from './organisationCreate.component';
import OrganisationCreateTemplate from './organisationCreate.html';

describe('OrganisationCreate', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationCreateModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationCreateController();
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
      expect(OrganisationCreateTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationCreateComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationCreateTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationCreateController);
    });
  });
});
