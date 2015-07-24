(function () {
    'use strict';

    angular
        .module('app.pages.pollen')
        .service('pollenApiService', pollenApiService);

    pollenApiService.$inject = ['$http'];

    function pollenApiService($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();