import LinkedList from "./LinkedList.js";

const linkedList = new LinkedList();
// APPEND
linkedList.append('test');
console.log(linkedList.head()); //HEAD

linkedList.append('test2222');
linkedList.append('test444444');
console.log(linkedList.tail()); //TAIL

// PREPEND
linkedList.prepend('test55555');
linkedList.prepend('test666666');
console.log(linkedList.head());

console.log(linkedList.size()); //SIZE
console.log(linkedList.at(3));  //AT

linkedList.pop();   //POP

// CONTAINS
console.log(linkedList.contains('test'));
console.log(linkedList.contains('test2222'));
console.log(linkedList.contains('test444444'));
console.log(linkedList.contains('alabala'));

// FIND
console.log(linkedList.find('test444444'));

// TO_STRING
console.log(linkedList.toString());

// INSERT_AT
linkedList.insertAt('test insert at', 3);
console.log(linkedList.toString());

// REMOVE_AT
linkedList.insertAt('test remove at', 2);
console.log(linkedList.toString());

linkedList.removeAt(2);
console.log(linkedList.toString());

