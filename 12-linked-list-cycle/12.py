from typing import Optional

class ListNode:
    def __init__(self, x, nnext = None):
        self.val = x
        self.next = nnext

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        pos = head
        sset = set()
        while (pos and pos.next):
            if pos in sset:
                return True

            sset.add(pos)
            pos = pos.next
        return False

print(Solution().hasCycle(ListNode(1, ListNode(2))))
