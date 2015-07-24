/**
 * Created by amerjitsingh on 7/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('app.pages.home')
        .run(routeConfig);

    routeConfig.$inject = ['routerHelper'];
    /* @ngInject */
    function routeConfig(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/',
                    views: {
                        '': {
                            templateUrl: 'app/pages/home/home.html',
                        },
                        'top@home': {
                            templateUrl: 'app/pages/home/home-top.html',
                            controller: 'HomeTopController',
                            controllerAs: 'vm'
                        },
                        'bottom@home':{
                            templateUrl: 'app/pages/home/home-bottom.html',
                            controller: 'HomeBottomController',
                            controllerAs: 'vm'
                        }
                    }
                }
            }, {
                state: 'pollen',
                config: {
                    abstract: true,
                    parent:'home',
                    url:'',
                    views: {
                        'top@home': {
                            templateUrl:'app/pages/home/' +
                            'pollen/pollen.html'
                        }
                    }
                }
            }, {
                state: 'step1',
                config: {
                    parent: 'pollen',
                    url: 'pollen',
                    views: {
                        'pollen': {
                            templateUrl: 'app/pages/home/' +
                                'pollen/step1/pollen-step1.html',
                            controller: 'PollenStep1Controller',
                            controllerAs: 'vm'
                        }
                    }
                }
            }, {
                state:'step2',
                config: {
                    parent: 'pollen',
                    url: 'pollen',
                    views: {
                        'pollen': {
                            templateUrl:'app/pages/home/' +
                            'pollen/step2/pollen-step2.html'
                        }
                    }
                }
            }, {
                state:'step3',
                config: {
                    parent: 'pollen',
                    url: 'pollen',
                    views: {
                        'top@': {
                            templateUrl:'app/pages/home/' +
                            'pollen/step1/pollen-step2.html'
                        }
                    }
                }
            }
        ];
    }

})
();
