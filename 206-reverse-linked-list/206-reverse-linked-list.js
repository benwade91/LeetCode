/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) return head
    let curr = head.next;
    head.next = null;
    while(curr){
        let temp = curr.next;
        curr.next = head;
        [head, curr] = [curr,temp]
    }
    return head
};