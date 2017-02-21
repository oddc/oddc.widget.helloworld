(function () {

    "use strict";

    angular
        .module("oddc.widget.helloworld")
        .component("configuration", {
            templateUrl: "src/components/configuration.component/configuration.component.html",
            controller: configurationController,
            controllerAs: "configurationController"
        });

    configurationController.$inject = ["$log", "$state", "widgetState"];

    function configurationController($log, $state, widgetState) {
        var self = this;
        this.$onInit = function () {
            widgetState.setBackButtonState("index");
            self.stateName = $state.current.name;
            $log.debug('State: ', $state.current);
        };
    }

})();