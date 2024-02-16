import Node from './Node.js';

class LinkedList {
    #size;
    #head;
    #tail;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    append(value) {
        this.#size++;

        // CASE FOR THE FIRST ELEMENT WHERE HEAD AND TAIL ARE THE SAME
        if(!this.#head) {
            this.#head = this.#tail = new Node(value);
            return;
        }

        // CASE FOR NEW NODES, ALWAYS SET THE TAIL IN ORDER TO APPEND
        let oldTail = this.#tail;
        this.#tail = new Node(value);

        oldTail.setNext(this.#tail);
    }

    prepend(value) {
        // KEEP A REFERENCE TO THE OLD HEAD
        // ASSIGN NEW NODE ELEMENT TO THE HEAD AND POINT TO THE OLD HEAD AS THE NEXT NODE
        let oldHead = this.#head;
        this.#head = new Node(value, oldHead);
        this.#size++;
    }

    size() {
        return this.#size;
    }

    head() {
        return this.#head;
    }

    tail() {
        return this.#tail;
    }

    at(index) {
        if(index >= this.#size) {
            throw new Error('Index out of bounds');
        }

        switch(index) {
            case 0:
                return this.#head;
            case this.size - 1:
                return this.#tail;
            default:
                let counter = 0;
                let nextNode = this.#head;

                // LOOP THROUGH THE LIST STARTING WITH THE HEAD, WHEN THE COUNT EQUALS INDEX RETURN THE NODE
                while(counter !== index) {
                    nextNode = nextNode.next;
                    counter++;
                }

                return nextNode;
        }
    }

    pop() {
        // CASE FOR ONE NODE IN THE LIST
        if(this.#tail === this.#head) {
            this.#head = this.#tail = null;
            this.#size = 0;
            return;
        }

        // ASSIGN NODE AT (LIST SIZE - 2) TO THE TAIL AND REMOVE NEXT REFERENCE
        this.#tail = this.at(this.#size - 2);
        this.#tail.removeNext();
        this.#size--;
    }

    contains(value) {
        let currentNode = this.#head;

        // LOOP THE LIST UNTIL THE VALUE IS FOUND
        while(currentNode.value !== value) {

            // IF REACH THE TAIL, VALUE DOES NOT EXIST
            if(!currentNode.next) {
                return false;
            }

            currentNode = currentNode.next;
        }

        return true;
    }

    find(value) {
        // SAME PRINCIPLE AS CONTAINS FUNCTION
        // INSTEAD OF RETURNING TRUE/FALSE, RETURN A COUNTER THAT IS EQUAL TO NUMBER OF LOOPS, A.K.A INDEX IN THIS CASE
        let currentNode = this.#head;
        let counter = 0;

        while(currentNode.value !== value) {
            if(!currentNode.next) {
                return null;
            }
            currentNode = currentNode.next;
            counter++;
        }

        return counter;
    }

    toString() {
        let currentNode = this.#head;
        let result = '';

        while(currentNode) {
            result += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.next;
        }

        result += 'null';

        return result;
    }

    insertAt(value, index) {
        if(index > this.size() - 1) {
            throw new Error('Index out of bounds!');
        }

        if(index === 0) {
            this.prepend(value);
            return;
        }

        if(index === this.size() - 1) {
            this.append(value);
            return;
        }

        let nodeAtIndex = this.at(index);
        let prevNode = this.at(index - 1);

        prevNode.setNext(new Node(value, nodeAtIndex));

        this.#size++;
    }

    removeAt(index) {
        if(index > this.size() - 1) {
            throw new Error('Index out of bounds!');
        }

        if(index === 0) {
            this.#head = this.#head.next;
            this.#size--;
            return;
        }

        if(index === this.size() - 1) {
            this.pop();
            return;
        }

        let nodeAtIndex = this.at(index);
        let prevNode = this.at(index - 1);

        prevNode.setNext(nodeAtIndex.next);
        this.#size--;
    }
}

export default LinkedList;