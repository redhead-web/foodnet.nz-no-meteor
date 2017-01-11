/* global inject, expect */
import OrganisationEditTeamModule from './organisationEditTeam';
import OrganisationEditTeamController from './organisationEditTeam.controller';
import OrganisationEditTeamComponent from './organisationEditTeam.component';
import OrganisationEditTeamTemplate from './organisationEditTeam.html';

describe('OrganisationEditTeam', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationEditTeamModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationEditTeamController();
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
      expect(OrganisationEditTeamTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationEditTeamComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationEditTeamTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationEditTeamController);
    });
  });
});
