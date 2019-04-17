

var weekDays= ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


console.log(weekDays.toString())
console.log(weekDays[3])


let soup = {
    a: "chicken noodle",
    b: "tomato",
    c: "beef andn barley"
}

console.log(soup.c)

//array and object literals can hold primitave and complex types (array obects functions)

let complexArrLiteral = [1, true, "academy", [1,2,3], {key: "test"}, function(){return "yes"}]


console.log(complexArrLiteral[5])



let complexObjectLiteral = { num: 1, boolean: true, string : "acadmey", arr: [1,2,3], obj: {key: "test"}, func: function(){return "yes"}}

console.log(complexObjectLiteral.func)
console.log(complexArrLiteral.arr)