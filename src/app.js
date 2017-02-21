(function () {

    "use strict";

    angular
        .module("oddc.widget.helloworld", ["widgetbuilder"])
        .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
            $stateProvider
                .state("index", {
                    url: "/",
                    template: "<hello-world></hello-world>",
                    data: {
                        cssClassNames : 'index'
                    }
                })
                .state("config", {
                    url: "/configuration",
                    template: "<configuration></configuration>",
                    data: {
                        cssClassNames : 'config'
                    }
                });
            $urlRouterProvider.otherwise("/");
        }]);

})();