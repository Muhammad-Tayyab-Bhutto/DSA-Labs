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
 * @return {number[][]}
 */
 const verticalTraversal = function(root) {
    const coordArr = []; // [x, y, num]
    
    transNodes(root, coordArr, 0, 0);
    
    coordArr.sort((a,b) => {
        if(a[0] === b[0] && a[1] === b[1]) return a[2] - b[2];
        if(a[0] === b[0]) return b[1] - a[1];
        return a[0] - b[0];
    });
    
    const res = [[coordArr[0][2]]];
    
    for(let i = 1; i < coordArr.length; i++) {
        const lastIndex = res.length - 1;
        if(coordArr[i][0] === coordArr[i - 1][0]) res[lastIndex].push(coordArr[i][2]);
        else res.push([coordArr[i][2]]);
    }
    
    return res;
};

const transNodes = (node,coordArr, x, y) => {
    if(!node) return;
    coordArr.push([x, y, node.val]);
    transNodes(node.left, coordArr, x - 1, y - 1);
    transNodes(node.right, coordArr, x + 1, y - 1);
}