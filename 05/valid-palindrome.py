# https://leetcode.com/problems/valid-palindrome/
from re import sub
class Solution:
    def isPalindrome(self, s: str) -> bool:
        palindrome = sub(r'[^A-Za-z0-9]*', '', s).lower()
        i = 0
        j = len(palindrome) - 1
        while (i < j):
            if (palindrome[i] != palindrome[j]):
                return False
            i += 1
            j -= 1
        return True


print(Solution().isPalindrome('socorram me subi no onibus em marrocos'))
# print(Solution().isPalindrome("A man, a plan, a canal: Panama"))
