/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
      if (lists.length === 0) {
    return null;
  }

  const mergeTwoLists = (l1, l2) => {
    const dummy = new ListNode();
    let tail = dummy;

    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }

    tail.next = l1 !== null ? l1 : l2;

    return dummy.next;
  };

  let interval = 1;

  while (interval < lists.length) {
    for (let i = 0; i < lists.length - interval; i += interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }

  return lists[0] || null;
};