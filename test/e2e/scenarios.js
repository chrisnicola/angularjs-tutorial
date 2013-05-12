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
    var tweet = 'more food for the sound byte culture'

    it('enabled the tweet button', function() {
      input('tweet').enter(tweet);
      expect(element('#tweet-button').attr('disabled')).toBe(undefined);
    });

    it('should show the correct character count', function() {
      input('tweet').enter(tweet);
      expect(element('#characters .label-info').css('display')).toBe('inline-block');
      expect(element('#characters .label').text()).toMatch(140 - tweet.length);
    });
  });

  describe('when the tweet is longer than 140 characters', function() {
    var tweet = ''
    for (var i = 0; i < 141; i++) {
      tweet += 'A';
    }

    it('should disable the tweet button', function() {
      input('tweet').enter(tweet);
      expect(element('#tweet-button').attr('disabled')).toBe('disabled');
    })

    it('should show a warning label', function() {
      input('tweet').enter(tweet);
      expect(element('#characters .label-warning').css('display')).toBe('inline-block');
      expect(element('#characters .label-info').css('display')).toBe('none');
      expect(element('#characters .label').text()).toMatch(140 - tweet.length);
    })
  })
});
