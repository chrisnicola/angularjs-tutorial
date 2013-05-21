'use strict';

/* Directives */


angular.module('myApp.directives', []).
directive('myDatePicker', function () {
  return {
    restrict: 'A',
    require : '?ngModel', // optional dependency
    
    link : function (scope, element, attrs, ngModelCtrl) {
      $(function(){
        element.datepicker({
          showOn:"both",
          changeYear:true,
          changeMonth:true,
          dateFormat:'yy-mm-dd',
          maxDate: new Date(),
          yearRange: '1900:2013',
          onSelect:function (dateText, inst) {
          
            // if we don't have an NgModelController, then don't bother doing anything
            if(ngModelCtrl) {
              var dateValidator = function(value) {
                var pattern = new RegExp(/\d{2}-[0-1][0-9]-[0-3][0-9]/); // close enough
                // should be doing an empty/string check here
                if(pattern.test(value)) {
                  ngModelCtrl.$setValidity('pattern', true);
                  return value;
                } else {
                  ngModelCtrl.$setValidity('pattern', false);
                  return undefined;
                }
              };
            
              // sanitize and validate value changes from the DOM
              ngModelCtrl.$parsers.push(dateValidator);
              // sanitize and validate value changes
              ngModelCtrl.$formatters.push(dateValidator);
            
              // this sets the value, rendering must be triggered manually (see below)
              ngModelCtrl.$setViewValue(dateText);
              
              // most importantly this calls $digest and handles rendering via the underlying ngModel/text input directive
              scope.$apply();
            }
          }
        });
      });
    }
  }
});
