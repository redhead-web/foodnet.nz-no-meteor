class OrganisationEditLinksController {
  constructor() {
    this.name = 'organisationEditLinks';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'emails', value: this.organisation.emails },
      { type: 'update', field: 'facebook', value: this.organisation.facebook },
      { type: 'update', field: 'twitter', value: this.organisation.twitter },
      { type: 'update', field: 'instagram', value: this.organisation.instagram },
      { type: 'update', field: 'youtube', value: this.organisation.youtube },
    ];
    const stateChange = 'organisation';
    this.modifyOrganisation({ modifyDetails, stateChange });
  }
}

export default OrganisationEditLinksController;
