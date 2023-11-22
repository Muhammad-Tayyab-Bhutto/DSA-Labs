// Set Implementation
 
function mySet(){
    // the var collections will hold the set elements
    var collections = [];
    
    // this method will check the presence of element in the set and will returns true or false
    this.has = function(element){
        return (collections.indexOf(element) !== -1);
    }

    // this method will returns all the values of set
    this.values = function(){
        return collections;
    }

    // this method will add an element in the set
    this.add = function(element){
        if (!this.has(element)){
            collections.push(element);
            return true;
        }
        return false;
    }

    // this will remove the element from set 
    // Note : In ES6 the remove method is replaced with the delete
    this.remove = function(element){
        if(this.has(element)){
            index = collections.indexOf(element);
            collections.splice(index, 1);
            return true;
        }
        return false;
    }

    // this will returns the size of the set
    this.size = function(){
        return collections.length
    }

    // this method will return the union of two elements 
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
    }

    // this method will returns the intersection of two sets
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if (otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    // this method will returns the difference of two sets
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if (!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    // this method will test if the set is the subset of different set
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    }
}

var setA = new mySet();
var setB = new mySet();

setA.add(1);
setA.add(2);
setA.add(2);
setA.add(3);
setA.add(4);
setB.add(1);
setB.add(10);
setB.add(9);
setB.add(13);
setB.add(4);
console.log(setA.size());
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());