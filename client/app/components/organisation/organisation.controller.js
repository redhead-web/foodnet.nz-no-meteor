class OrganisationController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'organisation';

    this.searchFilter = '';
    this.searchActive = false;
    this.organisationActive = $stateParams.organisationId;
    // data from API
    // this.organisationData = organisationData;
    // { organisation: {}, inputs: [], outputs: [], team: [] }

    // ----- TODO: these need to be passed in through root scope -----
    this.userActive = true;
    this.user = { _id: 'someId', emails: [{ primaryContact: 'true', address: 'admin@admin.co.nz' }], profile: { bookmarks: ['someId'] } };
    this.pageOwned = true;
  }
}

export default OrganisationController;
