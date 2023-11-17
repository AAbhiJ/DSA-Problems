/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 * 
 * TC : O(N)
 * SC : O(N)
 * 
 */
var carFleet = function(target, position, speed) {
    let dict = {};
    const n = position.length;

    if(n==1)return 1;

    for(let i = 0; i < n; i++){
        dict[Number(position[i])] = speed[i];
    }

    let fleetCount = n;
    const timeDiff = Object.keys(dict).map(key=>(target-key)/dict[key]);
    

    for(let i = timeDiff.length; i >=0 ; i--){
        if(timeDiff[i] >= timeDiff[i-1]){
            timeDiff[i-1] = timeDiff[i];
            fleetCount--;
        }
    }
    return fleetCount;

};