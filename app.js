(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController (scope) {
  scope.lunchContent = '';

  scope.checkLunch = function () {

    var lunchItems = scope.lunchContent.split(",");
    lunchItems = cleanArray (lunchItems);

    if (lunchItems.length == 0) {
      scope.message = "Please enter data first";
      scope.style = "error-style";
      return;
    }

    scope.style = "form-style";
    if (lunchItems.length <= 3) {
      scope.message = "Enjoy !";
    }
    else {
      scope.message = "Too much !";
    }
  };
}

function cleanArray(array) {
  var tempArray = [];

  for (var i = 0; i < array.length; i ++) {
    if (array[i] && array[i].trim() != '') tempArray.push(array[i]);
  }

  return tempArray;
}
})();
