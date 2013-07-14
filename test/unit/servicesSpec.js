'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('myApp.services'));

  describe('when querying APP.NET', function() {
    beforeEach(inject(function($httpBackend, appnet) {
      $httpBackend.expectJSONP('https://alpha-api.app.net/stream/0/posts/stream/global?callback=JSON_CALLBACK')
      .respond({
        "data":[{
          "created_at":"2013-07-14T17:35:17Z",
          "text":"I'm trapped in a social media loop",
          "id":"7667512",
          "user":{
            "username":"SocialMediaPro",
            "avatar_image":{
              "url":"http://notreal.com/picture.jpg",
              "width":256,
              "is_default":false,
              "height":256
            }
          },
          "thread_id":"7667512",
          "canonical_url":"https://alpha.app.net/androidheadline/post/7667512"
        }]
      });
    }));

    it('should fetch the search posts from app.net', inject(function($httpBackend, appnet) {
      var results = appnet.global();
      $httpBackend.flush();
      expect(results[0].text).toBe("I'm trapped in a social media loop")
      expect(results[0].username).toBe('SocialMediaPro')
      expect(results[0].userAvatarUrl).toBe('http://notreal.com/picture.jpg')
    }));
  })
});
