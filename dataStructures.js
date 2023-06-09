
/////////////
//Stack
/////////////

function Stack() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.push = function (element) {
    collection.push(element)
  }
  this.pop = function () {
    return collection.pop()
  }
  this.peek = function () {
    return collection[collection.length - 1]
  }
  this.isEmpty = function () {
    if (collection.length === 0) {
      return true
    }
    return false
  }
  this.clear = function () {
    collection = []
  }
}

const stackExample = new Stack()

stackExample.print()
console.log(stackExample.isEmpty())


/////////////
//Priority Queue
/////////////

function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (item) {
    let index = this.collection.findIndex(elem => elem[1] > item[1]);
    if (index !== -1) {
      this.collection.splice(index, 0, item);
    } else {
      this.collection.push(item);
    }
  }

  this.dequeue = function () {
    return this.collection.shift()[0];
  }

  this.size = function () {
    return this.collection.length;
  }

  this.isEmpty = function () {
    return this.size() === 0;
  }

  this.front = function () {
    return this.collection[0][0];
  }
  // Only change code above this line
}

const priorityQueueExample = new PriorityQueue()

console.log(priorityQueueExample.dequeue(['bird', 5]))


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

let HashTable = function () {
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

  this.addAt = function (index, element) {
    if (index < 0 || index >= length) return false
    var node = new Node(element)
    if (index === 0) {
      node.next = head
      head = node
      length++;
      return
    }
    let parentNode = null
    let currentIndex = 0
    let currentNode = head
    let isFound = false
    while (!isFound && currentNode) {
      if (index === currentIndex) {
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

var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
  // Only change code below this line
  this.add = function (element) {
    let newNode
    if (this.head === null) {
      newNode = new Node(element, null)
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

  this.remove = function (element) {
    if (this.length === 0) return null
    if (this.head.data === element) {
      this.head = this.head.next
      this.length--;
      return
    }
    if (this.tail.data === element) {
      let parentTail = this.tail.prev
      parentTail.next = null
      this.tail = parentTail
      this.length--
      return
    }
    let current = this.head
    while (current !== null) {
      if (current.data === element) break
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
  this.add = function (val) {
    const newNode = new Node(val)
    if (this.root === null) {
      this.root = newNode
      return undefined
    }
    let placeFound = false
    let currentBranch = this.root
    while (!placeFound) {
      if (currentBranch.value === val) return null
      if (currentBranch.left === null && val <= currentBranch.value) {
        currentBranch.left = newNode
        placeFound = true
        break
      }
      if (currentBranch.right === null && val >= currentBranch.value) {
        currentBranch.right = newNode
        placeFound = true
        break
      }
      currentBranch = val <= currentBranch.value ? currentBranch.left : currentBranch.right
    }
    return undefined
  }

  this.findHeight = function () {
    let height = [-1]
    let minHeight = null
    let maxHeight = null
    const checkHeight = (node) => {
      const lastHeight = height[height.length - 1]
      if (node === null) {
        if (minHeight === null || (lastHeight + 1) <= minHeight) {
          minHeight = (lastHeight + 1)
        }
        if (maxHeight === null || (lastHeight + 1) >= maxHeight) {
          maxHeight = (lastHeight + 1)
        }
        return
      }
      if (node.left || node.right) {
        height.push(lastHeight + 1);
      }
      checkHeight(node.left)
      checkHeight(node.right)
    }
    checkHeight(this.root)
    return { height, minHeight, maxHeight }
  }

  this.findMinHeight = function () {
    if (this.root === null) return -1
    const { minHeight } = this.findHeight()
    return minHeight
  }

  this.findMaxHeight = function () {
    if (this.root === null) return -1
    const { maxHeight } = this.findHeight()
    return maxHeight
  }

  this.isBalanced = function () {
    if (this.root === null) return false
    const { minHeight, maxHeight } = this.findHeight()
    if (maxHeight - minHeight > 1) return false
    return true
  }

  this.inorder = function () {
    if (this.root === null) return null
    let values = []
    function getNodeValue(node) {
      if (node === null) return
      getNodeValue(node.left) //left
      values.push(node.value) // root
      getNodeValue(node.right) // right
    }
    getNodeValue(this.root)
    console.log("values: ", values)
    return values
  }

  this.preorder = function () {
    if (this.root === null) return null
    let values = []
    function getNodeValue(node) {
      if (node === null) return
      values.push(node.value) // root
      getNodeValue(node.left) //left
      getNodeValue(node.right) // right
    }
    getNodeValue(this.root)
    console.log("values: ", values)
    return values
  }
  this.postorder = function () {
    if (this.root === null) return null
    let values = []
    function getNodeValue(node) {
      if (node === null) return
      getNodeValue(node.left) //left
      getNodeValue(node.right) // right
      values.push(node.value) // root
    }
    getNodeValue(this.root)
    console.log("values: ", values)
    return values
  }

  ///to traverse root by levels: 
  function traverse(direction, root) {
    const queue = [root];
    const results = [];

    function pushIfThere(node, queue) {
      if (node) queue.push(node);
    }

    while (queue.length > 0) {
      const node = queue.shift();
      results.push(node.value);
      if (direction === "level") {
        // Level order: left to right
        pushIfThere(node.left, queue);
        pushIfThere(node.right, queue);
      } else {
        // Reverse level order: right to left
        pushIfThere(node.right, queue);
        pushIfThere(node.left, queue);
      }
    }

    return results;
  }

  // Level order traversal
  this.levelOrder = function () {
    if (!this.root) return null;

    return traverse("level", this.root);
  }

  // Reverse level order traversal
  this.reverseLevelOrder = function () {
    if (!this.root) return null;

    return traverse("reverseLevel", this.root);
  }

  //to delete element in the tree
  this.remove = function(value) {
    if (!this.root) return null;

    // find the node
    let parent;
    let target = this.root;
    while (target && target.value !== value) {
      parent = target;
      if (target.value > value) {
        target = target.left;
      } else {
        target = target.right;
      }
    }
    if (!target) return null;

    // remove the node
    // -- zero or one children
    if (!(target.left && target.right)) {
      // ---- root node
      const replacement = target.right ? target.right : target.left;
      if (!parent) {
        this.root = replacement;
      } else {
        // ---- other node
        const direction = parent.left === target ? "left" : "right";
        parent[direction] = replacement;
      }
    } else {
      // -- two children
      // ---- replace current value with smallest child
      const newChildValue = this.findMin(target.right);
      this.remove(newChildValue);
      target.value = newChildValue;
    }
  }

  this.findMin = function(node = this.root) {
    if (!node) return null;
    return node.left ? this.findMin(node.left) : node.value;
  }

  this.findMax = function(node = this.root) {
    if (!node) return null;
    return node.right ? this.findMax(node.right) : node.value;
  }
  
  this.invert = function(node = this.root) {
    if (!node) return null;

    [node.left, node.right] = [node.right, node.left];
    this.invert(node.left);
    this.invert(node.right);
  }

}

function isBinarySearchTree(tree) {
  // Only change code below this line
  function isBinarySubTree(node) {
    return !node /* empty subtree is always valid */
      || (
        /* child values must be in order */
        (!node.left || node.left.value < node.value) &&
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
    if ((node.left !== null && node.left.value >= node.value) || (node.right !== null && node.right.value < node.value)) return false
    if (isValidNode(node.left) && isValidNode(node.right)) {
      return true
    }
    return false
  }
  return isValidNode(tree.root)
  // Only change code above this line
}


/////////////
//Trie search tree
/////////////


var Trie = function () {
  // Only change code below this line
  this.root = new Node();

  this.add = (wordParam) => {
    console.log(wordParam);
    function addWord(word, root) {
      if (word) {
        // console.log(Object.keys(root.keys));
        if (Object.keys(root.keys).includes(word[0])) { // check if letter is already in node
          let letter = word[0];
          addWord(word.substring(1), root.keys[letter]); // if there is the letter then add the remaning word to that node that contained the first letter
        }
        else {
          const node = new Node(); // if letter is not already in the node, then create a new node and include it as root keys[]

          let letter = word[0];
          root.keys[letter] = node;
          // console.log("\nroot after adding the key", word[0], ":", root, "\n");

          if (word.length === 1) { // at the end of recursion only one letter will remain, so mark the node as finish of the word
            node.setEnd();
          }
          addWord(word.substring(1), root.keys[letter]);
        }
      }
    }

    addWord(wordParam, this.root);
    // console.log("Root, finally:\n", this.root);
  };
  
  this.isWord = word => {
    let root = this.root;
    while (word) { // while word has letters yet
      let firstLetter = word[0];
      if (Object.keys(root.keys).includes(firstLetter)) { //if root keys includes first letter
        if (word.length === 1) { //if the targetWord is only 1length and root letter continues as a whole word, so return false
          if (!root.keys[firstLetter].isEnd()) {
            return false;
          }
        }
        word = word.substring(1); // while word has letters yet
      } 
      else { //if current letter is not contained then return false
        return false;
      }
      root = root.keys[firstLetter]; //change of "root" to update the current node
    }
    return true;
  };
  
  this.print = () => {
    const words = [];

    function reTRIEve(root, word) {
      // console.log(Object.keys(root.keys).length);
      if (Object.keys(root.keys).length != 0) {
        for (let letter of Object.keys(root.keys)) {
          reTRIEve(root.keys[letter], word.concat(letter)); //recursive to get all letter of one branch concatenated
        }
        if (root.isEnd()) { //eventually the node will be marked as end of the word, so can be pushed to the array
          words.push(word);
        }
      }
      else {
        word.length > 0 ? words.push(word) : undefined;
        return;
      }
    }

    reTRIEve(this.root, "");
    console.log(words);
    return words;
  };
  
}


/////////////
//MaxHeap
/////////////


var MinHeap = function() {
  // Only change code below this line
  this.heap = [null];
  this.insert = (ele) => {
    var index = this.heap.length;
    var arr = [...this.heap];
    arr.push(ele);
    while (ele < arr[Math.floor(index / 2)] && index > 1) {
      arr[index] = arr[Math.floor(index / 2)];
      arr[Math.floor(index / 2)] = ele;
      index = Math.floor(index / 2); //Correct it to return parent index instead of parent
    }
    this.heap = arr;
  }
  this.print = () => {
    return this.heap.slice(1);
  }
  this.remove = () =>{
    let arr = [...this.heap];
    let min = arr.splice(1,1);
    this.heap = [null];
    for(let i = 1; i<arr.length;i++){
      this.insert(arr[i]);
    }
    return min[0];
  }
  this.sort = (array) => {
    let resultArray = []
    console.log(this.heap)
    while(this.heap.length > 1){
      resultArray.push(this.remove())
    }
    console.log("resultArray ", resultArray)
    return resultArray
  }

  // Only change code above this line
};