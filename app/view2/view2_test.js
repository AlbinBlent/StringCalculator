'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
    describe('String calculator', function(){
        it('can add two numbers', inject(function($controller){
            var view2Ctrl = $controller('View2Ctrl');
            var sum = view2Ctrl.calculate("2+2");
            expect(sum).toBe(4);
        }));
    });

    describe('String calculator', function(){
        it('can divide two numbers', inject(function($controller){
            var view2Ctrl = $controller('View2Ctrl');
            var sum = view2Ctrl.calculate("6/2");
            expect(sum).toBe(3);
        }));
    });

    describe('String calculator', function(){
        it('can multiply two numbers', inject(function($controller){
            var view2Ctrl = $controller('View2Ctrl');
            var sum = view2Ctrl.calculate("5*2");
            expect(sum).toBe(10);
        }));
    });

    describe('String calculator', function(){
        it('can subtract two numbers', inject(function($controller){
            var view2Ctrl = $controller('View2Ctrl');
            var sum = view2Ctrl.calculate("5-2");
            expect(sum).toBe(3);
        }));
    });

    describe('String calculator', function(){
        it('can sort the input sting', inject(function($controller){
            var ctrl = $controller('View2Ctrl');
            var result = ctrl.sortStringExpression("5/4");
            expect(result.firstNumber).toBe(5);
            expect(result.secondNumber).toBe(4);
            expect(result.operator).toBe("/");
        }));
    });
});