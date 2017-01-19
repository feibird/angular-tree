app.directive('focus',function(){
    return {
        scope: {
            ngWatch: "="
        },
        link:function(scope,element,attr){
            console.log(scope.ngWatch)
            if(scope.ngWatch){
                element.focus(); 
            }
            scope.$watch("ngWatch",function(e,n,element){
                console.log(element)
                element.focus();  
            })
        }
    }
})