
function Person() {
    this.words = 'hey you!';
    function shout() {
        console.log(this.words);
    }   
}

 Person.prototype.shout = function() {
     console.log('you over there!');
 }

var p = new Person();
p.shout();

//dynamic typing
var a;

if (undefined == a) {
    console.log('undefined2');
}