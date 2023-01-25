// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// this is a very uncommon solution that I found by trying and re-trying. When I frist developed this I was not aware that a
// BST is sorted in a sence that every left node is lower than its parent and lower than any right value. Knowing that the solution
// can be a lot simpler.
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let lca;
    const pSet = new Set([]);
    let pList = [];

    function search(node, x, final = false) {
        if (final) {
            if (pSet.has(node)) {
                lca = node;
            }
        } else {
            pSet.add(node);
        }

        if (node.val === x) {
            return true;
        }

        let found = false;
        if (node.left) {
            found = search(node.left, x, final);
        }

        if (!found && node.right) {
            found = search(node.right, x, final);
        }

        if (!final && !found) {
            pSet.delete(node);
        }

        if (final && !found && pSet.has(node)) {
            lca = pList[pList.indexOf(lca) - 1];
        }
        return found;
    }

    search(root, p.val);
    pList = [...pSet];
    search(root, q.val, true);

    return lca;
};

// search for p creating a set pSet of every node read previously
// search for q storing the last reached item on pL on lca
// once q is found, return lca

const tree1_node2 = new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5)));
const tree1_node8 = new TreeNode(8, new TreeNode(7), new TreeNode(9));
const tree1 = new TreeNode(6, tree1_node8, tree1_node2);
console.log(lowestCommonAncestor(tree1, tree1_node8, tree1_node2));

const tree2_node4 = new TreeNode(4, new TreeNode(3), new TreeNode(5));
const tree2_node2 = new TreeNode(2, new TreeNode(0), tree2_node4);
const tree2_node8 = new TreeNode(8, new TreeNode(7), new TreeNode(9));
const tree2 = new TreeNode(6, tree2_node2, tree2_node8);
// console.log(lowestCommonAncestor(tree2, tree2_node2, tree2_node4));

// console.log(lowestCommonAncestor(new TreeNode(4, new TreeNode(3), new TreeNode(5)), 3, 5));
// console.log(lowestCommonAncestor(new TreeNode(2, new TreeNode(1)), 2, 1));
// console.log(lowestCommonAncestor(new TreeNode(6, n)));
// [6,2,8,0,4,7,9,null,null,3,5]
