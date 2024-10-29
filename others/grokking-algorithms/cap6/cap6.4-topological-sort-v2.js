// Here’s a larger graph. Make a valid list for this graph.

// •	Wake Up → Exercise
// •	Wake Up → Brush Teeth
// •	Wake Up → Pack Lunch
// •	Exercise → Shower
// •	Shower → Get Dressed
// •	Brush Teeth → Eat Breakfast


// You could say that this list is sorted, in a way. If task A depends on
// task B, task A shows up later in the list. This is called a topological sort,
// and it’s a way to make an ordered list out of a graph. Suppose you’re
// planning a wedding and have a large graph full of tasks to do—and
// you’re not sure where to start. You could topologically sort the graph
// and get a list of tasks to do, in order.

const graph = {
    "Wake Up": ["Exercise", "Brush Teeth", "Pack Lunch"],
    "Exercise": ["Shower"],
    "Shower": ["Get Dressed"],
    "Eat Breakfast": [],
    "Pack Lunch": [],
    "Brush Teeth": ["Eat Breakfast"],
    "Get Dressed": [],
};

function topologicalSort(root) {
    const visited = new Set();
    const stack = [];
    function dfs(node) {
        visited.add(node);
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
        stack.push(node);
    }

    dfs(root);
    return stack.reverse();
}

console.log(topologicalSort('Wake Up'));
