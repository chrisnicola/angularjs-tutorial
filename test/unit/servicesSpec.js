'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('myApp.services'));

  describe('when searching twitter', function() {
    beforeEach(inject(function($httpBackend, twitter) {
      $httpBackend.expectJSONP('http://search.twitter.com/search.json?callback=JSON_CALLBACK&q=twttr')
      .respond({
        'results' : [{
          'id': 20,
          'from_user': 'jack',
          'text': 'just setting up my twttr',
          'timestamp': new Date().toString(),
          'profile_image_url': 'hi.jpg'
        }]
      });
    }));

    it('should fetch the search query from twitter', inject(function($httpBackend, twitter) {
      var search = twitter.search('twttr');
      $httpBackend.flush();
      expect(search[0].text).toBe('just setting up my twttr')
    }));
  })
});
