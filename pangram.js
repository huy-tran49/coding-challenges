function pangrams(s) {
    // Write your code here
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
    let result = ''
    for  (let i =0; i < alphabet.length; i++) {
        if (s.toLowerCase().includes(alphabet[i]) === false) {
            return result = 'not pangram'
        } else {
            result = 'pangram'
        }  
    }
    return result
}