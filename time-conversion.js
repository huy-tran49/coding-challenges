function timeConversion(s) {
    // Write your code here
    let hour = s.slice(0,2)
    let min = s.slice(3,5)
    let sec = s.slice(6,8)
    let pm = s.slice(8,10)
    let hours
    if (pm == 'PM') {
        hours = parseInt(hour) + 12
    }
    const time = `${hours}:${min}:${sec}`
    return time
}