/**
 * Created by amerjitsingh on 7/20/2015.
 */
(function () {
    'use strict';

    angular
        .module('app.pages.home')
        .controller('RegistrationStep1Controller', RegistrationStep1Controller);

    RegistrationStep1Controller.$inject = ['$state'];
    /* @ngInject */
    function RegistrationStep1Controller($state) {

        var vm = this;
        vm.navigate = navigate;

        function navigate() {
            $state.go('step2');
        }
    }
})();
