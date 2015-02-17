'use strict';

/**
 */
angular.module('SDL.settings', []).controller('settingsCtrl', [ '$rootScope', '$scope', '$state', '$stateParams', 'DataForm', 'DataTableService', 'SubNavService',function($rootScope, $scope, $state, $stateParams, DataForm, DataTable, SubNav) {
  var pageName = "settings";

  var forms = [{
    id: "dataForm",
    name: "Data"
  }, {
    id: "shaidForm",
    name: "SHAID"
  }];


  DataForm.create(pageName, "settings", forms, {});

  $scope.clearForm = function(form, formId) {
    DataForm.clearForm(pageName, form, formId);
  };

  $scope.switchForm = function(formId) {
    DataForm.switchForm(pageName, formId);
  };

  $scope.submit = function(form) {
    DataForm.submitForm(pageName, form);
  };

}]);