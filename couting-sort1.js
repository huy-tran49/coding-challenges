function countingSort(arr) {
    // Write your code here
    let i = 0
    const result = new Array(100)
    result.fill(0)
    while (i < arr.length) {
        result[arr[i]]+= 1
        i++
    }
    return result
}