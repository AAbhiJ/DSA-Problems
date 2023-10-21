/**
 * @param {number} n
 * @return {string[]}
 * Time Complexity : O(N) - As we are need to iterate for n times (N - n (Number))
 * Space Complexity : O(1) - As we are creating a answerArr of size N, however this do not contribute to the Space complexity
 */

/**
 * Version 1
 * 
 * First approach, go through the all string, and store the count in seperate dic.
 * Then loop in ransomNote dic keys and check if magazineDic has the sufficiant letter count matching ransomNote letter count
 * accordingly return true or false
 * 
 * Issue : TLE
 * 
 */
var canConstruct = function (ransomNote, magazine) {
    const ransomNoteLength = ransomNote.length;
    const magazineLength = magazine.length;

    const ransomNoteDic = {};
    const magazineDic = {};
    let ransomNotePos = 0, magazinePos = 0;
    while (ransomNotePos < ransomNoteLength || magazinePos < magazineLength) {
        if (ransomNotePos < ransomNoteLength)
            ransomNoteDic[ransomNote[ransomNotePos]] = ransomNoteDic[ransomNote[ransomNotePos]] ? ransomNoteDic[ransomNote[ransomNotePos]] + 1 : 1;

        if (magazinePos < magazineLength)
            magazineDic[magazine[magazinePos]] = magazineDic[magazine[magazinePos]] ? magazineDic[magazine[magazinePos]] + 1 : 1;
    }

    for(let letter of ransomNoteDic.keys){
        if(ransomNoteDic[letter] > magazineDic[letter])return false;
    }
    return true;

};
/** Version 2 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * Time Complexity : O(M) - M is Size of magazine array
 * Space Complexity : O(1) - as we are using dictonary to store the magazine letters count, but it will not more than 26,
 * there fore the space complexity will be O(1)
 */
var canConstruct = function (ransomNote, magazine) {
    
    if(ransomNote.length > magazine.length)return false;

    let magazineDic = {};

    for(let magazineLetter of magazine  ){
        magazineDic[magazineLetter] = magazineDic[magazineLetter] ? magazineDic[magazineLetter]+1 : 1; 
    }

    for(let ransomNoteLetter of ransomNote){
        if(!(ransomNoteLetter in magazineDic) || magazineDic[ransomNoteLetter] == 0)return false;
        magazineDic[ransomNoteLetter]--;
    }
return true;

};