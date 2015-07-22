/**
 * Created by amerjitsingh on 7/13/2015.
 */
(function () {
    'use strict';

    angular
        .module('app.pages.home')
        .controller('HomeTopController', HomeTopController);

    HomeTopController.$inject = ['$state'];
    /* @ngInject */
    function HomeTopController($state) {

        var vm = this;
        vm.navigate =  navigate;

        function navigate(){
            $state.go('step1');
        }
    }
})();
