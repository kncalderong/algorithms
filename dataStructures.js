
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


/////////////
//Doubled Linked List
/////////////

var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
  // Only change code below this line
  this.add = function(element){
    let newNode 
    if(this.head === null){
      newNode = new Node(element,null)
      this.head = newNode
      this.tail = newNode
      this.length++
      return newNode
    }
    newNode = new Node(element, this.tail)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return newNode
  }

  this.remove = function(element){
    if(this.length === 0) return null
    if(this.head.data === element){
      this.head = this.head.next
      this.length--;
      return
    }
    if(this.tail.data === element){
      let parentTail = this.tail.prev
      parentTail.next = null
      this.tail = parentTail
      this.length--
      return
    }
    let current = this.head
    while(current !== null){
      if(current.data === element) break
      current = current.next
    }
    if (current === null) return null
    const parent = current.prev
    const child = current.next
    parent.next = child
    length--
    return current
  }
  // Only change code above this line
};

const example = new DoublyLinkedList()



/////////////
//Binary Tree
/////////////


var displayTree = tree => console.log(JSON.stringify(tree, null, 2)); // <---------------- This is a great function to visualize the tree
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = function(val){
    const newNode = new Node(val)
    if(this.root === null){ 
      this.root = newNode
      return undefined
    }
    let placeFound = false
    let currentBranch = this.root
    while(!placeFound){
      if(currentBranch.value === val) return null
      if(currentBranch.left === null && val <= currentBranch.value){
        currentBranch.left = newNode
        placeFound = true
        break
      }
      if(currentBranch.right === null && val >= currentBranch.value){
        currentBranch.right = newNode
        placeFound = true
        break
      }
      currentBranch = val <= currentBranch.value ? currentBranch.left : currentBranch.right
    }
    return undefined
  }
  
  this.findMax = function(){
    if(this.root === null) return null
    let maxVal = this.root.value
    let currentNode = this.root
    while(currentNode){
      if(currentNode.right){
        maxVal = currentNode.right
      }
      currentNode = currentNode.right
    }
    return maxVal.value
  }
  
  this.findMin = function(){
    if(this.root === null) return null
    let minVal = this.root.value
    let currentNode = this.root
    while(currentNode){
      if(currentNode.left){
        minVal = currentNode.left
      }
      currentNode = currentNode.left
    }
    return minVal.value
  }
  // Only change code above this line
  
  this.findHeight = function(){
    console.log("starting tree ==================")

    let height = [-1]
    let minHeight = null
    let maxHeight = null
    const checkHeight = (node) => {
      const lastHeight = height[height.length - 1]
      if (node === null) {
        if(minHeight === null || (lastHeight + 1)  <= minHeight){
          minHeight = (lastHeight + 1)
        }
        if(maxHeight === null || (lastHeight + 1) >= maxHeight){
          maxHeight = (lastHeight + 1)
        }
        return
      } 
      if(node.left || node.right){
        height.push(lastHeight + 1);
      }
      checkHeight(node.left)
      checkHeight(node.right) 
    }
    checkHeight(this.root)
    console.log("minHeight", minHeight)
    console.log("maxHeight", maxHeight)

    return height
  }
  
  this.findMinHeight = function(){
    if(this.root === null) return -1
    const heights = this.findHeight()
    console.log("heights: ",heights)
    if(heights.length > 1) return 0
  }

  this.findMaxHeight = function(){
    if(this.root === null) return -1
    const heights = this.findHeight()
    console.log("heights: ",heights)

  }
}

function isBinarySearchTree(tree) {
  // Only change code below this line
  function isBinarySubTree(node) {
    return !node /* empty subtree is always valid */
           || (
                /* child values must be in order */
                (!node.left  || node.left.value   < node.value) &&
                (!node.right || node.right.value >= node.value) &&
                /* and child subtrees must be valid */
                isBinarySubTree(node.left) && isBinarySubTree(node.right)
              )
  }

  return isBinarySubTree(tree.root);
  // Only change code above this line
}

//this was my solution :') :

function isBinarySearchTree(tree) {

  // Only change code below this line
  const isValidNode = (node) => {
    if (node === null) return true
    if ((node.left !== null && node.left.value >= node.value) || (node.right !== null && node.right.value < node.value) ) return false
    if (isValidNode(node.left) && isValidNode(node.right)){
      return true
    }
    return false
  }
  return isValidNode(tree.root)
  // Only change code above this line
}