/* global inject, expect */
import ButtonPopupModule from './buttonPopup';
import ButtonPopupController from './buttonPopup.controller';
import ButtonPopupComponent from './buttonPopup.component';
import ButtonPopupTemplate from './buttonPopup.html';

describe('ButtonPopup', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ButtonPopupModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new ButtonPopupController();
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
      expect(ButtonPopupTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ButtonPopupComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ButtonPopupTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ButtonPopupController);
    });
  });
});
