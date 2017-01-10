/* global inject, expect */
import UserAvatarModule from './userAvatar';
import UserAvatarController from './userAvatar.controller';
import UserAvatarComponent from './userAvatar.component';
import UserAvatarTemplate from './userAvatar.html';

describe('UserAvatar', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(UserAvatarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new UserAvatarController();
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
      expect(UserAvatarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = UserAvatarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(UserAvatarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(UserAvatarController);
    });
  });
});
