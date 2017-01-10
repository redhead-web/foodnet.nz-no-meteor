/* global inject, expect */
import SkillAvatarModule from './skillAvatar';
import SkillAvatarController from './skillAvatar.controller';
import SkillAvatarComponent from './skillAvatar.component';
import SkillAvatarTemplate from './skillAvatar.html';

describe('SkillAvatar', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(SkillAvatarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new SkillAvatarController();
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
      expect(SkillAvatarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = SkillAvatarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SkillAvatarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SkillAvatarController);
    });
  });
});
