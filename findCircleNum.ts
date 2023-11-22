/*=================================================================================
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
===================================================================================================*/
function findCircleNum(isConnected: number[][]): number{
    const parent = Array(isConnected.length).fill(-1);
    let groups = isConnected.length;

    for (let node = 0; node < isConnected.length; node++) {
        for (let connection = node + 1; connection < isConnected.length; connection++) {
            isConnected[node][connection] && union(node, connection);
        }
    }

    return groups;

    function find(node: any) {
        if (parent[node] === -1) return node;
        parent[node] = find(parent[node]);
        return parent[node];
    }

    function union(node1: any, node2: any) {
        const parent1 = find(node1), parent2 = find(node2);
        if (parent1 !== parent2) parent[parent2] = parent1, groups--;
    }
}