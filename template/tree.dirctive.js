app.directive('tree', function ($http) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            param: "="
        },
        templateUrl: "template/tree.html",
        link: function (scope, elem, attr) {
            $http.get('./tree1.json').then(function (res) {
                scope.list = rendar(res.data);
                console.log(scope.list)
            })
            //编辑修改操作
            scope.tree_edit = function (data) {
                data.isEdit = !data.isEdit;
                if (!data.isEdit) {
                    //这里进行修改操作。
                }
            }
            //删除操作
            scope.del = function (id) {
                console.log(id)
                eachDel(scope.list, id);
            }

            //展开,收起
            scope.Allstatus = function(is){
                All(scope.list,is,'status')
            }

            //全选操作
            scope.All = function (is) {
                if (is) {
                    All(scope.list,true,'ischeckbox');
                } else {
                    All(scope.list,false,'ischeckbox');
                }
            }

            function All(data,is,prs){
                data.forEach(function(e){
                    e[prs]=is;
                    if(e.children){
                        All(e.children,is)
                    }
                })
            }

            function eachis(data, param) {
                var prs = param;
                for (var i = 0; i < data.length; i++) {
                    // if(data[i][prs])
                }
            }

            function eachDel(data, delId) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == delId) {
                        if (data[i].children.length > 0) {
                            if (window.confirm('检测到当前类别下有子级,确定要删除吗？(删除后，当前所以子级消失)')) {
                                data.splice(i, 1);
                                alert("删除成功！");
                                return false;
                            }
                        } else {
                            data.splice(i, 1);
                            alert("删除成功！");
                            return false;
                        }
                    } else {
                        if (data[i].children.length > 0) {
                            eachDel(data[i].children, delId);
                        }
                    }
                }
                return data
            }

            //添加子类操作
            scope.addchildren = function (data,name) {
                console.log(data);
                if (data == 0) {
                    if (name.length > 0) {
                        var obj = new Object();
                        obj.name = name;
                        obj.id = 1;
                        obj.children = []
                        scope.list.push(obj)
                        scope.newTop="";
                    } else {
                        return false;
                    }
                } else {
                    if (name.length > 0) {
                        var obj = new Object();
                        obj.name = name;
                        obj.id = 1;
                        obj.children = []
                        data.children.push(obj)
                        data.add = false;
                    } else {
                        return false;
                    }
                }

            }
            /**
             * 递归，将每条数据附上状态
             * status:用来管理展开收缩
             * isEdit:用来管理是否编辑
             */
            function rendar(data) {
                data.forEach(function (i) {
                    i.isEdit = false;
                    i.ischeckbox = false;
                    if (i.children && i.children.length > 0) {
                        i.status = false;
                        rendar(i.children);
                    }
                })
                return data;
            }
        }
    }
})