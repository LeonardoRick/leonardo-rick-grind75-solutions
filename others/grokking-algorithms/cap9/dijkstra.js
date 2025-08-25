// https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1

class Solution {
    // Returns shortest distances from src to all other vertices
    static dijkstra(V, edges, src) {
        const visited = new Set();
        const distances = [];

        // build graph
        const graph = {}
        for (const edge of edges) {
            const [from, to, distance] = edge;
            if (!graph[from]) {
                graph[from] = []
            }
            if (!graph[to]) {
                graph[to] = []
            }
            graph[from].push({to: to, distance});
            graph[to].push({to: from, distance});
        }

        // init distances array
        for (let i = 0; i < V; i++) {
            distances[i] = Infinity;
        }
        distances[src] = 0;

        // apply the dijsktra algorithm
        while (visited.size < V) {
            // pick the unvisited node with minimum value as distance
            // (in the first example this is going to be the src)
            let unvisited = null;
            let best = Infinity;

            for (const node of Object.keys(graph)) {
                if (!visited.has(node) && distances[node] < best) {
                    best = distances[node];
                    unvisited = node;
                }
            }

            if (!unvisited) break;
            visited.add(unvisited);

            // update the adjacent unvisited edges this unvisited node
            for (const { to, distance} of graph[unvisited]) {
                if (!visited.has(to) && distances[to] > distances[unvisited] + distance) {
                    distances[to] = distances[unvisited] + distance;
                }
            }


        }
        return distances;
    }
}


console.log(Solution.dijkstra(3, [[0, 1, 1], [1, 2, 3], [0, 2, 6]], 2)); // [4, 3, 0]
console.log(Solution.dijkstra(5, [[0, 1, 4], [0, 2, 8], [1, 4, 6], [2, 3, 2], [3, 4, 10]], 0)); // [0, 4, 8, 10, 10]






