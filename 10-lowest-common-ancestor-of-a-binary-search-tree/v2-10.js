var lowestCommonAncestor = function (root, p, q) {
    // if current root is bigger than p and q
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    // if current root is lower than p and q
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    // the value of root node is greater or equal to p, and less or equal to q or vice versa:
    // (root.val >= p.val && root.val =< q.val) || (root.val <= p.val && root.val >= q.val)
    return root;
};
