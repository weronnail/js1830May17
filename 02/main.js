console.log("oaspoasdasjk");
console.log('tuutuy');
var a = 100;
console.log(a);
// b = 1000;
// console.log(b);

// {
//     let b = 'oktenweb';
// }
// console.log(b);

var bool = 5 !== '5';
console.log(bool);

var mas = ['hello', 555, true, {}, [], null, NaN, undefined];

// false | '' | 0 | NaN | undefined
if ("0") {
    console.log("ok");
} else {
    console.log("no!");

}

// let expr = prompt("message");
// console.log(typeof parseInt(expr));
// var c = expr || 'default';
// console.log(c);

var obj = {
    name: 'vasya',
    age: 32
};
console.log(obj.age);
console.log(obj['name']);
// obj.asdasd = "qweqweq";
obj["asdasd"] = "qweqweq";
console.log(obj);

function asd() {
    console.log("hello");
    return 123;
}

console.log(asd);

var xxx = asd;
xxx();

function qwe(a, b) {
    console.log(a, b);
    console.log(arguments['0']);
    console.log(arguments[1]);
}

qwe("asdasd", 2213, 123, true);

// function koko(callback) {
//     callback();
// }
//
// koko(qwe);


function koko(a, b, qwe) {
    console.log("jghjhagsjhasgdk okokokokokoko");
    return qwe(a, b) / 2;

}

// koko(function (a, b) {
//     console.log(a, b);
// });
console.log(
    koko(10, 20, function (x, y) {
        return x + y;
    }));

function outer() {
    var x = 100;

    function inner() {
        console.log(x);
        return x;
    }

    return inner;
}

console.log(outer());


let factInner = outer();
factInner();

console.log(factInner());

koko(90, 89, (c, v) => {
    console.log(c + v);
});