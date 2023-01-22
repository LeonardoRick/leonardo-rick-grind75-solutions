// https://leetcode.com/problems/invert-binary-tree/
class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
    let aux;
    if (root) {
        if (root.left) {
            root.left = invertTree(root.left);
        }

        if (root.right) {
            root.right = invertTree(root.right);
        }
        aux = root.left;
        root.left = root.right;
        root.right = aux;
    }
    return root;
};

// if root has a left , call recursively to root.left
// if root has a right, call recursively to root.right
// execute inversion and return node
console.log(
    invertTree(
        new TreeNode(
            4,
            new TreeNode(7, new TreeNode(6), new TreeNode(9)),
            new TreeNode(2, new TreeNode(1), new TreeNode(3))
        )
    )
);

//           4
//      2          7
//    1    3     6  9
//   1 2 4 7   9 2 0 1
