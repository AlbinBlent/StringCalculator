'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

    var stringCalculator = this;

    stringCalculator.calculate = function(inputString){

        var sortedExpression = stringCalculator.sortStringExpression(inputString);
        var operator = sortedExpression.operator;
        var result = null;
        if (operator == "+"){
            result = sortedExpression.firstNumber + sortedExpression.secondNumber;
        } else if (operator == "-"){
             result = sortedExpression.firstNumber - sortedExpression.secondNumber;
        } else if (operator == "*"){
            result = sortedExpression.firstNumber * sortedExpression.secondNumber;
        } else if (operator == "/"){
            result = sortedExpression.firstNumber / sortedExpression.secondNumber;
        }

        stringCalculator.result = result;
        return result;
    };

    stringCalculator.sortStringExpression = function(inputString){

        var r = /\d+/g;
        var firstNo = Number(inputString.match(r)[0]);
        var secondNo = Number(inputString.match(r)[1]);

        var f = /[*+-/]/;
        var oper = inputString.match(f)[0];

        var result = {
            firstNumber: firstNo,
            secondNumber: secondNo,
            operator: oper
        };
        return result;
    };

}]);