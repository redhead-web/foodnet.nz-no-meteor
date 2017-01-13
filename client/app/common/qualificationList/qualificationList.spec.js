/* global inject, expect */
import qualificationListModule from './qualificationList';
import QualificationListController from './qualificationList.controller';
import qualificationListComponent from './qualificationList.component';
import qualificationListTemplate from './qualificationList.html';

describe('qualificationList', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(qualificationListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new QualificationListController();
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
      expect(qualificationListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = qualificationListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(qualificationListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(QualificationListController);
    });
  });
});
