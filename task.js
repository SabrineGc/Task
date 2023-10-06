const findLongest=(string)=>{
    const words=string.split(' ')

    let str ="";
    let max=0;
    let vowels=0;

    for(const word  of words ){
        word.replace(/[^a-zA-Z]/g, '');
        const y=(x.match(/[aieouAEIOU]/g)|| [].length)
        if(x.length > max || (x.length === max && vowels > max)){
            max=x.length;
            vowels=y;
            str=x
        }
    
    }
    return str

}
console.log(findLongest("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"))
