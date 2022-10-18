/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let a = [];
    let b = [];
    let res = [];
    while(l1){
        a.push(l1.val)
        l1 = l1.next
    }
    while(l2){
        b.push(l2.val)
        l2 = l2.next
    }
    let remainder = false;
    while(a.length || b.length){
        let aa = a.pop()
        let bb = b.pop()
        let rem = remainder ? 1 : 0;
        let sum = 0;
        if(aa !== undefined && bb!== undefined) sum = aa + bb + rem;
        else if(aa!== undefined) sum = aa + rem;
        else sum = bb + rem;
        if(sum > 9) remainder = true;
        else remainder = false;
        res.push(sum % 10)
    }
    if(remainder) res.push(1)
    
    let head = new ListNode(res.pop());
    let curr = head;
    while(res.length){
        curr.next = new ListNode(res.pop())
        curr = curr.next;
    }
    return head;
};