var pet = function(yelp) {
    
    this.sound = yelp;

}
pet.prototype.speak = function() {
    console.log(this.sound);
    
}

var cat = new pet('meow');
cat.speak();
var dog = new pet('ruff');
dog.speak();





