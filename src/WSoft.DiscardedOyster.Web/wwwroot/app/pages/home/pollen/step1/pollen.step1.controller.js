/**
 * Created by amerjitsingh on 7/20/2015.
 */
(function () {
    'use strict';

    angular
        .module('app.pages.pollen')
        .controller('PollenStep1Controller', PollenStep1Controller);

    PollenStep1Controller.$inject = ['pollenApiService'];
    /* @ngInject */
    function PollenStep1Controller(pollenApiService) {

        var vm = this;
        vm.navigate = navigate;

        function navigate() {
            $state.go('step2');
        }
    }
})();
