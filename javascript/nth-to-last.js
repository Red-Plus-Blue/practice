const Node = class {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const LinkedList  = class {

    constructor(values) {
        this.head = null;
        this.tail = null;

        if(values) {
            for(let value of values) {
                this.add(value);
            }
        }
    }

    add(value) {
        const node = new Node(value);

        if(!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
}

const nthToLast = (list, n) => {
    let leader = list.head;
    let follower = list.head;
    let index = 0;
    
    for(let current = leader; current != null; current = current.next) {
        leader = current;        
        if(index > n) {
            follower = follower.next;
        }
        index++;
    }
    console.log("The " + n + "th to last element is " + follower.value);
};


nthToLast(new LinkedList([1, 2, 3, 4, 5]), 1); // => 4
nthToLast(new LinkedList([1, 2, 3, 4, 5]), 2); // => 3
nthToLast(new LinkedList([1, 2, 3, 4, 5]), 3); // => 2
nthToLast(new LinkedList([1, 2, 3, 4, 5]), 4); // => 1

