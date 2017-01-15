/* global inject, expect */
import OrganisationEditTeamMemberModule from './organisationEditTeamMember';
import OrganisationEditTeamMemberController from './organisationEditTeamMember.controller';
import OrganisationEditTeamMemberComponent from './organisationEditTeamMember.component';
import OrganisationEditTeamMemberTemplate from './organisationEditTeamMember.html';

describe('OrganisationEditTeamMember', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationEditTeamMemberModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationEditTeamMemberController();
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
      expect(OrganisationEditTeamMemberTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationEditTeamMemberComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationEditTeamMemberTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationEditTeamMemberController);
    });
  });
});
