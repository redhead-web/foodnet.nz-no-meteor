/* global inject, expect */
import IOAvatarModule from './iOAvatar';
import IOAvatarController from './iOAvatar.controller';
import IOAvatarComponent from './iOAvatar.component';
import IOAvatarTemplate from './iOAvatar.html';

describe('IOAvatar', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(IOAvatarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new IOAvatarController();
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
      expect(IOAvatarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = IOAvatarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(IOAvatarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(IOAvatarController);
    });
  });
});
