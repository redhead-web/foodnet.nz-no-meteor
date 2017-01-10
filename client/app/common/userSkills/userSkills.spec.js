/* global inject, expect */
import UserSkillsModule from './userSkills';
import UserSkillsController from './userSkills.controller';
import UserSkillsComponent from './userSkills.component';
import UserSkillsTemplate from './userSkills.html';

describe('UserSkills', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(UserSkillsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new UserSkillsController();
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
      expect(UserSkillsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = UserSkillsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(UserSkillsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(UserSkillsController);
    });
  });
});
