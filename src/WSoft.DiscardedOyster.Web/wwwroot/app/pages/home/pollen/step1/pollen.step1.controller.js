/**
 * Created by amerjitsingh on 7/20/2015.
 */
(function () {
    'use strict';

    angular
        .module('app.pages.pollen')
        .controller('PollenStep1Controller', PollenStep1Controller);

    PollenStep1Controller.$inject = ['pollenApiService','$http'];
    /* @ngInject */
    function PollenStep1Controller(pollenApiService, $http) {

        var vm = this;
        vm.navigate = navigate;

        activate();

        function activate() {
            $http({
                url: 'https://pollencheck.p.mashape.com/api/1/forecasts/766273',
                method: 'GET'
            });
        }

        function navigate() {
            $state.go('step2');
        }
    }
})();
