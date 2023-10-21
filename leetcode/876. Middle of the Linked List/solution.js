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
 * Time Complexity : O(N) - Where N is size of linked list
 * Space Complexity : O(1) - We have created a variable to store the cur position, however it is a linked list it do not take size
 */

/** 
 * In this approach we iterated till end of linked list and find the total nodes count.
 * Then find the middle node position.
 * Then again start from start of linked list and also maintain current position.
 * we iterate till the current position is less than middle  
 * 
 */
var middleNode = function(head) {
    let nodesCount = 1;
    let cur = head;
    while(cur.next !== null){
        cur = cur.next; 
        nodesCount++;
    }

    const middle = Math.ceil(nodesCount % 2===0 ? nodesCount/2 + 1 : nodesCount/2);
    
    let curPos = 1;
    cur = head;
    while(curPos < middle){
        cur = cur.next; 
        curPos++;
    };
    return cur;
};

/** Leet Code Approach */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * Time Complexity : O(N) - Where N is size of linked list, we are looping only N/2 times but time complexity is O(N) 
 * Space Complexity : O(1) - We have created a variable to store the cur position, however it is a linked list it do not take size
 */
/**
 * In This approach we maintain two pointers, 
 * middle and cur
 * Here we can see a pattern, 
 * 
 * eg1. Linked List - [1]
 * 
 * pass 1 :
 * cur - 1 (here 1 is the value at fist linked list pos)
 * middle - 1
 * as we do not have any further list, we can return middle
 * 
 * 
 * eg2. Linked List - [1,2]
 * 
 * pass 1 :
 * cur - 1 (here 1 is the value at fist linked list pos)
 * middle - 1
 * 
 * pass 2 :
 * cur - 2
 * middle - 1
 * We are only moved cur, and not middle. 
 * Now we cur next do not have any node, so we return middle
 * 
 * eg3. Linked List - [1,2,3]
 * 
 * pass 1 :
 * cur - 1 (here 1 is the value at fist linked list pos)
 * middle - 1
 * 
 * pass 2 :
 * cur - 2
 * middle - 1
 * We are only moved cur, and not middle.
 * 
 * pass 3 :
 * cur - 3
 * middle - 2
 * We are only moved cur, and not middle. 
 * Now we cur next do not have any node, so we return middle
 * 
 * If we see above pattern, middle is only move when cur is moved 2 times. 
 * As for odd number of linked list nodes, middle position is at N/2 position(N is size of linked list) 
 * As for even number of linked list nodes, middle position is at N/2+1 position(N is size of linked list)
 */
var middleNode = function(head) {
    let cur = head;
    let middle = head;
    while(cur!==null && cur.next !== null){
        cur = cur.next.next;
        middle = middle.next;
    }
    return middle;
};