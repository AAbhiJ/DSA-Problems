/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * TC : O(N) - If cycle is present the loop will travel K times more, ie O(N + K) ~ O(N)
 * SC : O(1)
 * 
 */
var hasCycle = function(head) {
    let slowPt = head, fastPt = head;
    do{
        if(fastPt===null || fastPt.next===null)return false;
        slowPt = slowPt.next;
        fastPt = fastPt.next.next;
        // console.log(slowPt.val, fastPt.val)
    }while(slowPt!==fastPt);
    return true;
};