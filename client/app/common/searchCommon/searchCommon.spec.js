/* global inject, expect */
import SearchCommonModule from './searchCommon';
import SearchCommonController from './searchCommon.controller';
import SearchCommonComponent from './searchCommon.component';
import SearchCommonTemplate from './searchCommon.html';

describe('SearchCommon', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(SearchCommonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new SearchCommonController();
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
      expect(SearchCommonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = SearchCommonComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SearchCommonTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SearchCommonController);
    });
  });
});
