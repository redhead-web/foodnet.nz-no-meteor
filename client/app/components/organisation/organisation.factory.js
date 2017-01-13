const OrganisationFactory = ($http) => {
  'ngInject';

  const getOrganisationData = (id, options = {}) => $http.get(`/api/one/organisations/${id}`, options).then((response) => response.data);
  const getBookmarksData = (id, options = {}) => $http.get('/api/organisations/bookmarks', options).then((response) => response.data);
  const getNewestData = (id, options = {}) => $http.get('/api/organisations/newest', options).then((response) => response.data);
  const getPopularData = (id, options = {}) => $http.get('/api/organisations/popular', options).then((response) => response.data);

  return { getOrganisationData, getBookmarksData, getNewestData, getPopularData };
};

export default OrganisationFactory;
