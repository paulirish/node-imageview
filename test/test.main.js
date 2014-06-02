'use strict';

var should = require('chai').should();

var ImageView = require('../main');
var iv;

window.URL = {
  createObjectURL: function (p) {
    return p
  }
};

describe('imageview', function () {
  it('should fail with invalid input[type="file"]', function () {
    iv = new ImageView();

    expect(function () {
      iv.generate({});
    }).to.throw('This needs to be input[type="file"]');
  });

  it('should display image in preview', function (done) {
    iv = new ImageView();

    iv.generate({
      target: {
        files: ['test.png']
      }
    }, function () {
      document.getElementById('photo').value.should.match(/^data:image\/jpeg;base64/);
      document.getElementById('preview').innerHTML.should.equal('<canvas width="100" height="100"></canvas>');
      done();
    });
  });
});
