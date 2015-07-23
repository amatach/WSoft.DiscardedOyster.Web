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
                state:'registration',
                config: {
                    abstract: true,
                    parent:'home',
                    url:'',
                    views: {
                        'top@home': {
                            templateUrl:'app/pages/home/' +
                            'registration/registration.html'
                        }
                    }
                }
            }, {
                state: 'step1',
                config: {
                    parent: 'registration',
                    url: 'registration',
                    views: {
                        'registration': {
                            templateUrl: 'app/pages/home/' +
                                'registration/step1/registration-step1.html',
                            controller: 'RegistrationStep1Controller',
                            controllerAs: 'vm'
                        }
                    }
                }
            }, {
                state:'step2',
                config: {
                    parent:'registration',
                    url:'registration',
                    views: {
                        'registration': {
                            templateUrl:'app/pages/home/' +
                            'registration/step2/registration-step2.html'
                        }
                    }
                }
            }, {
                state:'step3',
                config: {
                    parent:'registration',
                    url:'registration',
                    views: {
                        'top@': {
                            templateUrl:'app/pages/home/' +
                            'registration/step1/registration-step2.html'
                        }
                    }
                }
            }
        ];
    }

})
();
