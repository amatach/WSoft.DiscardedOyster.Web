(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$rootScope',  'config', 'logger'];
    /* @ngInject */
    function ShellController($rootScope,  config, logger) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
