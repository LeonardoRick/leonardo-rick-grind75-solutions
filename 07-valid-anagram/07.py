# https://leetcode.com/problems/valid-anagram/
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)):
            return False

        countS = {}
        countT = {}

        for i in range(len(s)):
            if (i < len(s)):
                if s[i] in countS:
                    countS[s[i]] += 1
                else:
                    countS[s[i]] = 1

            if (i < len(t)):
                if t[i] in countT:
                    countT[t[i]] += 1
                else:
                    countT[t[i]] = 1

        return countS == countT


print(Solution().isAnagram('rat', 'car'))
print(Solution().isAnagram('a', 'ab'))
print(Solution().isAnagram('asdfiasdoansldkfa', 'sadaiasfdanfosdkl'))
