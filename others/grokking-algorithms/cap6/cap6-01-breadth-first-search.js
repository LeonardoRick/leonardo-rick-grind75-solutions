// implement a breadth first search to find closest friend that sells mangoes
// onenote:https://d.docs.live.net/9c46bfb4bfc3c49a/Documentos/Cadernos%20One%20Note/Develop/Books.one#Grokking%20algorithms&section-id={3E71B070-47FD-A548-A5F1-50BE6A6838F9}&page-id={EEF29FC7-6623-804F-BE56-BA1473A0F794}&object-id={78CF0378-B448-FA4E-82A2-CF703324F8E2}&10

const graph = {}
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

function search(name) {

    // ? obs: I commented this part because I remembered about it later and I don't know if it was in the original implementation or
    // ? not, but if 'you' is the mango seller we are never returning true so i added a root verification
    if (isFriendSeller(name)) {
        return true;
    }
    // we assume that if we are starting the search into someone's name, this person is not the one that sells mangoes
    const searched = new Set(name);
    const searchQueue = graph[name];
    while (searchQueue.length) {
        const friend = searchQueue.shift();
        console.log(friend);
        if (!searched.has(friend)) {
            if (isFriendSeller(friend)) {
                console.log(friend, 'is the closest mango seller');
                return true;
            }
            searchQueue.push(...graph[friend]);
            searched.add(friend);
        }

    }
    return false;
}

/**
 * Change this function to check another graph path. Here we are presenting a very simple example
 * that tells that once we find someone that the name ends with the letter m, this person sells mangoes
 * @param {string} name
 * @returns {boolean}
 */
function isFriendSeller(name) {
    return name[name.length -1] === 'm';
}

// function isFriendSeller(name) {
//     return name === 'you';
// }

console.log(search('you'));
