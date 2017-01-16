app.directive("setFocus", function () {
    return {
        scope: {
            ngModel: "="
        },
        link: function (scope, element, attrs) {
            scope.$watch("ngModel", function (n, o) {
                element.focus();
            })
        }
    }
})