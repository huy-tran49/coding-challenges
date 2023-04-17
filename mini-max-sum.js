function miniMaxSum(arr) {
    // Write your code here
    const sortedArr = arr.sort((a, b) => a - b)
    const minArr = sortedArr.slice(0, 4)
    const maxArr = sortedArr.slice(1)
    const minSum = minArr.reduce((a, b) => a + b)
    const maxSum = maxArr.reduce((a, b) => a + b)
    return console.log(`${minSum} ${maxSum}`)
}