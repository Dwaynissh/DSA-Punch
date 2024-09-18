class Noode {
    public value: number;
    public next: Noode | null;

    constructor(value : number) {
        this.value = value;
        this.next = null;
    }
}

class Linklistt {
    public head: Noode | null | any;
    public tail: Noode | null | any;
    public length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addHead(value: number){
        let node = new Noode(value)
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    addTail (value: number) {
        let node = new Noode(value)
        if (!this.head) {
            this.head = node;
            this.tail = this.head
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this;
    }

    removeTail(){
        if (!this.head) {
           return console.log("Cannot remove tail") 
        } else {
            let current = this.head;
            let newTail = current;

            while(current.next){
                newTail = current;
                current = current.next
            }
            this.length++
        return this;
        }
    }


}