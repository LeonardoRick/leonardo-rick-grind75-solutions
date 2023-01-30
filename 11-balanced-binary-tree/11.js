// https://leetcode.com/problems/balanced-binary-tree/
import { TreeNode } from './common/three-node.js';

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    let max = 0;
    function search(root, depth = 0) {
        let leftDepth = depth,
            rightDepth = depth;

        if (root) {
            if (!root.left && !root.right) {
                return depth;
            }

            // if (root.left) {
            leftDepth = search(root.left, depth + 1);
            // }

            // if (root.right) {
            rightDepth = search(root.right, depth + 1);
            // }

            max = Math.max(Math.abs(leftDepth - rightDepth), max);
            return Math.max(leftDepth, rightDepth);
        }
        return 0;
    }
    search(root);
    return max < 2;
};

//                1
//        2                  3
//    4      5            6     null
// 8
// console.log(
//     isBalanced(
//         new TreeNode(
//             1,
//             new TreeNode(2, new TreeNode(4, new TreeNode(8)), new TreeNode(5)),
//             new TreeNode(3, new TreeNode(6))
//         )
//     )
// ); // false

// console.log(
//     isBalanced(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))
// ); // true
// console.log(
//     isBalanced(
//         new TreeNode(
//             1,
//             new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)),
//             new TreeNode(2)
//         )
//     )
// ); // false

//                1
//        2                  3
//    4      5            6     null
//8

// 1
//    2
//      3

//                           1
//            2                             2
//      3            null            null                3
// 4        null                                null            4
