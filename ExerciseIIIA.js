function extractBoundaries(arr) {
    var cols = 4;        // this is for telling column
    var rows = 4;        // this is for telling rows how much rows we have in our arr
    var column = [];
    for (let i = 0; i < rows; i++) { 
        for (let j = 0; j < cols; j++) { 
            if (i == 0 || j == 0 || i == 3 || j == 3) 
                column.push(arr[i][j]); 

            else
                continue;
        } 
 
    }
    return column;
}

var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
console.log(extractBoundaries(arr));