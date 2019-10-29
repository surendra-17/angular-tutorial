
    var ngApp = angular.module('myNgApp', []);

    ngApp.controller('calcController', function ($scope) {
        $scope.message = "First Angular Tutorial";
        $scope.input   = '';
        $scope.output = '';
        $scope.input_regex = '/^([-+/*]\d+(\.\d+)?)*/';
        $scope.addToInput = function(value){
            $scope.input += value;
        }
        $scope.$watch('input', function (newValue, oldValue) {
            $scope.calculateBtnStatus = $scope.input != '' ?  false : true;
        });
        $scope.calculateAnswer = function(){
            $scope.validateInput();
            $scope.output = eval($scope.input);
        }
        $scope.clearInput = function(){
            $scope.input = '';
            $scope.output = '';
        }
        $scope.calculateBtnStatus = true;
        $scope.validateInput = function(){
            //check for input is valid mathematical expresssion 
            if( $scope.input == undefined || '' && !$scope.input.match($scope.input_regex)){
                alert('Please enter valid expression');
                $scope.clearInput();
                $scope.output = '';
            }
        }
    });