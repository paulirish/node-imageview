# imageview

Preview your uploaded images in the browser before uploading and also get their data uri to submit to a form.

## Usage

    var ImageView = require('imageview');
    var iv = new ImageView({
      picField: 'photo',
      photoSelector: 'photo-picker',
      quality: 0.4,
      maxSize: 100
    });

    iv.preview();

`picField` and `photoSelector` are the document IDs for each DOM element. They default to the ones above if nothing is provided. `quality` defaults to 0.4 for JPEG quality and `maxSize` is the maximum width for the resized image.
