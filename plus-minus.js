function plusMinus(arr) {
    // Write your code here
    let negNum = 0
    let posNum = 0 
    let zero = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            posNum ++
        } else if (arr[i] < 0) {
            negNum ++
        } else {
            zero ++
        }
    }
    const posResult = (posNum/arr.length).toFixed(6)
    const negResult = (negNum/arr.length).toFixed(6)
    const zeroResult = (zero/arr.length).toFixed(6) 
    return console.log(`${posResult}\n${negResult}\n${zeroResult}` )
}