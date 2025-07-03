// class PersonNode {

//     constructor(name){

//         this.name = name;
//         this.adjacent = [];
//     }
// }

// const homer = new PersonNode('Homer Simpson')
// const marge = new PersonNode('Marge Simpson')
// homer.adjacent.push(marge)
// marge.adjacent.push(homer)

// console.log(homer)
// console.log(marge)

class PersonNode {

    constructor(name, adjacent = new Set()){

        this.name = name;
        this.adjacent = adjacent;
    }
}

class FriendGraph {

        constructor(){

        this.nodes = new Set();
    }

    addPerson(node){

        this.nodes.add(node)
    }

    addPeople(peopleList){

        for (let node of peopleList){
             this.addPerson(node)
        }
    }

    setFriends(person1, person2){

        person1.adjacent.add(person2)
        person2.adjacent.add(person1)
    }

    areConnectedBFS(person1, person2){

        // we want to go from person1 to person2
        // here we are starting with all connections to person1
        let toVisitQueue = [person1];

        //this will store what we have seen
        let seen = new Set(toVisitQueue)

        // this loop runs as long as there is something to visit
        while (toVisitQueue.length){
            // shifiting off of the queue
            let currPerson = toVisitQueue.shift()
            console.log ("BFS Visiting:", currPerson.name)
            
            //then we check if this is the thing we're looking for
            if(currPerson === person2) return true

            for(let neighbor of currPerson.adjacent){

                // this mnakes sure we don't add nodes that are already in toVisitQueue
                // this is accomplished by checking if something is NOT in seen
                //if it's not, run the code
                if (!seen.has(neighbor)){

                toVisitQueue.push(neighbor)
                // this marks nodes that have been added to the toVisitQueue as seen
                seen.add(neighbor);
                }
            }
        }

        return false
    }

    areConnectedDFS(person1, person2){

        // we want to go from person1 to person2
        // here we are starting with all connections to person1
        let toVisitStack = [person1];

        //this will store what we have seen
        let seen = new Set(toVisitStack)

        // this loop runs as long as there is something to visit
        while (toVisitStack.length){
 
            console.log(toVisitStack.map(node => node.name))

            // popping off of the stack
            let currPerson = toVisitStack.pop()
            console.log ("DFS Visiting:", currPerson.name)
            
            //then we check if this is the thing we're looking for
            if(currPerson === person2) return true

            for(let neighbor of currPerson.adjacent){

                // this mnakes sure we don't add nodes that are already in toVisitStack
                // this is accomplished by checking if something is NOT in seen
                //if it's not, run the code
                if (!seen.has(neighbor)){

                toVisitStack.push(neighbor)
                // this marks nodes that have been added to the toVisitStack as seen
                seen.add(neighbor);
                }
            }
        }

        return false
    }

    // this method accepts 3 possible parameters
    // this will help us keep track of what we have seen
    DFSareConnectedRecursive(person1, person2, seen = new Set([person1])){

        console.log(`Calling: ${person1.name} -> looking for ${person2.name}`);

        // this will tell us whether or not there is a connection between nodes
        if(person1 === person2) return true;

        // here we will recursively call this.DFSareConnectedRecursive
        for(let neighbor of person1.adjacent){

            // if we HAVE NOT found the value we're looking for at the neighbor we're currently at
            if(!seen.has(neighbor)){

                // if we HAVE found the value at the current neighbor
                seen.add(neighbor);

                // here we are passing in the neighbor, instead of person1
                if(this.DFSareConnectedRecursive(neighbor, person2, seen)){
                    
                    // if person1 === person2 
                    return true
                }
            }
        }

        // if we make it all the way through the loop and person1 === person2 is never true
        return false
    }
}



// const homer = new PersonNode('Homer Simpson')
// const marge = new PersonNode('Marge Simpson')
// const maggie = new PersonNode('Maggie Simpson')
// const lisa = new PersonNode('Lisa Simpson')
// const grampa = new PersonNode('Grampa Simpson')
// const bart = new PersonNode('Bart Simpson')

// const thelma = new PersonNode("Thelma")
// const selma = new PersonNode("Selma")
// const dog = new PersonNode ("Dog")
// const moe = new PersonNode('Moe')
// const barney = new PersonNode('Barney')
// const lenny = new PersonNode('Lenny')

// // here we are creating an instance of a FriendGraph
// const friends = new FriendGraph();
// //here we are adding a list of nodes to friends using the addPeople method we created
// friends.addPeople([homer, marge, maggie, lisa, bart, grampa])
// friends.addPeople([moe, barney, lenny, thelma, selma, dog])

// friends.setFriends(homer, marge)
// friends.setFriends(homer, lisa)
// friends.setFriends(homer, maggie)
// friends.setFriends(marge, maggie)
// friends.setFriends(maggie, lisa)
// friends.setFriends(lisa, grampa)
// friends.setFriends(moe, barney)
// friends.setFriends(barney, lenny)
// friends.setFriends(bart, lisa)
// friends.setFriends(bart, marge)
// friends.setFriends(bart, maggie)
// friends.setFriends(moe, dog)
// friends.setFriends(moe, thelma)
// friends.setFriends(thelma, dog)
// friends.setFriends(thelma, selma)
// friends.setFriends(selma, dog)
// friends.setFriends(lenny, dog)
// friends.setFriends(barney, dog)
// friends.setFriends(selma, lenny)
// friends.setFriends(thelma, barney)

// console.log(friends.DFSareConnectedRecursive(homer, marge))
// console.log(friends.DFSareConnectedRecursive(homer, moe))
// console.log(friends.DFSareConnectedRecursive(homer, lisa))
// console.log(friends.DFSareConnectedRecursive(homer, barney))

// console.log(friends)

// console.log(friends.areConnectedBFS(homer, moe))
// console.log(friends.areConnectedBFS(homer, marge))

// console.log(friends.areConnectedDFS(homer, moe))
// console.log(friends.areConnectedDFS(homer, marge))

// homer.adjacent.add(marge);
// homer.adjacent.add(maggie)
// homer.adjacent.add(lisa)
// marge.adjacent.add(homer)
// marge.adjacent.add(maggie)
// maggie.adjacent.add(homer)
// maggie.adjacent.add(lisa)
// maggie.adjacent.add(marge)
// lisa.adjacent.add(maggie)
// lisa.adjacent.add(homer)
// lisa.adjacent.add(grampa)
// grampa.adjacent.add(lisa)

// console.log(marge)
// console.log(homer)

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['PHX', 'HEL'],
    ['PHX', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
] 

const adjacencyList = new Map();

function addNode(airport){

    adjacencyList.set(airport, []);
}

function addEdge(origin, destination){

    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create Graph

airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

console.log(adjacencyList)

function bfs(start) {

    // here we use a set because it does not allow duplicate values
    const visited = new Set();

    // queue is FIFO structure, so this ensures that all nodes at one level are searched before moiving to next level
    const queue = [start];

    // mark the start of visited
    visited.add(start)

    // main loop that runs as long as there are airports in the queue
    while (queue.length > 0) {

        // simulates moving to next element in line by removing the first element from the array
        const airport = queue.shift();

        // this looks up the list of connected airports
        const destinations = adjacencyList.get(airport)

        // loops through each airport connected to the current airport
        for (const destination of destinations) {

                // checks if destination is strictly equal to BKK
                if (destination === 'BKK') {

                    console.log('Found it!');
                    return;
                }

                //this logic checks if our destination has been visited
                if (!visited.has(destination)) {
                    // if the destination HAS been visited, it's added to the visited set
                    visited.add(destination)
                    // this ensures that items that HAVE been visited are not put in the queue
                    queue.push(destination);
                }
        }
    }
}

console.log(bfs('BKK'))

function dfs(start, visited = new Set()) {

    console.log(start)

    visited.add(start);

    const destinations = adjacencyList.get(start)

    for (const destination of destinations) {

        if (destination === 'BKK') {

            console.log (`DFS found Bangkok in steps`)
            return;
        }

        if (!visited.has(destination)) {
            
            dfs(destination, visited);
        }
    }

}