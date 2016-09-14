(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Some gems have hidden qualities beyond their luster,' 
            + 'beyond their shine... Dodeca is one of those gems',
            images: [
                {
                    full: "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-06.gif"
                }
            ],
            canPurchase: true,
            soldOut: true
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: "...",
            images: [
                {
                    full: "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-01.gif"
                }
            ],
            canPurchase: false
        }
    ]

    app.controller("PanelController", function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checktab) {
            return this.tab === checktab;
        };
    });
})();


(function () { 
})();