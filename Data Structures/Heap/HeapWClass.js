// Starting index of heap is 0
class MaxHeapCls {
  arr = [];

  parent = (idx) => Math.floor(idx / 2);
  left = (idx) => idx * 2 + 1;
  right = (idx) => idx * 2 + 2;

  swap(idx1, idx2) {
    const temp = this.arr[idx1];
    this.arr[idx1] = this.arr[idx2];
    this.arr[idx2] = temp;
  }

  upheap(idx) {
    if (idx <= 0) return;

    const parentIdx = this.parent(idx);
    if (this.arr[parentIdx] <= this.arr[idx]) {
      this.swap(parentIdx, idx);
      this.upheap(parentIdx);
    }
  }
  downheap(idx) {
    let max = idx;
    const left = this.left(idx);
    const right = this.right(idx);

    // console.log(left, right, idx, "\n");
    if(left< this.arr.length && this.arr[left] >= this.arr[idx]){
      max = left;
    }
    if(right< this.arr.length && this.arr[right] >= this.arr[idx]){
      max = right;
    }

    if(max!== idx){
      this.swap(idx, max);
      this.downheap(max);
    }
  }
  insert(element) {
    this.arr.push(element);
    this.upheap(this.arr.length - 1);
  }

  remove() {
    if(this.arr.length===0)throw "Removing from empty heap!";

    let top = this.arr[0];
    let last = this.arr.pop();
    if(this.arr.length!==0){
      this.arr[0] = last;
      this.downheap(0);
    }
    return top;
  }

  printHeap() {
    console.log(this.arr);
  }
}

heap = new MaxHeapCls();
heap.insert(34);
heap.insert(45);
heap.insert(22);
heap.insert(89);
heap.insert(76);
heap.printHeap();
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
heap.printHeap();


/**
 * 
 class MaxHeapCls {
  arr = [];

  parent = (idx) => Math.floor(idx / 2);
  left = (idx) => idx * 2 + 1;
  right = (idx) => idx * 2 + 2;

  swap(idx1, idx2) {
    const temp = this.arr[idx1];
    this.arr[idx1] = this.arr[idx2];
    this.arr[idx2] = temp;
  }

  upheap(idx) {
    if (idx <= 0) return;

    const parentIdx = this.parent(idx);
    if (this.arr[parentIdx].priority < this.arr[idx].priority || (this.arr[parentIdx].priority === this.arr[idx].priority && this.arr[parentIdx].value < this.arr[idx].value)) {
      this.swap(parentIdx, idx);
      this.upheap(parentIdx);
    }
  }
  downheap(idx) {
    let max = idx;
    const left = this.left(idx);
    const right = this.right(idx);
    // console.log(left, right, idx, "\n");
    if(left< this.arr.length && (this.arr[left].priority > this.arr[idx].priority || (this.arr[left].priority === this.arr[idx].priority && this.arr[left].value < this.arr[idx].value))){
      max = left;
    }

    if(right< this.arr.length && (this.arr[right].priority > this.arr[idx].priority && this.arr[right].priority > this.arr[left].priority  
      || (this.arr[right].priority === this.arr[idx].priority && this.arr[right].priority === this.arr[left].priority && this.arr[right].value < this.arr[idx].value && this.arr[right].value < this.arr[left].value))){
        max = right;
    }

    // console.log(this.arr, left, right, idx, max, this.arr[left], this.arr[right], this.arr[idx]);
    if(max!== idx){
      this.swap(idx, max);
      this.downheap(max);
    }
  }
  insert(element) {
    this.arr.push(element);
    this.upheap(this.arr.length - 1);
  }

  remove() {
    if(this.arr.length===0)throw "Removing from empty heap!";
    
    let top = this.arr[0];
    let last = this.arr.pop();

    if(this.arr.length!==0){
      this.arr[0] = last;
    this.printHeap();
    this.downheap(0);
    }
    return top;
  }

  printHeap() {
    console.log(this.arr);
  }
}
 * 
 */