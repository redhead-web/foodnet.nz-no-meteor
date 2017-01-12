const ProfileFactory = ($http) => {
  'ngInject';

  const getProfileData = (id, options = {}) => $http.get(`/api/profiles/${id}`, options).then((response) => response.data);

  return { getProfileData };
};

export default ProfileFactory;
