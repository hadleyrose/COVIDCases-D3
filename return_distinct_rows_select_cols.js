// js for filtering by distinct values and returning the results of one column for each distinct value
var testArray = [
    {Name: "John", Age: 12},
    {Name: "Steve", Age: 13},
    {Name: "John", Age: 20},
    {Name: "Steve", Age: 50}
];
var result = Array.from(new Set(testArray.map(s => s.Name))).map(Name => { // find the distinct names and for each distinct name
    return {
        Name: Name, // return name
        values: testArray.filter(s => s.Name == Name).map(function(obj) {
            return obj.Age;
        }) // return only the Age column for each row that matches the distinct name
}});
var testArray = [
    {Name: "John", Age: 12, Other: 'a'},
    {Name: "Steve", Age: 13, Other: 'a'},
    {Name: "John", Age: 20, Other: 'b'},
    {Name: "Steve", Age: 50, Other: 'c'}
];
var result = Array.from(new Set(testArray.map(s => s.Name))).map(Name => { // for each distinct name
    return {
        Name: Name, // return name
        values: testArray.filter(s => s.Name == Name).map(function(obj) {
            return {
                Age: obj.Age,
                Other: obj.Other
            };
        }) // return only the columns for each row that matches the distinct name
    }
});
// Resources
// https://stackoverflow.com/a/38206980
// https://codeburst.io/javascript-array-distinct-5edc93501dc4
// https://stackoverflow.com/a/52311241
// https://stackoverflow.com/a/31201324
// https://stackoverflow.com/a/1863716