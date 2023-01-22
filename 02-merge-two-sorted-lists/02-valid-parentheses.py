# https://leetcode.com/problems/valid-parentheses/description/

class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        correspondingDict = {
            '(': ')',
            '{': '}',
            '[': ']'
        }
        pipe = []
        for c in s:
            if (c in correspondingDict):
                pipe.append(correspondingDict[c])
            elif len(pipe) == 0 or pipe.pop() != c:
                return False
        return len(pipe) == 0

print(Solution().isValid('('))         # False
print(Solution().isValid('()[]{}'))    # True
print(Solution().isValid('(]'))        # False
print(Solution().isValid('({([])})'))  # True
print(Solution().isValid('({([[])})')) # False
print(Solution().isValid(']'))         # False