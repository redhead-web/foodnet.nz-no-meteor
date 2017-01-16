import angular from 'angular';
import ngFileUpload from 'ng-file-upload';
import 'cloudinary-angular/dist/cloudinary-angular';
import imgUploadComponent from './imgUpload.component';
import settings from '../../config';

const name = 'imgUpload';

// create a module
export default angular.module(name, [
  'cloudinary',
  ngFileUpload,
]).component(name, imgUploadComponent)
  .config((CloudinaryProvider) => {
    'ngInject';

    CloudinaryProvider.configure({
      cloud_name: settings.cloudinary.cloud_name,
      api_key: settings.cloudinary.upload_preset,
    });
  })

  .name;
