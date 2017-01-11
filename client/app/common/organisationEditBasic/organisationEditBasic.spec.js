/* global inject, expect */
import OrganisationEditBasicModule from './organisationEditBasic';
import OrganisationEditBasicController from './organisationEditBasic.controller';
import OrganisationEditBasicComponent from './organisationEditBasic.component';
import OrganisationEditBasicTemplate from './organisationEditBasic.html';

describe('OrganisationEditBasic', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationEditBasicModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationEditBasicController();
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
      expect(OrganisationEditBasicTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationEditBasicComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationEditBasicTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationEditBasicController);
    });
  });
});
