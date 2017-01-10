/* global inject, expect */
import OrganisationSplashModule from './organisationSplash';
import OrganisationSplashController from './organisationSplash.controller';
import OrganisationSplashComponent from './organisationSplash.component';
import OrganisationSplashTemplate from './organisationSplash.html';

describe('OrganisationSplash', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationSplashModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationSplashController();
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
      expect(OrganisationSplashTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationSplashComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationSplashTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationSplashController);
    });
  });
});
