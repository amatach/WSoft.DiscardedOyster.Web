(function () {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.service',
        'app.widgets',
        'app.layout',
        /* Feature areas */
        'app.pages.home',
        'app.pages.pollen'
    ]);

})();
