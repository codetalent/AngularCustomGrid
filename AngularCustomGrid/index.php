<!DOCTYPE html>
<html>
<head>
<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
<script src="src/angular.min.js"></script>
<script src="src/customer-directive.js"></script>
</head>

<body>

<div ng-app="myApp" ng-controller="myCtrl">
  
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