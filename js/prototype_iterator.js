

//This is the Pet prototype. So when objects are created from this object, they will follow the same template.
var Dog = {
    heart: 1,
    feet: 4,
    skin: 'fur'
};
 
var AddDog = function(dog,doglist){
    doglist.push(dog);
};
 
//Array were the dogs will be stored
var DogPack = [];

//Created Pets from the object Pet. Pet is the prototype that the other objects are following.
var Tobi = Object.create(Dog);
var Harry = Object.create(Dog);
var Leo = Object.create(Dog);
var Geo = Object.create(Dog);

Tobi.name = 'Tobi';
Harry.name = 'Harry';
Leo.name = 'Leo';
Geo.name = 'Geo';

//Put dog objects into DogPack array
AddDog(Tobi,DogPack);
AddDog(Harry,DogPack);
AddDog(Leo,DogPack);
AddDog(Geo,DogPack);

//Iterator- This iterator takes in an array of object dogs and finds the dog with the specific name. It goes through the collection of dogs to find it.
var DogSearch = function(items) {
    this.index = 0;
    this.items = items;
    
    this.Find = function(dogname){
        
        for(var i = this.index; i<this.items.length; i++){
            if( this.items[i].name === dogname){
                console.log('returned object in position '+ i);
                return this.items[i];
                
            }
        }
        
    };
    
};



var bob = new DogSearch(DogPack);
var foundDog = bob.Find('Leo');

//Reports to console the Dog object that was found.
console.log(foundDog);












