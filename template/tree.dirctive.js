app.directive('tree',function($resource,$http){
    return {
        restrict:'E',
        replace:true,
        scope:{
            param:"="
        },
        templateUrl:"template/tree.html",
        link:function(scope,elem,attr){
            $http.get('./tree.json').then(function(res){
                scope.list = rendar(res.data);
                console.log(scope.list)
            })

            scope.tree_edit = function(data){
                data.isEdit=!data.isEdit;
                if(!data.isEdit){
                    //这里进行修改操作。
                }
            }
            scope.addchildren = function(data,name){
                var obj = new Object();
                obj.name=name;
                obj.id=1;
                obj.children=[]
                obj.status=false;
                data.children.push(obj)
                data.add=false;
            }

            function rendar(data){
                data.forEach(function(i){
                    i.isEdit=false;
                    if(i.children && i.children.length>0){
                        i.status = false;
                        rendar(i.children);
                    }
                })
                return data;
            }
            
            function init(res){
                if(res){

                }else{
                    res.isAllshow=true;     //是否全部展开
                }
            }



        }
    }
})