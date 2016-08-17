var app=angular.module("myApp",[]);

//controller
app.controller("myCtrl",["$scope",function($scope){}]);

//Directive
app.directive("groupTableRecord",function($http){
    return{
       restrict : "E",
       controller : function($scope){
       		this.seteditor = function(editor){
                    console.log(editor);
                    $scope.cols.unshift(editor);
                }
       		this.setcolumns = function(col){
       			$scope.cols = col;
       		}
            },
       link : function(scope,ele,attr){
              //console.log(ele);
       	     $http.get(attr.resource).success(function(result){
       	     	scope.rows = result;
       	     	scope.$broadcast('ready-to-render', scope.rows, scope.cols);
       	     });

       }
	}
});
app.directive("groupColumns",function($http){
    return{
       restrict : "E",
       require : ["^groupTableRecord","groupColumns"],
       controller : function(){
       		columns = [];
       		this.addcolumn=function(col){
       			columns.push(col);
       		};
       		this.getcolumns=function(){
       			return columns;
       		}
       	},
       link : function(scope,ele,attr,controller){
       		controller[0].setcolumns(controller[1].getcolumns());
       	   // console.log(scope);

       }
	}
});
app.directive("groupColumn",function(){
    return{
       restrict : "E",
       require : "^groupColumns",
       controller : function(){
       		
       	},
       link : function(scope,ele,attr,controller){
       			controller.addcolumn({
       				title: attr.title,
       				field :attr.field
       			});
		 }
	}
});
app.directive("group",function(){
    return{
       restrict : "E",
       templateUrl : "customer_list.html",
       replace : true,
       controller: function($scope) {
	      $scope.$on('ready-to-render', function(e, rows, cols) {
	        $scope.rows = rows;
	        $scope.cols = cols;
	      });
	  }
      }
}); 
app.directive("editorInline",function($compile, $templateCache){
    return{
       restrict : "A",
       //template : "customer_list.html",
       require : "^groupTableRecord",
       
       controller: function($scope) {
	      
	  },
        link: function(scope,ele,attr,grptblController){
           // console.log("hereeee");
            grptblController.seteditor({
                title : "Edit",
                field : ""
            });
            scope.editcolumn ={};
            scope.savecolumn ={};
            scope.update = function(row,id){
                  
                    scope.editcolumn[id] = true;
                    scope.savecolumn[id] = true;
                 
                  //$compile($templateCache.get("customer_list.html"))(scope);
              };
            scope.save = function(row,id){
                    scope.editcolumn[id] = false;
                    scope.savecolumn[id] = false;
                };
            
        }
      }
}); 