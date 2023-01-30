// https://leetcode.com/problems/balanced-binary-tree/

// The same as v1 but with a flag to stop searching when found that its instable
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    let max = 0;
    let unstable = false;
    function search(root, depth = 0) {
        if (unstable) {
            return -1;
        }

        let leftDepth = depth,
            rightDepth = depth;
        if (root) {
            if (!root.left && !root.right) {
                return depth;
            }

            if (root.left) {
                leftDepth = search(root.left, depth + 1);
            }

            if (root.right) {
                rightDepth = search(root.right, depth + 1);
            }
            // console.log(root.val, ':', leftDepth, rightDepth, '| depth:', depth, 'max:', max);
            max = Math.max(Math.abs(leftDepth - rightDepth), max);
            unstable = max > 1;
            return Math.max(leftDepth, rightDepth);
        }
        return 0;
    }
    search(root);
    return !unstable;
};
