// "use strict";

console.log("hello");
var i = 100;
var str = 'hello';
var str2 = "owu";
console.log(i);
var str2 = "hello oktenweb";
console.log(str2);

a = 10000;
console.log(a);

var bool = 5 !== '5';
console.log(bool);

var arr = [true, 12, 'asd', {}, []];
arr[100] = "wqouqweuioqweuio";
console.log(arr);
// false | 0 | "" | null | NaN | undefined
if ("0") {
    console.log("ok");
} else {
    console.log("no!");
}

var undf;
console.log(typeof undf);

console.log(typeof  NaN);
console.log(typeof  []);
console.log(typeof  {});
console.log(typeof  "asda");
console.log(typeof  123);

// var ppp = prompt("message");
// console.log(parseInt(ppp));

// console.log(confirm("ready?"));

// alert("asdasdas");
//
// console.log("end");

var person = {
    name: 'vasya',
    age: 30
};

person.age = 90;
console.log(person.age);

person.skills = ["java", "js"];
console.log(person);
console.log(person['name']);

// person[prompt("field")] = "pupkin";
console.log(person);

// {
//     let iii = 1000;
// }
// console.log(iii);

var j = "uoiouoiuoi";
for (let j = 0; j < 10; j++) {
}
console.log(j);

function asd() {
    console.log("asdasdasd");
    // return undefined;
    return 100;
}

console.log(asd);
var xxx = asd;
console.log(xxx());

var fEx = function () {
    console.log("function expression");
}
fEx();

(
    function () {
        console.log("anon");
    }()
);

function varargs(a, b, ...rest) {
    console.log(a, b, rest);
    console.log(arguments);
}

varargs("1111", 2222, 333333, 444, 5, 67, 7);


function outer1(callback) {
    console.log("outer1 is work");
    callback();
}


outer1(() => {
    console.log("function xxx");
});

outer1(function () {
    console.log("dude !!!!");
});

[2, 3, 5, 6].forEach(function (e, i) {
    console.log(e, i);
});

[2, 3, 5, 6].forEach(function (a, b) {
    console.log(a + b);
});

function calculator(a, b, callback) {
    return callback(a, b);
}


// calc(10,29,(a, b) -> System.out.println(a+b));
// calculator(10,90,function (a,b){console.log(a-b);})


console.log(calculator(10, 90, function (x, y) {
    return x + y;
}));

function outer2() {
    function inner2() {
        console.log("this is inner function");
    }

    inner2();

}

outer2();

function outer() {
    var t = 100;

    function inner() {
        return ++t;
    }

    return inner;
}

var dude = outer();
console.log(dude());
console.log(dude());
console.log(dude());
console.log(dude());

// console.log(function inner() {
//     return ++t;
// }());


var human = {
    name: "fluffy",
    greeting: function (friend) {
        console.log("hello my dear", friend, "my name is ", this.name);
    }
};
human.greeting("vova");

var Person = function (name, age) {
    this.name = name;
    this.age = age;
};

var p = new Person("vasysa", 21);
console.log(p);





