// based on the provided graph of morning rountine
// wake up <-- shower
// wake up <-- brush teeth <-- eat breakfast

// It tells you that I can’t eat breakfast until I’ve brushed my teeth. So “eat
// breakfast” depends on “brush teeth”.
// On the other hand, showering doesn’t depend on brushing my teeth,
// because I can shower before I brush my teeth. From this graph, you can
// make a list of the order in which I need to do my morning routine:

// 1. Wake up.
// 2. Shower.
// 3. Brush teeth.
// 4. Eat breakfast.

// Note that “shower” can be moved around, so this list is also valid:

// 1. Wake up.
// 2. Brush teeth.
// 3. Shower.
// 4. Eat breakfast.

// 6.3 For a given list list, mark whether each one is valid or invalid.

// exmaple A)
// list: ['wake up', 'shower', 'eat breakfast', 'brush teeth'] // invlid (you gotta brush teeth before eating breakfast)

// exmaple B)
// list: ['wake up', 'brush teeth', 'eat brekfast', 'shower'] // valid

// exmaple C)
// list: ['shower', 'wake up', 'brush teeth', 'eat breakfast'] // invalid (you have to wake up before everything)

const graph = new Map();

graph.set('wake up', null);
graph.set('shower', 'wake up');
graph.set('brush teeth', 'wake up');
graph.set('eat breakfast', 'brush teeth');

function isValidRoutine(routine) {
    const checked = new Set();
    for (const action of routine) {
        const dependsOn = graph.get(action);
        if (dependsOn && !checked.has(dependsOn)) {
            return false;
        }
        checked.add(action);
    }
    return true;
}
console.log(isValidRoutine(['wake up', 'shower', 'eat breakfast', 'brush teeth'])); // false (invalid)
console.log(isValidRoutine(['wake up', 'brush teeth', 'eat breakfast', 'shower'])); // true (valid)
console.log(isValidRoutine(['shower', 'wake up', 'brush teeth', 'eat breakfast'])); // false (invalid)

