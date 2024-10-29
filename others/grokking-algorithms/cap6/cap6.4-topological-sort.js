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

export function createValidList(graph) {
    const visited = new Set();
    const stack = [];

    function dfs(node) {
        if (visited.has(node)) return;
        visited.add(node);
        for (const neighbor of graph[node]) {
            dfs(neighbor);
        }
        stack.push(node);
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    return stack.reverse();
}


console.log(createValidList(graph));

// -- dfs(node) node = 'wake up'
// -- visited = ['wake up']
// -- stack = []
// -- neighbor = 'exercise'

// -- -- -- dfs(node) node = 'exercise'
// -- -- -- visited = ['wake up', 'exercise']
// -- -- -- stack = []
// -- -- -- neighbor = 'shower'

// -- -- -- -- -- dfs(node) node = 'shower'
// -- -- -- -- -- visited = ['wake up', 'exercise', 'shower']
// -- -- -- -- -- stack = []
// -- -- -- -- -- neighbor = 'get dressed'

// -- -- -- -- -- -- -- dfs(node) node = 'get dressed'
// -- -- -- -- -- -- -- visited = ['wake up', 'exercise', 'shower', 'get dressed']
// -- -- -- -- -- -- -- stack = ['get dressed']
// -- -- -- -- -- -- -- neighbor = undefined

// -- -- -- -- -- dfs(node) node = 'shower'
// -- -- -- -- -- visited = ['wake up', 'exercise', 'shower', 'get dressed']
// -- -- -- -- -- stack = ['get dressed', 'shower']
// -- -- -- -- -- neighbor = undefined

// -- -- -- dfs(node) node = 'exercise'
// -- -- -- visited = ['wake up', 'exercise', 'shower', 'get dressed']
// -- -- -- stack = ['get dressed', 'shower', 'exercise']
// -- -- -- neighbor = undefined

// -- dfs(node) node = 'wake up'
// -- visited = ['wake up', 'exercise', 'shower', 'get dressed']
// -- stack = ['get dressed', 'shower', 'exercise']
// -- neighbor = 'brush teeth'

// -- -- -- dfs(node) node = 'brush teeth'
// -- -- -- visited = ['wake up', 'exercise', 'shower', 'get dressed', 'brush teeth']
// -- -- -- stack = ['get dressed', 'shower', 'exercise']
// -- -- -- neighbor = 'eat breakfast'

// -- -- -- -- -- dfs(node) node = 'eat breakfast'
// -- -- -- -- -- visited = ['wake up', 'exercise', 'shower', 'get dressed', 'brush teeth', 'eat breakfast']
// -- -- -- -- -- stack = ['get dressed', 'shower', 'exercise', 'eat breakfast']
// -- -- -- -- -- neighbor = undefined

// -- -- -- dfs(node) node = 'brush teeth'
// -- -- -- visited = ['wake up', 'exercise', 'shower', 'get dressed', 'brush teeth', 'eat breakfast']
// -- -- -- stack = ['get dressed', 'shower', 'exercise', 'eat breakfast', 'brush teeth']
// -- -- -- neighbor = undefined

// -- dfs(node) node = 'wake up'
// -- visited = ['wake up', 'exercise', 'shower', 'get dressed', 'brush teeth', 'eat breakfast']
// -- stack = ['get dressed', 'shower', 'exercise', 'eat breakfast', 'brush teeth']
// -- neighbor = 'pack lunch'

// -- -- -- dfs(node) node = 'pack lunch'
// -- -- -- visited = ['wake up', 'exercise', 'shower', 'get dressed', 'brush teeth', 'eat breakfast', 'pack lunch']
// -- -- -- stack = ['get dressed', 'shower', 'exercise', 'eat breakfast', 'brush teeth', 'pack lunch']
// -- -- -- neighbor = undefined

// -- dfs(node) node = 'wake up'
// -- visited = ['wake up', 'exercise', 'shower', 'get dressed', 'brush teeth', 'eat breakfast', 'pack lunch']
// -- stack = ['get dressed', 'shower', 'exercise', 'eat breakfast', 'brush teeth', 'pack lunch', 'wake up']
// -- neighbor = undefined

// check all the roots but all already visited
// return ['wake up', 'pack lunch', 'brush teeth', 'eat breakfast', 'exercise', 'shower', 'get dressed']
