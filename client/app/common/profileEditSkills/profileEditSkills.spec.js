/* global inject, expect */
import ProfileEditSkillsModule from './profileEditSkills';
import ProfileEditSkillsController from './profileEditSkills.controller';
import ProfileEditSkillsComponent from './profileEditSkills.component';
import ProfileEditSkillsTemplate from './profileEditSkills.html';

describe('ProfileEditSkills', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ProfileEditSkillsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new ProfileEditSkillsController();
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
      expect(ProfileEditSkillsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ProfileEditSkillsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProfileEditSkillsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProfileEditSkillsController);
    });
  });
});
