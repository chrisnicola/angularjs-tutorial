'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  describe('when there is an empty tweet', function() {
    it('should have an empty textarea for tweeting', function() {
      expect(element('#new-tweet-text').text()).toBe("");
    });
    
    it('should have a disabled tweet button', function() {
      expect(element('#tweet-button').attr('disabled')).toBe('disabled');
    });
  });
  
  describe('when there is a tweet typed in', function() {
    it('enabled the tweet button', function() {
      input('tweet').enter('more food for the sound byte culture');
      expect(element('#tweet-button').attr('disabled')).toBe(undefined);
    });
  });
  
});
