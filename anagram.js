function anagram(s,t){
    if(s.lenght!==t.lenght){
        return false
    }
    return s.split('').sort().join('')===t.split('').sort().join('')
}
console.log(anagram('heart','earth'))

