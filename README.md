# AngularCustomGrid Directive

AngularJS directive for the Custom Grid. This software aims to easily create grid by using json file on your project.

Getting started/How to use it

Following directive you can use for create your Grid.
```html
<group-table-record resource='Customers_JSON.php'>
    <group-columns>
                <group-column title="Name" field="Name"></group-column>
                <group-column title="City" field="City"></group-column>
                <group-column title="Country" field="Country"></group-column>
        </group-columns>
        <group editor-inline></group>
</group-table-record>

```
where **resource** is attribute to pass your json url of file.

-title : you can change its value by your heading title.

-field : pass you field value by matching to json data field
