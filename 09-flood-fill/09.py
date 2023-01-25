from typing import List

class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        startingColor = image[sr][sc]
        if startingColor == color:
            return image

        def coloring(image, sr, sc):
            if sr > -1 and sr < len(image) and sc > -1 and sc < len(image[0]) and image[sr][sc] == startingColor:
                image[sr][sc] = color
                coloring(image, sr + 1, sc)
                coloring(image, sr - 1, sc)
                coloring(image, sr, sc + 1)
                coloring(image, sr, sc - 1)
            return image
        return coloring(image, sr, sc)


# print(Solution().floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))
# print(Solution().floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0))
# print(Solution().floodFill([[0, 0, 0], [0, 0, 1]], 0, 0, 2))
# print(Solution().floodFill([[0, 0, 0], [0, 0, 0]], 1, 0, 2))
# print(Solution().floodFill([[0, 1, 0], [0, 0, 0]], 0, 0, 0))


