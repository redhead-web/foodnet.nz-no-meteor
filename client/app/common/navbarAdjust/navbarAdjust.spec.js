/* global inject, expect */
import NavbarAdjustModule from './navbarAdjust';
import NavbarAdjustController from './navbarAdjust.controller';
import NavbarAdjustComponent from './navbarAdjust.component';
import NavbarAdjustTemplate from './navbarAdjust.html';

describe('NavbarAdjust', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(NavbarAdjustModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new NavbarAdjustController();
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
      expect(NavbarAdjustTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = NavbarAdjustComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NavbarAdjustTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NavbarAdjustController);
    });
  });
});
