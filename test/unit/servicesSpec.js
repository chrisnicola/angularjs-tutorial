'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('myApp.services'));

  describe('when searching twitter', function() {
    beforeEach(inject(function($httpBackend, twitter) {
      $httpBackend.expectJSONP('http://search.twitter.com/search.json?callback=JSON_CALLBACK&q=thing')
      .respond({
        'results' : [
          {
          'from_user': 'user',
          'text': 'tweet text',
          'timestamp': new Date().toString(),
          'profile_image_url': 'hi.jpg'
        }
        ]
      });
    }));

    it('should fetch the search query from twitter', inject(function($httpBackend, twitter) {
      var search = twitter.search('thing');
      $httpBackend.flush();
      expect(search[0].text).toBe('tweet text')
    }));
  })
});
