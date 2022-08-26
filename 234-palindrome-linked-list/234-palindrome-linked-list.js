/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let queue = [];
    while(head){
        queue.push(head.val)
        head = head.next
    }
    while(queue.length>1){
        let left = queue.shift()
        let right = queue.pop()
        if(left !== right) return false
    }
    return true
};