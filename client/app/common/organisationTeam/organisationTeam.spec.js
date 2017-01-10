/* global inject, expect */
import OrganisationTeamModule from './organisationTeam';
import OrganisationTeamController from './organisationTeam.controller';
import OrganisationTeamComponent from './organisationTeam.component';
import OrganisationTeamTemplate from './organisationTeam.html';

describe('OrganisationTeam', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(OrganisationTeamModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      expect($rootScope).to.exist();
      return new OrganisationTeamController();
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
      expect(OrganisationTeamTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = OrganisationTeamComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrganisationTeamTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrganisationTeamController);
    });
  });
});
