'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('noBro', function() {
  return {
    require: 'ngModel',
    link: function(scope, elem, attr, ngModel) {
      var brocabulary = ['bro', 'brogrammer', 'mad game', 'mongodb'];

      //For DOM -> model validation
      ngModel.$parsers.unshift(function(value) {
        var valid = brocabulary.indexOf(value.toLowerCase()) === -1;
        ngModel.$setValidity('brocabulary', valid);
        return valid ? value : undefined;
      });

      //For model -> DOM validation
      ngModel.$formatters.unshift(function(value) {
        ngModel.$setValidity('brocabulary', brocabulary.indexOf(value.toLowerCase()) === -1);
        return value;
      });
    }
  };
});
