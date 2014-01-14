var filesApp = angular.module('filesApp', ['FilesModel', 'hmTouchevents']);


// Index: http://localhost/views/files/index.html

filesApp.controller('IndexCtrl', function ($scope, FilesRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/files/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/files.js)
  window.discover(["test"], function (list) {
    $scope.filess = list;
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Files index");

});


// Show: http://localhost/views/files/show.html?id=<id>

filesApp.controller('ShowCtrl', function ($scope, $filter, FilesRestangular) {

  // Fetch all objects from the local JSON (see app/models/files.js)
  FilesRestangular.all('files').getList().then( function(filess) {
    // Then select the one based on the view's id query parameter
    $scope.files = $filter('filter')(filess, {files_id: steroids.view.params['id']})[0];
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Files: " + steroids.view.params.id );

});
