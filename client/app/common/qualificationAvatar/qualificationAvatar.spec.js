/* global inject, expect */
import QualificationAvatarModule from './qualificationAvatar';
import QualificationAvatarController from './qualificationAvatar.controller';
import QualificationAvatarComponent from './qualificationAvatar.component';
import QualificationAvatarTemplate from './qualificationAvatar.html';

describe('QualificationAvatar', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(QualificationAvatarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new QualificationAvatarController();
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
      expect(QualificationAvatarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = QualificationAvatarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(QualificationAvatarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(QualificationAvatarController);
    });
  });
});
