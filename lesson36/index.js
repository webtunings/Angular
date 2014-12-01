
var app = angular.module("simpleApp", []);

function simpleController() {
    this.collection = [{name: "Chris", age: 28, city: "New York"},
        {name: "Mark", age: 22, city: "Boston"},
        {name: "James", age: 35, city: "Atlanta"},
        {name: "John", age: 48, city: "Miami"},
        {name: "Jessica", age: 28, city: "Boston"},
        {name: "Chris", age: 52, city: "Stamford"}];

    this.limit = 7;
    this.sortProperty = 'name';
    this.reverseSort = false;
}

simpleController.prototype.addEntry = function () {
    this.collection.push(this.newData);
    this.newData = '';
};

simpleController.prototype.sort = function (prop) {
    this.sortProperty = prop;
    this.reverseSort = !this.reverseSort;
}


app.controller("simpleController", simpleController);


