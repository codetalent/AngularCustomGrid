<!DOCTYPE html>
<html>
<head>
<title>Angular Custom Simple Grid</title>
<link rel="stylesheet" href="src/bootstrap.min.css" >
<script src="src/angular.min.js"></script>
<script src="src/customer-directive.js"></script>
</head>

<body>
<h1>Angular Grid</h1>
<div ng-app="myApp" ng-controller="myCtrl" style="width: 100%;">
  
 <group-table-record resource="data/Customers_JSON.php">
     <group-columns>
                <group-column title="Name" field="Name"></group-column>
                <group-column title="City" field="City"></group-column>
                <group-column title="Country" field="Country"></group-column>
        </group-columns>
        <group editor-inline></group>
</group-table-record>
  </div>

</body>
</html>
