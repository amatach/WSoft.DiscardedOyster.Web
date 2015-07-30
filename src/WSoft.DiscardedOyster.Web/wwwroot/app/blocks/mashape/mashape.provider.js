(function () {
    'use strict';

    angular.module('blocks.mashape')
        .provider('pollenCheckKey', pollenCheckKeyProvider);
    pollenCheckKeyProvider.$inject = [];

    function pollenCheckKeyProvider() {
       
        this.configure = {
            mashapeKey: undefined,
            mashapeHeader: 'X-Mashape-Key',
            acceptHeader: 'Accept'
        };

        var pollen = this;

        this.$get = pollenCheckKey;

        pollenCheckKey.$inject = ['$q', '$injector', '$rootScope'];
        /* @ngInject */
        function pollenCheckKey($q, $injector, $rootScope) {

            var service = {
                request: request,
                responseError: responseError
            };
            return service;

            /////

            function request(request) {
                if (request.skipHeaders) {
                    return request;
                }

                request.headers[pollen.configure.mashapeHeader] = pollen.configure.mashapeKey;
                request.headers[pollen.configure.acceptHeader] = 'application/json';

                return request;
            }

            function responseError(response) {
                if (response.status === 401) {
                    $rootScope.$broadcast('unauthenticated', response);
                }
                return $q.reject(response);
            }
        }
    }

})();