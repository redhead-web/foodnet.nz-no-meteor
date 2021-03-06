/* global inject, expect */
import PromoSplashModule from './promoSplash';
import PromoSplashController from './promoSplash.controller';
import PromoSplashComponent from './promoSplash.component';
import PromoSplashTemplate from './promoSplash.html';

describe('PromoSplash', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(PromoSplashModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new PromoSplashController();
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
      expect(PromoSplashTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = PromoSplashComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PromoSplashTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PromoSplashController);
    });
  });
});
