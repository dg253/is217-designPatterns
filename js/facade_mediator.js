/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




var Superhero = function(name){
    
    this.name = name;
    this.lifepoints = '100';
    this.getName= function(){
        return this.name;
    };
    this.setPower= function(power){
	this.power = power;
    };
    this.getPower = function(){
	return this.power;
    };
    this.setWeakness= function(weakness){
        this.weakness = weakness;
    };
    this.getWeakness = function(){
        return this.weakness;
    };
    this.setLifePoints= function(lifepoints){
        this.lifepoints = lifepoints ;
    };
    this.getLifePoints = function(){
        return this.lifepoints;
    };

};


// This is a Facade. It makes it easier for the user to Assign Damage to a Hero without needing to set other things inorder to get the outcome.
var AssignHeroDamage = function(hObj,damage){
        var lp = parseInt(hObj.getLifePoints());
        var dmg = damage;
        var result = lp - dmg;
        
        if (result < 0){
            hObj.setLifePoints('0');
        }else{
            hObj.setLifePoints(result.toString());
        }
};

//This is a Facade. It makes it easy for the user to retrieve information about an object without touching inside the object.
var HeroDetailStatus = function(hObj){
    console.log('Status: Name is '+hObj.getName()+',Power is '+ hObj.getPower()+',Weakness is '+ hObj.getWeakness()+',Life Points is '+ hObj.getLifePoints());
};


// This is a Mediator. It controls the workflow of managing a Hero. It give the user access to certain facade functions and validates what is being past through to prevent error
var ManageHero = function(){
    
    this.damageTaken = function(object,value){
        if (typeof object=== "object" && typeof value=== "number"){
            AssignHeroDamage(object,value);
            console.log(object.getName() + " has taken " + value + " damage. Life points went to " + object.getLifePoints());
        }else{
            console.log('ERROR: Couldnt take damage due incorrect passing arguements');
        }
    };
    
    this.heroStatus = function(object){
        if (typeof object === "object"){
            return HeroDetailStatus(object);
        }else{
            console.log('ERROR: Couldnt take get STATUS due to incorrect passing arguements.');
        }

    };
    
};

var spiderman = new Superhero('spiderman');
var managehero = new ManageHero;

//Display starting life total of superhero object.
console.log('Spiderman start life total '+ spiderman.getLifePoints());
//Call the mediator- This sets the flow because it validate the inputs then it continues with the flow.
managehero.damageTaken(spiderman,84);
//Display life total after hero has taken damage.
console.log('Spiderman life total ' + spiderman.getLifePoints());
//Call the mediator - Sets calls for hero status while checking for correct paramaters.
managehero.heroStatus(spiderman);


















