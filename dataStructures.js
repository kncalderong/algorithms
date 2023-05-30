
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
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.keys(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }

  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }

  intersection(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      if (set.values().includes(value))
          newSet.add(value);
    })

    return newSet;
  }

  difference(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      if (!set.values().includes(value))
          newSet.add(value);
    })

    return newSet;
  }

  isSubsetOf(set) {
    return this
      .values()
      .every(value => set.values().includes(value));
  }
}

/////////////
//Hashed Table
/////////////

let called = 0;

let hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

let HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    const hashedKey = hash(key);
    this.collection[hashedKey] = this.collection[hashedKey] || {};
    this.collection[hashedKey][key] = value;
  }

  this.lookup = (key) => {
    const hashedKey = hash(key);
    return this.collection[hashedKey][key];
  }

  this.remove = (key) => {
    const hashedKey = hash(key);
    delete this.collection[hashedKey][key];
    if (Object.keys(this.collection[hashedKey]).length == 0)
      delete this.collection[hashedKey];
  }
  // Only change code above this line
};

/////////////
//Linked List
/////////////

function LinkedList() {
  let length = 0;
  let head = null;

  function Node(element) {
    this.element = element;
    this.next = null;
  }

  this.head = () => head;

  this.size = () => length;

  this.add = element => {
    const node = new Node(element);
    if (head) {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    else {
      head = node;
    }
    length++;
  };
  
  this.addAt = function(index,element){
    if(index < 0 || index >= length) return false
    var node = new Node(element)
    if (index === 0){
      node.next = head
      head = node
      length++;
      return
    }
    let parentNode = null
    let currentIndex = 0 
    let currentNode = head
    let isFound = false
    while(!isFound && currentNode){
      if(index === currentIndex){
        parentNode.next = node
        node.next = currentNode
        isFound = true
        length++;
        break
      }
      currentIndex++;
      parentNode = currentNode
      currentNode = currentNode.next
    }
  }
}