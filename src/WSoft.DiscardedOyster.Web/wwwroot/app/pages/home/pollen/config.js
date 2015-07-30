(function () {
    'use strict';

    var core = angular.module('app.pages.pollen');

    core.config(mashapeConfig);

    mashapeConfig.$inject = ['$httpProvider', 'pollenCheckKeyProvider'];
    /* @ngInject */
    function mashapeConfig($httpProvider,pollenCheckKeyProvider) {
        pollenCheckKeyProvider.configure.mashapeKey = '5ANRVYXm1WmshDWZFRjHbJwXNjTPp1N5n4wjsnZrAZVl0KRjJZ';
        $httpProvider.interceptors.push('pollenCheckKey');
    }

})();