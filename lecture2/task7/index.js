export function invertColor(color){
    const strToLowerCase = color.toUpperCase();
    const arrayColor=strToLowerCase.split('')
    let number=[]
    const letter=['A','B','C','D','E','F']
    for(let i=0;i<10;i++){
        number.push(i)
    }
    const alphabetHex=number.concat(letter)
    let invertedColor=['#']
    const reverseHex=alphabetHex.slice().reverse()
    for (let i=0;i<arrayColor.length;i++){
        for(let j=0;j<alphabetHex.length;j++){       
            if( arrayColor[i]==alphabetHex[j]){                   
                invertedColor.push(reverseHex[j])
            }
        } 
    }
    return invertedColor.join('').toLowerCase()
}


