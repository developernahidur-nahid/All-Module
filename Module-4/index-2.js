// --- User Setup ---
const createUsers = (start, end) => {
    const users = [];
    for (let i = start; i <= end; i++) {
        users.push({ id: i });
    }
    return users;
};

const usersA = createUsers(1, 5000);
const usersB = createUsers(2500, 7500);

// --- Method 1: Nested Loop (O(N * M)) ---
const commonFriendsSlow = (listA, listB) => {
    const startTime = performance.now();
    const commonFriends = [];
    for (const userA of listA) {
        for (const userB of listB) {
            if (userA.id === userB.id) {
                commonFriends.push(userA);
                break;
            }
        }
    }
    const endTime = performance.now();
    return {
        count: commonFriends.length,
        timeTookToFinish: endTime - startTime,
    };
};

// --- Method 2: Set Optimization (O(N + M)) ---
const commonFriendsFast = (listA, listB) => {
    const startTime = performance.now();
    const commonFriends = [];
    const idListA = new Set(listA.map(user => user.id));
    for (const userB of listB) {
        if (idListA.has(userB.id)) {
            commonFriends.push(userB);
        }
    }
    const endTime = performance.now();
    return {
        count: commonFriends.length,
        timeTookToFinish: endTime - startTime,
    };
};

// --- Results ---
const slowResult = commonFriendsSlow(usersA, usersB);
console.log("Nested Loop (Slow):");
console.log(`Count: ${slowResult.count}, Time: ${slowResult.timeTookToFinish.toFixed(3)} ms, Complexity: O(N * M)`);

const fastResult = commonFriendsFast(usersA, usersB);
console.log("\nSet Optimization (Fast):");
console.log(`Count: ${fastResult.count}, Time: ${fastResult.timeTookToFinish.toFixed(3)} ms, Complexity: O(N + M)`);
//output
/*
Count: 2501, Time: 20.390 ms, Complexity: O(N * M)

Set Optimization (Fast):
Count: 2501, Time: 0.754 ms, Complexity: O(N + M)
*/