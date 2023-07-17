class Node{
    constructor(a){
        this.value=a;
        this.next=undefined;
    }
    
}
let insertion_start=function(head, value){
    let new_node=new Node(value);
    new_node.next=head;
    return new_node;
}
let insertion_end=function(head, value){
    let new_node=new Node(value);
    let temp=head;
    while(temp.next!=null){
        temp=temp.next;
    }
    temp.next=new_node;
}
let insertion_middle=function(head, n, value){
    let new_node=new Node(value);
    let temp=head;
    while(n-1>0){
        temp=temp.next;
        n=n-1;
    }
    let x=temp.next;
    temp.next=new_node;
    new_node.next=x;
}
let deletion_at_start=function(head){
    head=head.next;
    return head;
}
let deletion_in_end=function(head){
    let  temp=head;
    while(temp.next!=null && temp.next.next!=null){
        temp=temp.next;
    }
    temp.next=undefined; // or-> temp.next=temp.next.next
}
let deletion_in_middle=function(head,n){
    let temp=head;
    while(n-2>0){
        temp=temp.next;
        n=n-1;
    }
    temp.next=temp.next.next;
}
let display=function(head){
    let temp=head;
    while(temp!=null){
        console.log(temp.value);
        temp=temp.next;
    }
}
let head=new Node(5);
console.log(head.value, head.next);
head=insertion_start(head,10);
console.log(head);
console.log("**************************");
head=insertion_start(head,0);
insertion_end(head,20);
insertion_end(head,30);
insertion_middle(head,4,100);
display(head);
console.log("**************************");
head=deletion_at_start(head);
//head=head.next;
display(head);
console.log("**************************");
deletion_in_end(head);
display(head);
console.log("**************************");
deletion_in_middle(head,2);
display(head);
console.log("**************************");
