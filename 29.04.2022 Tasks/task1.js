class Node
{   
    constructor(key)
    {
        this.key=key;
        this.left=this.right=null;
    }
}
 
/* Function to find sum of all the elements*/
function addBT(root)
{
    if (root == null)
        return 0;
    return (root.key + addBT(root.left) +
                       addBT(root.right));
}
 
// Driver Code
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
 
let sum = addBT(root);
console.log("Sum of all the elements is: " + sum);