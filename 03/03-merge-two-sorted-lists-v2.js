// https://leetcode.com/problems/merge-two-sorted-lists/

import { logObject } from '../shared/utis.js';
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
const mergeTwoLists = function (list1, list2) {
    let finalList = new ListNode();
    const head = finalList;

    while (isNodeValid(list1) && isNodeValid(list2)) {
        if (list1.val < list2.val) {
            finalList.next = new ListNode(list1.val);
            list1 = list1.next;
        } else if (isNodeValid(list2)) {
            finalList.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        finalList = finalList.next;
    }
    for (let list of [list1, list2]) {
        while (isNodeValid(list)) {
            finalList.next = new ListNode(list.val);
            list = list.next;
            finalList = finalList.next;
        }
    }
    return head.next;
};

const list1 = new ListNode(1, new ListNode(4, new ListNode(7)));
const list2 = new ListNode(5, new ListNode(8));
logObject(mergeTwoLists(list1, list2));
