

/**
 * 
 * Two Solutions
 * 1. With Sort
 * 2. Without Sort
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 *  With Sort
 * 
 * TC : O(n) - size of nums arr
 * SC : O(k)
 */

var topKFrequent = function (nums, k) {
    let dict = {};
    let output = [];
    let arr = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]]) {
            dict[nums[i]]++;
        } else {
            dict[nums[i]] = 1;
        }
    }

    //initialize an array with size n+1, and loop the dict and add the number at the count index 

    Object.keys(dict).forEach((element) => {
        let prev = arr[dict[element]] || [];
        prev.push(element);
        arr[dict[element]] = prev;
    })

    //traverse from n to 0, and add the element in output arr, and with adding decrement k
    for (let i = arr.length-1; i >= 0; i--) {
        if (k < 1) break;
        if (arr[i]) {
            for (let ele of arr[i]) {
                output.push(ele);
                k--;
            }
        }
    }

    return output;

};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * Without Sort
 * 
 * TC : O(n) - size of nums arr
 * SC : O(k) - size of distinct numbers
 */

var topKFrequent = function (nums, k) {
    let dict = {};
    let output = [];
    let arr = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]]) {
            dict[nums[i]]++;
        } else {
            dict[nums[i]] = 1;
        }
    }

    //initialize an array with size n+1, and loop the dict and add the number at the count index 

    Object.keys(dict).forEach((element) => {
        let prev = arr[dict[element]] || [];
        prev.push(element);
        arr[dict[element]] = prev;
    })

    //traverse from n to 0, and add the element in output arr, and with adding decrement k
    for (let i = arr.length-1; i >= 0; i--) {
        if (k < 1) break;
        if (arr[i]) {
            for (let ele of arr[i]) {
                output.push(ele);
                k--;
            }
        }
    }

    return output;

};