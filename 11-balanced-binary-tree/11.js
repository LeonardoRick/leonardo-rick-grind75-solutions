class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    let count = {
        left: 0,
        right: 0,
    };
    function search(root, direction) {
        if (root && root[direction]) {
            count[direction]++;
            search(root[direction], direction);
        }
    }
    search(root, 'right');
    search(root, 'left');
    return Math.abs(count.right - count.left) < 2;
};

// console.log(
//     isBalanced(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))
// );
// console.log(
//     isBalanced(
//         new TreeNode(
//             1,
//             new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)),
//             new TreeNode(2)
//         )
//     )
// );
// [1,2,3,4,5,6,null,8]
// console.log()
