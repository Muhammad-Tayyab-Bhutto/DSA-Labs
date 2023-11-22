function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    let need = [];
    let count = 0
    let i = 0;
    while (i < capacity.length) {
        need[i] = capacity[i] - rocks[i]
        i++;
    }
    need.sort((a,b) => a - b)
    
    for (i = 0; i < need.length;i++) {        
        if (need[i] > additionalRocks) {
            break
        }
        additionalRocks = additionalRocks - need[i]
        need[i] = 0;
    }

    for (let char of need) {
        if (char === 0) {
            count++;
        }
    }
    
    return count
};