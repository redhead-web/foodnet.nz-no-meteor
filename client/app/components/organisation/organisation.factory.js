const OrganisationFactory = ($http) => {
  'ngInject';

  const getOrganisationData = (id, options = {}) => $http.get(`/api/organisations/${id}`, options).then((response) => response.data);

  return { getOrganisationData };
};

export default OrganisationFactory;
