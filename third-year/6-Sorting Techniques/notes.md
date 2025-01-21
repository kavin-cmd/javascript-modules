# Introduction to Searching Techniques in JavaScript

In this section, we will discuss various searching algorithms and techniques. Searching algorithms help us find an element in a dataset (like an array or list) efficiently. We will cover the following topics:

- Linear Search &#x2611;
- Binary Search &#x2611;
- Interpolation Search
- Exponential Search &#x2611;
- Jump Search
- Fibonacci Search
- Ternary Search
- Hashing and Hash-based Search &#x2611;
- String Searching: Brute Force &#x2611;, Knuth-Morris-Pratt (KMP), Rabin-Karp, and Boyer-Moore
- Searching in Sorted and Rotated Arrays
- Searching in 2D Arrays &#x2611;
- Searching in Trees: Depth-First Search (DFS) &#x2611; and Breadth-First Search (BFS)

---

## 1. **Linear Search**

Linear Search is the simplest search algorithm. It sequentially checks every element in the list until the desired element is found.

### Example: Linear Search
```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target found
    }
  }
  return -1; // Target not found
}

let arr = [5, 3, 8, 4, 1];
console.log(linearSearch(arr, 8));  // Output: 2
console.log(linearSearch(arr, 7));  // Output: -1
```

**Explanation:**
The function `linearSearch` implements the **linear search algorithm**, which is used to find the position of a target element in an **unsorted array**. Here's how it works:

1. **Iteration Through Array**:
  - The `for` loop iterates through each element of the array `arr`, starting from index `0` and going up to `arr.length - 1`.

2. **Comparison**:
  - For each iteration, the current element `arr[i]` is compared with the `target`.
  - If `arr[i] === target`, the function immediately returns the index `i` as the target is found.

3. **Termination**:
  - If the loop completes without finding the target, the function returns `-1`, indicating that the target is not present in the array.

**Space Complexity:**
- **O(1)**: The algorithm uses constant extra space as it only requires a single loop variable (`i`), regardless of the size of the array.

**Time Complexity:** 
- O(n) because it checks each element one by one.
- The function returns the index of the target element or `-1` if the element is not found.

---

## 2. **Binary Search**

Binary Search is a much faster search algorithm but requires that the input array is sorted. It works by repeatedly dividing the search interval in half.

### Example: Binary Search
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Target not found
}

let arr = [1, 3, 4, 5, 8];
console.log(binarySearch(arr, 5));  // Output: 3
console.log(binarySearch(arr, 7));  // Output: -1
```

**Explanation:**
The function `binarySearch` implements the **binary search algorithm**, which is used to find the position of a target element in a **sorted array**. Here's how it works:

1. **Initialization**:
  - `left` is initialized to 0 (start of the array).
  - `right` is initialized to `arr.length - 1` (end of the array).

2. **Iterative Search**:
  - The loop runs as long as `left <= right`.
  - The `mid` index is calculated using `Math.floor((left + right) / 2)` to avoid potential overflow issues in some programming languages.

3. **Comparison**:
  - If the element at the `mid` index (`arr[mid]`) is equal to the `target`, the function returns `mid`, as the target is found.
  - If `arr[mid] < target`, it means the target lies in the right half of the array. Thus, `left` is updated to `mid + 1`.
  - If `arr[mid] > target`, the target lies in the left half of the array. Therefore, `right` is updated to `mid - 1`.

4. **Termination**:
  - The loop terminates when `left` exceeds `right`. At this point, the `target` is not present in the array, and the function returns `-1`.

---

## Complexity Analysis:

### Space Complexity:
- **O(1)**: The algorithm uses constant extra space as it only maintains a few variables (`left`, `right`, `mid`) regardless of the size of the array.

### Time Complexity:
- **O(log n)**: The search space is halved in each iteration. For an array of size `n`:
  - In the first iteration, the search space is `n`.
  - In the second iteration, it is halved to `n/2`.
  - This halving continues until the search space is reduced to 1.
  - The total number of iterations is approximately **log₂(n)**.

---

## 3. **Interpolation Search**

Interpolation Search is an improvement over Binary Search for uniformly distributed data. It estimates the position of the target based on the values at the ends of the array.

### Example: Interpolation Search
```javascript
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    let mid = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));
    
    if (arr[mid] === target) {
      return mid; // Target found
    }
    
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  return -1; // Target not found
}

let arr = [10, 12, 13, 14, 18, 20];
console.log(interpolationSearch(arr, 14));  // Output: 3
console.log(interpolationSearch(arr, 7));   // Output: -1
```

**Explanation:**
- **Time Complexity:** O(log log n) for uniformly distributed data.
- This search works well for sorted arrays with evenly distributed elements.

---

## 4. **Exponential Search**

Exponential Search is a search algorithm that tries to find the range of indices where the target might be. Once the range is found, it performs Binary Search within the range.

### Example: Exponential Search
```javascript
function exponentialSearch(arr, target) {
  if (arr[0] === target) return 0;
  
  let i = 1;
  while (i < arr.length && arr[i] <= target) {
    i = i * 2;
  }
  
  return binarySearch(arr.slice(i / 2, i), target);
}

let arr = [1, 3, 5, 7, 9, 11, 13];
console.log(exponentialSearch(arr, 7));  // Output: 3
```

**Explanation:**
The `exponentialSearch` function is a search algorithm that combines the **exponential growth strategy** with **binary search** to efficiently locate a target element in a **sorted array**. Here’s a step-by-step explanation:

1. **Check First Element**:
  - The function first checks if the target is equal to the first element (`arr[0]`). If true, it immediately returns `0`.

2. **Exponential Growth Phase**:
  - The variable `i` starts at `1`.
  - A loop runs while `i` is less than the array length and the element at `arr[i]` is less than or equal to the target.
  - On each iteration, `i` is doubled (`i = i * 2`), effectively expanding the search range exponentially.

3. **Binary Search Phase**:
  - Once the exponential growth phase determines a range where the target might be located, binary search is performed within that range.
  - The range is defined as `[i / 2, i]`. The `arr.slice(i / 2, i)` method creates a subarray for this range.
  - The function uses `binarySearch` to locate the target within this range and returns the result.

**Time Complexity:** O(log n) due to Binary Search and the exponential increase of the range.
- It is useful for unbounded or infinite arrays.

**Space Complexity:**
O(log n): The subarray for binary search is created dynamically, and binary search itself requires logarithmic space due to recursive calls.

---

## 5. **Jump Search**

Jump Search works by jumping ahead by a fixed number of steps, and then performing a linear search backward if necessary.

### Example: Jump Search
```javascript
function jumpSearch(arr, target) {
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n)); // Jump step size
  let prev = 0;
  
  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1;
  }
  
  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) return i;
  }
  
  return -1;
}

let arr = [1, 3, 5, 7, 9, 11, 13];
console.log(jumpSearch(arr, 7));  // Output: 3
```

**Explanation:**
- **Time Complexity:** O(√n), more efficient than Linear Search for large arrays.
- It's a good trade-off between Linear and Binary Search.

---

## 6. **Fibonacci Search**

Fibonacci Search is a comparison-based search algorithm similar to Binary Search but uses Fibonacci numbers to divide the array.

### Example: Fibonacci Search
```javascript
function fibonacciSearch(arr, target) {
  let n = arr.length;
  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fib = fibMMm2 + fibMMm1;
  
  while (fib < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fib;
    fib = fibMMm2 + fibMMm1;
  }
  
  let offset = -1;
  
  while (fib > 1) {
    let i = Math.min(offset + fibMMm2, n - 1);
    
    if (arr[i] === target) return i;
    else if (arr[i] < target) {
      fib = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fib - fibMMm1;
      offset = i;
    } else {
      fib = fibMMm2;
      fibMMm2 = fibMMm1 - fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
    }
  }
  
  return (arr[offset + 1] === target) ? offset + 1 : -1;
}

let arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90];
console.log(fibonacciSearch(arr, 50));  // Output: 5
```

**Explanation:**
- **Time Complexity:** O(log n) for Fibonacci search.
- Works well when the array is large.

---

## 7. **Ternary Search**

Ternary Search is similar to Binary Search but divides the array into three parts instead of two.

### Example: Ternary Search
```javascript
function ternarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (right >= left) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);
    
    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;
    
    if (target < arr[mid1]) right = mid1 - 1;
    else if (target > arr[mid2]) left = mid2 + 1;
    else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }
  
  return -1; // Target not found
}

let arr = [1, 3, 5, 7, 9, 11, 13];
console.log(ternarySearch(arr, 7));  // Output: 3
```

**Explanation:**
- **Time Complexity:** O(log3 n) because the array is divided into three parts.
- Efficient for specific types of datasets.

---

## 8. **Hashing and Hash-based Search**

Hashing is a technique to convert a given key into an index in an array. This helps in fast searching, insertion, and deletion.

### Example: Hash Search Using Map
```javascript
let map = new Map();
map.set('name', 'John');
map.set('age', 25);
console.log(map.get('name'));  // Output: John
console.log(map.get('age'));   // Output: 25
```

**Explanation:**
- **Time Complexity:** O(1) for search, insert, and delete operations due to the constant time complexity of hash functions.

---

## Multiple-Choice Questions (MCQs)

1. **Which search algorithm works best for a sorted array?**
   - a) Linear Search
   - b) Binary Search
   - c) Interpolation Search
   - d) Exponential Search

   **Answer:** b) Binary Search

2. **What is the time complexity of Binary Search?**
   - a) O(n)
   - b) O(log n)
   - c) O(√n)
   - d) O(1)

   **Answer:** b) O(log n)

3. **Which of the following algorithms requires a sorted array?**
   - a) Linear Search
   - b) Binary Search
   - c) Jump Search
   - d) Exponential Search

   **Answer:** b) Binary Search

4. **Which search algorithm uses Fibonacci numbers?**
   - a) Binary Search
   - b) Fibonacci Search
   - c) Ternary Search
   - d) Jump Search

   **Answer:** b) Fibonacci Search

5. **What is the main advantage of Hashing in searching?**
   - a) Faster search
   - b) Easier to implement
   - c) Always guarantees finding an element
   - d) Works only with sorted data

   **Answer:** a) Faster search

---

# String Searching and Searching Algorithms in Data Structures

- **String Searching: Brute Force**
- **String Searching: Knuth-Morris-Pratt (KMP) Algorithm**
- **String Searching: Rabin-Karp Algorithm**
- **String Searching: Boyer-Moore Algorithm**
- **Searching in Sorted and Rotated Arrays**
- **Searching in 2D Arrays**
- **Searching in Trees: Depth-First Search (DFS) and Breadth-First Search (BFS)**

---

## 1. **String Searching: Brute Force**

The **Brute Force** method simply checks each possible position in the text where the pattern could match. It compares the substring starting at each position with the pattern.

### Example: Brute Force String Search
```javascript
function bruteForceSearch(text, pattern) {
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let match = true;
    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;  // Pattern found at index i
  }
  return -1;  // Pattern not found
}

let text = "hello world";
let pattern = "world";
console.log(bruteForceSearch(text, pattern));  // Output: 6
```

**Explanation:**
- **Time Complexity:** O(n * m), where `n` is the length of the text and `m` is the length of the pattern.
- The algorithm simply checks every substring of the text for a match with the pattern.

---

## 2. **String Searching: Knuth-Morris-Pratt (KMP) Algorithm**

The **KMP Algorithm** improves upon the brute force approach by using information about the pattern itself to avoid redundant comparisons.

### Example: Knuth-Morris-Pratt (KMP) Algorithm
```javascript
function KMPSearch(text, pattern) {
  let lps = buildLPS(pattern);  // Preprocess the pattern
  let i = 0;  // Text index
  let j = 0;  // Pattern index

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }
    if (j === pattern.length) {
      return i - j;  // Pattern found at index i - j
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return -1;  // Pattern not found
}

function buildLPS(pattern) {
  let lps = [0];
  let length = 0;
  for (let i = 1; i < pattern.length; i++) {
    while (length > 0 && pattern[i] !== pattern[length]) {
      length = lps[length - 1];
    }
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
    } else {
      lps[i] = 0;
    }
  }
  return lps;
}

let text = "ababcababcababcabc";
let pattern = "ababc";
console.log(KMPSearch(text, pattern));  // Output: 0
```

**Explanation:**
- **Time Complexity:** O(n + m), where `n` is the length of the text and `m` is the length of the pattern.
- KMP uses a preprocessing step to build the "Longest Prefix Suffix" (LPS) array, which helps avoid unnecessary comparisons by skipping over already matched parts of the pattern.

---

## 3. **String Searching: Rabin-Karp Algorithm**

The **Rabin-Karp Algorithm** uses hashing to find the pattern efficiently. It computes the hash of the pattern and the substrings of the text and compares them.

### Example: Rabin-Karp Algorithm
```javascript
function rabinKarpSearch(text, pattern) {
  let m = pattern.length;
  let n = text.length;
  let prime = 101;
  let patternHash = 0;
  let textHash = 0;
  let h = 1;

  // Calculate the value of h
  for (let i = 0; i < m - 1; i++) {
    h = (h * 256) % prime;
  }

  // Calculate hash of the pattern and the first window of the text
  for (let i = 0; i < m; i++) {
    patternHash = (patternHash * 256 + pattern.charCodeAt(i)) % prime;
    textHash = (textHash * 256 + text.charCodeAt(i)) % prime;
  }

  // Slide the pattern over text one by one
  for (let i = 0; i <= n - m; i++) {
    if (patternHash === textHash) {
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) return i;  // Pattern found at index i
    }

    // Calculate hash for the next window of text
    if (i < n - m) {
      textHash = (textHash * 256 - text.charCodeAt(i) * h + text.charCodeAt(i + m)) % prime;
      if (textHash < 0) textHash += prime;
    }
  }
  return -1;  // Pattern not found
}

let text = "hello world";
let pattern = "world";
console.log(rabinKarpSearch(text, pattern));  // Output: 6
```

**Explanation:**
- **Time Complexity:** O(n + m), where `n` is the length of the text and `m` is the length of the pattern.
- The algorithm uses rolling hashes to calculate the hash of substrings and compares the hashes to find matches.

---

## 4. **String Searching: Boyer-Moore Algorithm**

The **Boyer-Moore Algorithm** is one of the most efficient string search algorithms. It uses two heuristics: the **bad character rule** and the **good suffix rule**.

### Example: Boyer-Moore Algorithm
```javascript
function boyerMooreSearch(text, pattern) {
  let m = pattern.length;
  let n = text.length;
  let badChar = buildBadCharTable(pattern);

  let i = 0;
  while (i <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      return i;  // Pattern found at index i
    } else {
      let shift = badChar[text[i + j]] !== undefined ? badChar[text[i + j]] : m;
      i += shift;
    }
  }
  return -1;  // Pattern not found
}

function buildBadCharTable(pattern) {
  let badChar = {};
  for (let i = 0; i < pattern.length; i++) {
    badChar[pattern[i]] = i;
  }
  return badChar;
}

let text = "ababcababcababcabc";
let pattern = "ababc";
console.log(boyerMooreSearch(text, pattern));  // Output: 0
```

**Explanation:**
- **Time Complexity:** O(n/m), making it faster than the brute force method.
- The algorithm skips over large sections of the text based on the mismatch between the pattern and the text.

---

## 5. **Searching in Sorted and Rotated Arrays**

In a **Sorted and Rotated Array**, the array is sorted but rotated at some pivot. The task is to search for an element in the rotated array.

### Example: Searching in Sorted and Rotated Arrays
```javascript
function searchInRotatedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;  // Target found
    }

    if (arr[left] <= arr[mid]) {
      if (arr[left] <= target && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[mid] < target && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;  // Target not found
}

let arr = [15, 18, 2, 3, 6, 12];
let target = 3;
console.log(searchInRotatedArray(arr, target));  // Output: 3
```

**Explanation:**
- **Time Complexity:** O(log n), similar to Binary Search.
- The array is divided into two subarrays that are either sorted or rotated, and we take advantage of the sorted portion to search for the element.

---

## 6. **Searching in 2D Arrays**

In a **2D Array**, we have to search for a value that might be in any row or column.

### Example: Searching in 2D Arrays
```javascript
function searchIn2DArray(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return [row, col];  // Target found at (row, col)
    } else if (matrix[row][col] > target) {
      col--;  // Move left
    } else {
      row++;  // Move down
    }
  }
  return [-1, -1];  // Target not found
}

let matrix = [
  [1, 4, 7, 11],
  [2, 5, 8, 12],
  [3, 6, 9, 16],
  [10, 13, 14, 17]
];
let target = 5;
console.log(searchIn2DArray(matrix, target));  // Output: [1, 1]
```

**Explanation:**

The `searchIn2DArray` function is designed to locate a target element in a **2D matrix** where:
- Each row is sorted in ascending order from left to right.
- Each column is sorted in ascending order from top to bottom.

Here’s a step-by-step explanation:

1. **Initialization**:
  - `row` is initialized to `0` (top row).
  - `col` is initialized to `matrix[0].length - 1` (rightmost column).

2. **Search Process**:
  - The algorithm starts at the top-right corner of the matrix (`matrix[row][col]`).
  - In each iteration:
    - If the current element matches the `target`, the function returns the `[row, col]` coordinates.
    - If the current element is greater than the `target`, it moves left (`col--`) since all elements to the left are smaller.
    - If the current element is less than the `target`, it moves down (`row++`) since all elements below are larger.

3. **Termination**:
  - The loop continues until `row` exceeds the number of rows or `col` becomes less than 0.
  - If the loop completes without finding the target, the function returns `[-1, -1]`, indicating that the target is not present.

**Time Complexity:** O(m + n), where `m` is the number of rows and `n` is the number of columns.
- We start from the top-right corner and either move left or down based on comparisons.

---

## 7. **Searching in Trees: Depth-First Search (DFS) and Breadth-First Search (BFS)**

### Depth-First Search (DFS)

DFS explores as far as possible along each branch before backtracking.

### Example: Depth-First Search (DFS)
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function DFS(root, target) {
  if (!root) return false;
  
  if (root.value === target) return true;
  
  return DFS(root.left, target) || DFS(root.right, target);
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(DFS(root, 4));  // Output: true
console.log(DFS(root, 6));  // Output: false
```

**Explanation:**
- **Time Complexity:** O(n), where `n` is the number of nodes.
- DFS explores each

 node in a depth-first manner (left to right or right to left).

---

### Breadth-First Search (BFS)

BFS explores all nodes at the present depth level before moving on to nodes at the next depth level.

### Example: Breadth-First Search (BFS)
```javascript
function BFS(root, target) {
  if (!root) return false;
  let queue = [root];

  while (queue.length) {
    let currentNode = queue.shift();
    if (currentNode.value === target) return true;
    
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return false;
}

console.log(BFS(root, 4));  // Output: true
console.log(BFS(root, 6));  // Output: false
```

**Explanation:**
- **Time Complexity:** O(n), where `n` is the number of nodes.
- BFS explores all nodes at the current level before moving to the next level.

---

## Multiple Choice Questions (MCQs)

1. **Which algorithm is the most efficient for string searching when considering large texts?**
   - A) Brute Force
   - B) KMP
   - C) Rabin-Karp
   - D) Boyer-Moore

   **Answer:** D) Boyer-Moore

2. **Which of the following is a key advantage of the KMP algorithm?**
   - A) It uses hashing for efficient comparison.
   - B) It preprocesses the pattern to avoid redundant comparisons.
   - C) It works best with small datasets.
   - D) It performs in O(n * m) time complexity.

   **Answer:** B) It preprocesses the pattern to avoid redundant comparisons.

3. **In the Rabin-Karp algorithm, which data structure is primarily used?**
   - A) Arrays
   - B) Hash Tables
   - C) Linked Lists
   - D) Trees

   **Answer:** B) Hash Tables

4. **What is the time complexity of searching in a sorted and rotated array?**
   - A) O(n)
   - B) O(n * log n)
   - C) O(log n)
   - D) O(m + n)

   **Answer:** C) O(log n)

5. **In a binary tree, which algorithm would you use to visit all nodes?**
   - A) Depth-First Search (DFS)
   - B) Breadth-First Search (BFS)
   - C) Both DFS and BFS
   - D) Linear Search

   **Answer:** C) Both DFS and BFS