export function stringMerge(word1,word2,letter){
    let index1=word1.indexOf(letter);
    let index2=word2.indexOf(letter);
    return word1.slice(0,index1)+word2.slice(index2);

}