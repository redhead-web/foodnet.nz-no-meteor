class OrganisationController {
  constructor() {
    this.name = 'organisation';

    this.searchFilter = '';
    this.searchActive = false;

    // ----- TODO: these need to be passed in through root scope -----
    this.userActive = true;
    this.user = { _id: 'someId', emails: [{ primaryContact: 'true', address: 'admin@admin.co.nz' }] };
    this.pageOwned = true;
    this.organisation = { _id: 'someId', name: 'Whangarei Food Co-op', tags: 'carrots', tagLine: 'Local - Fresh - Affordable', description: { short: 'spoon hammer fork', long: 'spoon hammer fork mustard cheese' }, locations: [{ address: '1 woods road', headOffice: true }, { address: 'some place else' }], openingHours: 'Tuesdays 3-6pm', type: 'Co-operitive Company', registration: 'Company Registration Number', gstReg: false, gstNum: 'GST Number', website: 'www.somelpace.co.nz' };
    this.organisationInputs = [{ _id: 'someId', name: 'carots' }, { _id: 'someOtherId', name: 'beatroot' }];
    this.organisationOutputs = [{ _id: 'someId', name: 'carots' }, { _id: 'someOtherId', name: 'beatroot' }];
    this.organisationTeam = [{ _id: 'someId', name: 'Sean Stanley', roles: ['Administrator'] }, { _id: 'someId', name: 'Matt Stanley', roles: ['Director'] }, { _id: 'someId', name: 'Clive McKeg', roles: ['Director'] }];
  }
}

export default OrganisationController;
