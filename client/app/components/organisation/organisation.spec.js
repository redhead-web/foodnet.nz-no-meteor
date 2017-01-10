/* global inject, expect */
import OrganisationModule from './organisation';
import OrganisationController from './organisation.controller';
import OrganisationComponent from './organisation.component';
import OrganisationTemplate from './organisation.html';

describe('Organisation', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationController();
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
      expect(OrganisationTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationController);
    });
  });
});
