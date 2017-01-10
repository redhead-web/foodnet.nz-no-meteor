/* global inject, expect */
import OrganisationAvatarModule from './organisationAvatar';
import OrganisationAvatarController from './organisationAvatar.controller';
import OrganisationAvatarComponent from './organisationAvatar.component';
import OrganisationAvatarTemplate from './organisationAvatar.html';

describe('OrganisationAvatar', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationAvatarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationAvatarController();
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
      expect(OrganisationAvatarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationAvatarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationAvatarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationAvatarController);
    });
  });
});
