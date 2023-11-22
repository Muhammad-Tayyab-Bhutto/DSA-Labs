function getOrder(tasks: number[][]): number[] {
    let n = tasks.length;
    tasks = tasks.map((t, i) => [...t, i]);
    tasks.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[2] - b[2];
        }
        return a[0] - b[0];
    }); // sort by queue time
    let q = [];
    let time = tasks[0][0];
    let ans = [];
    let enqIndex = 0;
    while (ans.length < n) {
        if (q.length === 0 && time < tasks[enqIndex][0]) {
            time = tasks[enqIndex][0];
        }
        // enqueue
        let curSize = q.length;
        while (enqIndex < tasks.length && tasks[enqIndex][0] <= time) {
            q.push(tasks[enqIndex]);
            enqIndex++;
        }
        // sort when needed
        if (curSize < q.length) // hack way to fix TLE to mock PQ
        {
            if (q.length > 0) {
                q.sort((a, b) => {
                    if (a[1] === b[1]) {
                        return a[2] - b[2];
                    }
                    return a[1] - b[1];
                });
            }
        }
        // execute first task
        let t = q.shift();
        ans.push(t[2]);
        time += t[1];
    }
    return ans;
};