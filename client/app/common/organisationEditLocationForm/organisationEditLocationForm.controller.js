class OrganisationEditLocationFormController {
  constructor() {
    this.name = 'organisationEditLocationForm';
  }

  $onInit() {
    if (!this.location) {
      this.isNew = true;
    }
  }

  save(location) {
    if (this.isNew) {
      this.onSave({ location, method: 'insert' });
    } else {
      this.onSave({ location, method: 'update' });
    }
  }
}

export default OrganisationEditLocationFormController;
