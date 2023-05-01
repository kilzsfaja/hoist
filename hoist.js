// ---------- EXAMPLE ---------
// // GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// // var example;
// // console.log(example); // logs undefined
// // example = "I'm the example!";


// 1
console.log(hello); 
var hello = 'world';
// var hello get's hoisted
// logs hello
// var hello is defined

// logs undefined


// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle hoisted
// function test() hoisted
// calling on test()

// logs 'magnet'

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// brendan gets hoisted
// print() gets hoisted
// cslog brendad

// output = 'only okay'
// output = 'super cool'


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food gets hoisted
// eat() gets hoisted
// var food chicken gets hoisted
// eat() is called

// output = 'chicken'
// output = 'half-chicken'

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// var mean = function gets hoisted
// food chicken hoisted
// food fish hoisted
// mean is called

// undefined

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre gets hoisted
// rewind() gets hoisted
// genre disco hoisted
// genre rock hoisted
// genre rnb hoisted

// undefined
// output = 'rock'
// output = 'r&b'
// output = ' disco '

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo san jo gets hoisted
// learn() gets hoisted
// dojo seattle gets hoisted
// dojo burbank gets hoisted

// undefined
// output = 'seattle'
// output = 'burbank'
// undefined

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// 