function cropCenterPart(arr) {
    var rows = 4;
    var cols = 4;
    var column = [];
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (i == 0 || j == 0 || i == 3 || j == 3){
                continue;
            } else{
                column.push(arr[i][j]);
            }
        }
    }
    return column
}
var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
console.log(cropCenterPart(arr));
