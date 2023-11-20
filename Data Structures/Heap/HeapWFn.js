// Starting index of heap is 1
let arr = [0];

const getParentIndex = (idx) => Math.floor(idx / 2);
const getLeftIndex = (idx) => idx * 2;
const getRightIndex = (idx) => idx * 2 + 1;
const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

function insert(element) {
  arr.push(element);
  let n = arr.length;
  if (n !== 2) {
    let i = n - 1;
    let parentIndex = getParentIndex(i);
    while (i >= 1 && i < n && parentIndex >= 1 && arr[parentIndex] <= arr[i]) {
      swap(arr, parentIndex, i);
      i = parentIndex;
      parentIndex = getParentIndex(i);
    }
  }
}

function deleteTop() {
  arr[1] = arr[arr.length - 1];
  arr.pop();
  let n = arr.length;
  if (n !== 2) {
    let i = 1;
    let leftIndex = getLeftIndex(i);
    let rightIndex = getRightIndex(i);
    while (i < n && (arr[leftIndex] >= arr[i] || arr[rightIndex] >= arr[i])) {
      if(arr[leftIndex] >= arr[i]){
        swap(arr,leftIndex, i);
        i = leftIndex;
      }else{
        swap(arr,rightIndex, i);
        i = rightIndex;
      }
      leftIndex = getLeftIndex(i);
      rightIndex = getRightIndex(i);
    }
  }
}

//console.log("Hey");
insert(10);
console.log(arr);
insert(20);
console.log(arr);
insert(15);
console.log(arr);
insert(30);
console.log(arr);

deleteTop();
console.log(arr);
