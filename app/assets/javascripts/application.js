// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//= require angular


// var app = angular.module('app', []);

// app.controller('appController', ['$scope', '$infomationService',
//     function($scope, $infomationService) {

//         $scope.personalData = {};

//         $scope.educationBackGround = [{
//           name: 'HoChiMinh City University of Technology',
//           content: 'computer science'
//         }];

//         $scope.workingExperience = [
//           {
//             name: 'HoChiMinh City University of Technology',
//             project : [
//               {

//               },
//               {

//               },
//               {

//               }
//             ]
//           }
//         ];

//         $scope.keySkills = [];

//         $scope.activities = [];

//         $scope.personalQuantities = [];

//         $scope.references = [];
//     }
// ]);


// app.factory('$infomationService', function() {
//     var infomation = {};

//     var personalData = {
//         imageURL: '',
//         birthDay: (new Date(1991, 10, 02)).getTime(),
//         mobile: '01635825664',
//         email: 'laihoangnam0210@gmail.com',
//         address: '169/3 Tran Van Dang, District 3, ward 11, TP.HoChiMinh'
//     };

//     var educationBackGround = [];
//     var workingExperience = [];
//     var keySkills = [];
//     var activities = [];
//     var personalQuantities = [];
//     var references = [];

//     infomation.getPersonalData = function() {
//         return personalData;
//     };

//     infomation.getEducationBackGround = function() {
//         return educationBackGround;
//     };

//     infomation.getWorkingExperience = function() {
//         return getWorkingExperience;
//     };

//     infomation.getKeySkills = function() {
//         return keySkills;
//     };

//     infomation.getActivities = function() {
//         return activities;
//     };

//     infomation.getPeronalQuantities = function() {
//         return getPeronalQuantities;
//     };

//     infomation.getReferences = function() {
//         return references;
//     };

//     return infomation;
// });


function TodoCtrl($scope) {
  $scope.todos = [
    {text:'learn ruby', done:true},
    {text:'build first ruby on rails app', done:false}];

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}

