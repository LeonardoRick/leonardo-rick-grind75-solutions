import { logObject } from '../shared/utils.js';

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let pos = head;
    let set = new Set([]);
    while (pos * pos.next) {
        logObject(set);
        if (set.has(pos)) {
            return true;
        }
        set.add(pos);
        pos = pos.next;
    }
    return false;
};

const l4 = new ListNode(-4);
const l2 = new ListNode(2, new ListNode(0, l4));
l4.next = l2;
logObject(hasCycle(new ListNode(3, l2)));
