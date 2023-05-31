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
 */

function hasCycle(head) {
  if (head === null || head.next === null) {
    // An empty list or a list with only one node cannot have a cycle
    return false;
  }
  
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      // The fast pointer caught up to the slow pointer, indicating a cycle
      return true;
    }
  }
  
  // No cycle found
  return false;
}
