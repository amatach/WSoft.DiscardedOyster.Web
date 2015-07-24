/**
 * Created by amerjitsingh on 7/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('app.service')
        .factory('appconfig', appconfig);

    appconfig.$inject = ['$window'];

    /* @ngInject */
    function appconfig($window) {

        var config = {};

        angular.extend(config, $window.odConfig);

        var service = {
            getConfig: getConfig
        };

        return service;

        function getConfig() {
            return config;
        }
    }
}());
