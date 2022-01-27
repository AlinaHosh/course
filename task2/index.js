export function stringMerge(word1,word2,letter){
    const index1=word1.indexOf(letter);
    const index2=word2.indexOf(letter);
    if(index1!=-1 && index2!=-1){
        return word1.slice(0,index1)+word2.slice(index2);
    }
    else 
    return 'no letter in word';

}