(function () {

    "use strict";

    angular
        .module("oddc.widget.helloworld")
        .component("helloWorld", {
            templateUrl: "src/components/helloWorld.component/helloWorld.component.html",
            controller: helloWorldController,
            controllerAs: "helloWorldController"
        });

    helloWorldController.$inject = ["$log", "$state"];
    
    function helloWorldController($log, $state) {
        var self = this;
        this.$onInit = function () {
            self.actions = [{
                icon: 'icon-cog',
                title: 'Einstellungen',
                action: function() {
                    $state.go('config');
                }
            }];
            self.stateName = $state.current.name;
            $log.debug('State: ', $state.current);
        };
    }

})();