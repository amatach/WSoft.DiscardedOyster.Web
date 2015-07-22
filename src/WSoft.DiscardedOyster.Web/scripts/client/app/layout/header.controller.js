(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['appconfig', '$rootScope'];
    /* @ngInject */
    function HeaderController(appconfig, $rootScope) {
        var vm = this;
        vm.projectTitle = appconfig.getConfig().projectTitle;
        activate();

        function activate() {

        }
    }
})();
