/* global inject, expect */
import OrganisationInfoModule from './organisationInfo';
import OrganisationInfoController from './organisationInfo.controller';
import OrganisationInfoComponent from './organisationInfo.component';
import OrganisationInfoTemplate from './organisationInfo.html';

describe('OrganisationInfo', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationInfoModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationInfoController();
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
      expect(OrganisationInfoTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationInfoComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationInfoTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationInfoController);
    });
  });
});
