/* eslint-disable no-plusplus */
import settings from '../../config';

class photoUploadController {
  constructor($scope, $rootScope, Upload) {
    'ngInject';

    this.blobPreview = undefined;
    this.Upload = Upload;
  }

  uploadFiles(file, errFiles) {
    if (!this.canEdit) {
      return;
    }
    this.invalidFiles = [];
    if (errFiles.length > 0) {
      this.invalidFiles = errFiles;
      return;
    }
    if (file && !file.$error) {
      // get instant preview
      this.blobPreview = file.$ngfBlobUrl;
      this.uploadFile(file);
    }
  }

  uploadFile(file) {
    this.Upload.upload({
      url: `https://api.cloudinary.com/v1_1/${settings.cloudinary.cloud_name}/image/upload`,
      fields: {
        upload_preset: settings.cloudinary.upload_preset,
        tags: settings.siteName,
      },
      file,
    }).then((data) => {
      this.onSuccess({ data });
      this.blobPreview = undefined;
    }, (error) => {
      // on error
      this.blobPreview = undefined;
      this.status = `Error: ${error.data.error.message}`;
      this.onError({ error });
    }, (e) => {
      this.progress = Math.round((e.loaded * 100.0) / e.total);
      // this.status = `'Uploading... ${file.progress}%`;
    });
  }

  dragOverClass($event) {
    const items = $event.dataTransfer.items;
    let hasFile = false;
    if (items != null) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].kind === 'file') {
          hasFile = true;
          break;
        }
      }
    } else {
      hasFile = true;
    }
    return hasFile ? 'dragover' : 'dragover-err';
  }
}

export default photoUploadController;
