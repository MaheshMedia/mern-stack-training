class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
function LCA(root, n1, n2)
{
    if (root == null)
    {
        return root;
    }
    if (root.value == n1 || root.value == n2)
    {
        return root;
    }
     
    var left = LCA(root.left, n1, n2);
    var right = LCA(root.right, n1, n2);
     
    if (left != null && right != null)
    {
        return root;
    }
    if (left == null && right == null)
    {
        return null;
    }
     
    if (left != null)
    {
        return LCA(root.left, n1, n2);
    }
    else
    {
        return LCA(root.right, n1, n2);
    }
}
 
function findLevel(root, a, level)
{
    if (root == null)
    {
        return -1;
    }
    if (root.value == a)
    {
        return level;
    }
    var left = findLevel(root.left, a, level + 1);
     
    if (left == -1)
    {
        return findLevel(root.right, a, level + 1);
    }
    return left;
}
 
function findDistance(root, a, b)
{
    var lca = LCA(root, a, b);
    var d1 = findLevel(lca, a, 0);
    var d2 = findLevel(lca, b, 0);
     
    return d1 + d2;
}
var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
 
console.log("Dist(4, 5) = " +findDistance(root, 4, 5)  );
console.log("Dist(4, 6) = " +findDistance(root, 4, 6)  );
console.log("Dist(3, 4) = " +findDistance(root, 3, 4)  );
console.log("Dist(2, 4) = " +findDistance(root, 2, 4)  );
console.log("Dist(8, 5) = " +findDistance(root, 8, 5)  );