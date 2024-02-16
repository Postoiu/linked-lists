class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    setNext(node) {
        this.next = node;
    }

    removeNext() {
        this.next = null;
    }
}

export default Node;