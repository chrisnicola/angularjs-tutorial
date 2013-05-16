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

  describe('when I post a tweet', function() {
    var tweet = 'This is a good tweet.'

    it('should add the tweet to the list of tweets', function(){
      input('tweet').enter(tweet);
      element('#tweet-button').click();
      expect(repeater('.tweet').count()).toBe(1);
      expect(repeater('.tweet-body').row(0)).toMatch(tweet);
    })
  })

  describe('When I search for tweets with a query', function(){
    var query = 'Google I/O'

    it('should return at least one tweet which contains the query', function(){
      input('search').enter(query);
      element('#seach-button').click();
      var tweet_text = repeater('.tweet-body').row(0)
      expect(tweet_text.split()).toContain(query);
    })
  })
});
