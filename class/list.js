class Node {
	val;
	next;
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
	head;
	tail;
}

let head = new Node("C");
head.next = new Node("a");
head.next.next = new Node("t");

function print(head) {
	let curr = head;
	while (curr != null) {
		console.log(curr.val);
		curr = curr.next;
	}
}

// O(N), b/c I'm not maintaining a reference to tail node
function append(head, newNode) {
	let curr = head;

	while (curr.next != null) {
		curr = curr.next;
	}

	curr.next = newNode;
}

function prepend(head, newNode) {
	newNode.next = head;
	return newNode;
}

function pop(head) {
	let curr = head;

	while (curr.next.next != null) {
		curr = curr.next;
	}

	curr.next = null;
}

append(head, new Node("s"));
print(head);
pop(head);
print(head);
head = prepend(head, new Node("z"));
print(head);
