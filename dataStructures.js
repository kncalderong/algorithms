
/////////////
//Stack
/////////////

function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.push = function(element) {
    collection.push(element)
  }
  this.pop = function() {
    return collection.pop()
  }
  this.peek = function(){ 
    return collection[collection.length-1]
  }
  this.isEmpty = function(){
    if(collection.length === 0){
      return true
    }
    return false
  }
  this.clear = function(){
    collection = []
  }
}

const stackExample = new Stack()

stackExample.print()
console.log(stackExample.isEmpty())


/////////////
//Priority Queue
/////////////

function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(item) {
    let index = this.collection.findIndex(elem => elem[1] > item[1]);
    if (index !== -1) {
      this.collection.splice(index, 0, item);
    } else {
      this.collection.push(item);
    }
  }

  this.dequeue = function() {
    return this.collection.shift()[0];
  }

  this.size = function() {
    return this.collection.length;
  }

  this.isEmpty = function() {
    return this.size() === 0;
  }

  this.front = function() {
    return this.collection[0][0];
  }
  // Only change code above this line
}

const priorityQueueExample = new PriorityQueue()

console.log(priorityQueueExample.dequeue(['bird',5]))


/////////////
//Circular Queue
/////////////

class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) this.write = 0;
      return item;
    }
    return null;
  }

  dequeue() {
    if (this.queue[this.read] != null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) this.read = 0;
      return item;
    }
    return null;
  }
}


/////////////
//Set class
/////////////

class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  add(element){
    if (!this.has(element)){
      this.dictionary[element] = element
      return true
    }
    return false
  }

  remove(element){
    if (this.has(element)){
      delete this.dictionary[element]
      return true
    }
    return false
  }
  size(){
    return this.values().length
  }
  // Only change code above this line
}