/**
 * @param {string} s
 * @return {string}
 * TC : O(n)
 * SP : O(1) - we are using the extra space to store the reverse string, however we do not consider the returned string
 */
var reverseWords = function(s) {

    let  N = s.length;
    let result = "";
    let prevSpaceIndex = 0;
    for(let startIndex = 0; startIndex < N; startIndex++){

        if(startIndex == N-1 || s[startIndex+1]===' '){
              // reverse the string
              let wordLastIndex = startIndex;
              for(;wordLastIndex >= prevSpaceIndex; wordLastIndex--){
              result += s[wordLastIndex]; 
              }
              
              if(startIndex != N-1)
            result += ' ';
              startIndex++;
              //update the prevSpaceIndex
              prevSpaceIndex = startIndex+1;
        }

    }
return result;

};