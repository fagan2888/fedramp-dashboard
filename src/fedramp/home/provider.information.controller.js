(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('ProviderInformationController', ProviderInformationController);

    ProviderInformationController.$inject = ['$log', '$state', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function ProviderInformationController ($log, $state, $stateParams, fedrampData, helperService) {
        var self = this;

        /**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProviderInformationController
         */
        self.items = fedrampData.providers();

        /**
         * The item
         * @member {object}
         * @memberof Controllers.ProviderInformationController
         */
        self.item = self.items.find(x => helperService.slugify(x.name) === $stateParams.name);

        /**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.ProviderInformationController
         */
        self.close = function () {
            $state.go('fedramp.home', {}, { reload: true });
        };
    }
})();