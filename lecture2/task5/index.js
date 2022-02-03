export let reverseWords=function(str){
  const words=str.split(' ');
  const strReversed= words.map(word=>word.split('').reverse().join(''));
  return strReversed.join(' ');
};

