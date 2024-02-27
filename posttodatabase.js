const express=require('express')
const router=express.Router();

const data=[
    {
      id: 1,
      problem: 'Print Hello World',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 2,
      problem: 'Add Two Numbers',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 3,
      problem: 'Find the Largest Number in an Array',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 4,
      problem: 'Calculate the Factorial of a Number',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 5,
      problem: 'Check if a Number is Even or Odd',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 6,
      problem: 'Reverse a String',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 7,
      problem: 'Check for Palindrome',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 8,
      problem: 'Sum of Digits of a Number',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 9,
      problem: 'Find the Square Root of a Number',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 10,
      problem: 'Swap Two Variables',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 11,
      problem: 'Check Leap Year',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 12,
      problem: 'Calculate the Area of a Circle',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 13,
      problem: 'Generate Fibonacci Series',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 14,
      problem: 'Check for Prime Number',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 15,
      problem: 'Count Vowels in a String',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 16,
      problem: 'Check for Anagrams',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 17,
      problem: 'Find the Minimum Element in an Array',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 18,
      problem: 'Calculate the Power of a Number',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 19,
      problem: 'Convert Celsius to Fahrenheit',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 20,
      problem: 'Remove Duplicates from an Array',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 21,
      problem: 'Check if a String contains a Substring',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 22,
      problem: 'Calculate the Average of Numbers in an Array',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 23,
      problem: 'Print Prime Numbers up to N',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 24,
      problem: 'Count Words in a String',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 25,
      problem: 'Check if a Number is a Perfect Square',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 26,
      problem: 'Reverse a Linked List',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 27,
      problem: 'Implement a Stack',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 28,
      problem: 'Implement a Queue',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 29,
      problem: 'Find the Length of a Linked List',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 30,
      problem: 'Merge Two Sorted Arrays',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 31,
      problem: 'Check for Balanced Parentheses',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 32,
      problem: 'Binary Search',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 33,
      problem: 'Selection Sort',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 34,
      problem: 'Bubble Sort',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 35,
      problem: 'Insertion Sort',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 36,
      problem: 'Find the GCD of Two Numbers',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 37,
      problem: 'Calculate LCM of Two Numbers',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 38,
      problem: 'Linear Search',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 39,
      problem: 'Find the Missing Number in an Array',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 40,
      problem: 'Check if a Linked List has a Cycle',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 41,
      problem: 'Find the Nth Node from the End of a Linked List',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 42,
      problem: 'Implement a Binary Tree',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 43,
      problem: 'Depth-First Search (DFS)',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 44,
      problem: 'Breadth-First Search (BFS)',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 45,
      problem: 'Implement a Hash Table',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 46,
      problem: 'Calculate the Exponentiation of a Number',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 47,
      problem: 'Find the Intersection of Two Arrays',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 48,
      problem: 'Count Set Bits in an Integer',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 49,
      problem: 'Implement a Singly Linked List',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 50,
      problem: 'Find the Maximum Subarray Sum',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 51,
      problem: 'Reverse a Doubly Linked List',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 52,
      problem: 'Find the Majority Element in an Array',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 53,
      problem: 'Implement QuickSort',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 54,
      problem: 'Find the Peak Element in an Array',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 55,
      problem: 'Calculate the Hamming Distance',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 56,
      problem: 'Detect a Cycle in a Directed Graph',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 57,
      problem: 'Find the Shortest Path in a Graph',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 58,
      problem: 'Implement a Binary Search Tree (BST)',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 59,
      problem: 'Check if a Tree is Balanced',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 60,
      problem: 'Topological Sorting',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 61,
      problem: 'Calculate the Median of Two Sorted Arrays',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 62,
      problem: 'Implement a Trie',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 63,
      problem: 'Find the Longest Increasing Subsequence',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 64,
      problem: 'Count Inversions in an Array',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 65,
      problem: 'Detect a Cycle in an Undirected Graph',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 66,
      problem: 'Reverse Words in a String',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 67,
      problem: 'Valid Parentheses',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 68,
      problem: 'Find All Anagrams in a String',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 69,
      problem: 'Implement Merge Sort',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 70,
      problem: 'Find the Kth Smallest/Largest Element in an Array',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 71,
      problem: 'Serialize and Deserialize a Binary Tree',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 72,
      problem: "Implement Dijkstra's Algorithm",
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 73,
      problem: 'Implement Bellman-Ford Algorithm',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 74,
      problem: 'Check if a Binary Tree is a Subtree of Another',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 75,
      problem: 'Find the Lowest Common Ancestor in a Binary Tree',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 76,
      problem: 'Find All Duplicates in an Array',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 77,
      problem: 'Search in Rotated Sorted Array',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 78,
      problem: 'Longest Common Prefix',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 79,
      problem: 'Valid Sudoku',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 80,
      problem: 'Container With Most Water',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 81,
      problem: 'Three Sum',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 82,
      problem: 'Merge Intervals',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 83,
      problem: 'Remove Nth Node From End of List',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 84,
      problem: 'Longest Substring Without Repeating Characters',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 85,
      problem: 'Reverse Linked List II',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 86,
      problem: 'Implement strStr()',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 87,
      problem: 'Implement pow(x, n)',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 88,
      problem: 'Jump Game',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 89,
      problem: 'Maximum Subarray',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 90,
      problem: 'Spiral Matrix',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 91,
      problem: 'Valid Palindrome',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 92,
      problem: 'ZigZag Conversion',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 93,
      problem: 'Group Anagrams',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 94,
      problem: 'Minimum Path Sum',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 95,
      problem: 'Unique Paths',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 96,
      problem: 'Climbing Stairs',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 97,
      problem: 'Symmetric Tree',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 98,
      problem: 'Maximum Depth of Binary Tree',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 99,
      problem: 'Path Sum',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    },
    {
      id: 100,
      problem: 'Search a 2D Matrix',
      type: { java: 'java', python: 'python', cpp: 'c++' }
    }
  ]
  
  
router.post('/postdata',async (req,res)=>{

data.forEach((dataitems)=>{
    const {id,problem,type}=dataitems;
     fetch('https://quiz-app-d25cf-default-rtdb.firebaseio.com/top100.json',
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id,problem,type
        })
    })
    

})
console.log('hello')
    res.send('data posted')
})
module.exports=router;