const BookmarksFactory = ($http) => {
  'ngInject';

  const getBookmarksData = (id, options = {}) => $http.get('/api/organisations/bookmarks', options).then((response) => response.data);

  return { getBookmarksData };
};

export default BookmarksFactory;
