app.directive("focus", function () {
    return {
        scope: {
            ngWatch: "="
        },
        link: function (scope, element, attrs) {
            scope.$watch("ngWatch", function (n, o) {
                console.log(scope.ngWatch)
                if(scope.ngWatch){
                    element[0].focus();
                }
            })
        }
    }
})