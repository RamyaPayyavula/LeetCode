let Node = function(val) {
    this.val = val;
    this.next = null;
}

let MyLinkedList = function() {
    this.head = null;
    this.len = 0;
};

MyLinkedList.prototype.get = function(index) {
    if(index >= this.len || index < 0)
        return -1;
    let tmp = this.head;
    let i = 0
    while(i < index)
    {
        tmp = tmp.next;
        i++;
    }
    return tmp.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    let newHead = new Node(val);
    if (!this.head)
        this.head = newHead;
    else
    {
        newHead.next = this.head;
        this.head = newHead;
    }
    this.len++;
};

MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if (!this.head)
        this.head = newNode;
    else
    {
        let tmp = this.head;
        while (tmp.next)
        {
            tmp = tmp.next;
        }
        tmp.next = newNode;
    }
    this.len++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.len || index < 0)
        return null;
    if(index == 0)
        this.addAtHead(val);
    else if (index == this.len)
        this.addAtTail(val);
    else {
        let i = 0;
        let tmp = this.head;
        let prev = tmp;
        let newNode = new Node(val);
        while (i < index)
        {
            prev = tmp;
            tmp = tmp.next;
            i++;
        }
        prev.next = newNode;
        newNode.next = tmp;
        this.len++;
    }
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.len || index < 0)
        return;
    if (index == 0)
        this.head = this.head.next;
    else 
    {
        let tmp = this.head;
        let prev = tmp;
        let i = 0;
        while (i < index)
        {
            prev = tmp;
            tmp = tmp.next;
            i++;
        }
        prev.next = tmp.next;
    }
    this.len--;
};