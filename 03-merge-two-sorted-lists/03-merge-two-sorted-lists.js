// https://leetcode.com/problems/merge-two-sorted-lists/

import { logObject } from '../shared/utils.js';
import { ListNode } from './common/list-node.model.js';

/**
 * @param {ListNode} node
 * @returns node valid
 */
function isNodeValid(node) {
    if (node && node.val !== null) {
        return true;
    }
    return false;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let finalList = new ListNode();
    const head = finalList;

    while (isNodeValid(list1) || isNodeValid(list2)) {
        if (
            (isNodeValid(list1) && isNodeValid(list2) && list1.val < list2.val) ||
            (isNodeValid(list1) && !isNodeValid(list2))
        ) {
            finalList.next = new ListNode(list1.val);
            list1 = list1.next;
        } else if (isNodeValid(list2)) {
            finalList.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        finalList = finalList.next;
    }
    return head.next;
};

const list1 = new ListNode(1, new ListNode(4, new ListNode(7)));
const list2 = new ListNode(5, new ListNode(8));
logObject(mergeTwoLists(list1, list2));
// logObject(mergeTwoLists(new ListNode(), new ListNode()));
// logObject(mergeTwoLists(new ListNode(null), new ListNode(0)));
// logObject(mergeTwoLists(new ListNode(0), new ListNode(null)));
