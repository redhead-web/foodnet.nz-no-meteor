/* global inject, expect */
import SkillListModule from './skillList';
import SkillListController from './skillList.controller';
import SkillListComponent from './skillList.component';
import SkillListTemplate from './skillList.html';

describe('SkillList', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(SkillListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new SkillListController();
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
      expect(SkillListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = SkillListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SkillListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SkillListController);
    });
  });
});
