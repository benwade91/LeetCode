/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let res = new ListNode(0);
    let curr = res;
    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = new ListNode(list1.val)
            curr = curr.next
            list1 = list1.next
        } else {
            curr.next = new ListNode(list2.val)
            curr = curr.next
            list2 = list2.next
        }
    }
    if(list1) curr.next = list1;
    if(list2) curr.next = list2;
    return res.next;
};