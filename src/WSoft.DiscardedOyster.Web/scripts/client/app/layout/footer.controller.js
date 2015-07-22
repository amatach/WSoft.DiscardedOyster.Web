(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$rootScope'];
    /* @ngInject */
    function FooterController($rootScope) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
