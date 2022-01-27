export function checkPalindrome(str){
  if(str!=null){
    for(let i=0;i<str.length;i++){
      if(str.charAt(i)==str.charAt(i).toUpperCase()){
        str=str.charAt(i).toLowerCase();
      }
    }
    str=str.replace(/[.*+?!,]/g,'');
    const reverseStr=str.split('').reverse().join('').replace(/\s/g, '');
    str=str.replace(/\s/g, '');
    return reverseStr==str?'palindrome':'not palindrome';
  }
  else return 'palindrome';
}