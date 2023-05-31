class LRUCache {
    constructor(capacity) {
//capacity max num key/value pair the cache can hold
        this.capacity = capacity;
        this.cache = new Map();
//map to store key/value pairs 
        this.head = { key: null, value: null, prev: null, next: null };
//head (most recent used) and tail (least recent used) for double linked
        this.tail = { key: null, value: null, prev: this.head, next: null };
        this.head.next = this.tail;
    }

//check if cache has given key, yes move to head,
    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.moveToHead(node);
            return node.value;
        } else {
            return -1;
        }
    }

//updates current key/value, if none then makes new node
    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this.moveToHead(node);
        } else {
            const newNode = { key, value, prev: null, next: null };
            this.cache.set(key, newNode);
            this.addToHead(newNode);
            if (this.cache.size > this.capacity) {
                const tailNode = this.removeTail();
                this.cache.delete(tailNode.key);
            }
        }
    }

    addToHead(node) {
        node.prev = this.head;
//The prev property of the new node is set to this.head. This makes the prev property of the new node reference the head node, which acts as the dummy head of the linked list.
        node.next = this.head.next;
//The next property of the new node is set to this.head.next. This makes the next property of the new node reference the node that was previously at the head of the list.
        this.head.next.prev = node;
//aka prev head’s next is now this node
// The prev property of the node following the head node is updated to reference the new node. By accessing this.head.next, we get the node that was previously at the head of the list, and then we update its prev property to point to the new node.
        this.head.next = node;
// Finally, the next property of the head node is updated to reference the new node. This effectively adds the new node as the first node in the linked list, after the head node.
    }

    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
	//the prev next is current node, but remove current node and skip to next. 
    }

    moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }

    removeTail() {
        const tailNode = this.tail.prev;
        this.removeNode(tailNode);
        return tailNode;
    }
}
