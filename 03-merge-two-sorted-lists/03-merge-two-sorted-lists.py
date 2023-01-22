# https://leetcode.com/problems/merge-two-sorted-lists/

from typing import Optional

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __str__(self) -> str:
        return f'{self.val}, {self.next}'

def printSolution(node: ListNode):
    print(f'[{node}]')

class Solution:

    def isNodeValid(self, node: ListNode):
        return True if node and node.val is not None else False

    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        final_list = ListNode()
        head = final_list
        while (self.isNodeValid(list1) or self.isNodeValid(list2)):
            print(list2 and list2.val)
            if (self.isNodeValid(list1) and self.isNodeValid(list2) and list1.val < list2.val
               or self.isNodeValid(list1) and not self.isNodeValid(list2)):
                final_list.next = ListNode(list1.val)
                list1 = list1.next
            elif (self.isNodeValid(list2)):
                final_list.next = ListNode(list2.val)
                list2 = list2.next
            final_list = final_list.next

        return head.next


list1 = ListNode(1, ListNode(4, ListNode(7)))
list2 = ListNode(5, ListNode(8))
# printSolution(Solution().mergeTwoLists(list1, list2))
# printSolution(Solution().mergeTwoLists(ListNode(), ListNode()))
# printSolution(Solution().mergeTwoLists(ListNode(None), ListNode(0)))
# printSolution(Solution().mergeTwoLists(ListNode(0), ListNode(None)))
