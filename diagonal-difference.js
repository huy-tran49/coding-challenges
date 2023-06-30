function diagonalDifference(arr) {
    // Write your code here
    let result
    let i = 0
    let k = 0
    let j = arr.length - 1
    let downSlope = 0
    let upSlope = 0
    while (i < arr.length) {
        downSlope += arr[i][i]
        i++
    } 
    
    while (k < arr.length) {
        upSlope += arr[k][j]
        k++
        j--
    }
    return Math.abs(downSlope-upSlope)
}