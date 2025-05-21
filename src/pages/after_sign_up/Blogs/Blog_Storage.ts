export interface BlogPostInterfaceLevel1 {
    id: number;
    title: string;
    description: string;
    readingTime: number;
    level: string;
    tags: string[];
  }

  // Sample blog data
export const blogDataLevel1: BlogPostInterfaceLevel1[] = 
[
    {
      id: 1,
      title: "Arrays",
      description: "Fundamental data structure for storing elements of the same type.",
      readingTime: 5,
      level: "Beginner",
      tags: ["Data Structure", "Programming"]
    },
    {
      id: 2,
      title: "Introduction to DSA",
      description: "Primer on Data Structures and Algorithms.",
      readingTime: 8,
      level: "Beginner",
      tags: ["DSA", "Computer Science"]
    },
    {
      id: 3,
      title: "Binary Search",
      description: "Efficient searching algorithm for sorted arrays.",
      readingTime: 6,
      level: "Intermediate",
      tags: ["Algorithm", "Searching"]
    },
    {
      id: 4,
      title: "Binary Search Tree",
      description: "Hierarchical data structure with efficient search, insertion, and deletion operations.",
      readingTime: 10,
      level: "Advanced",
      tags: ["Data Structure", "Tree"]
    },
    {
      id: 5,
      title: "Binary Tree",
      description: "Tree data structure where each node has at most two children.",
      readingTime: 7,
      level: "Intermediate",
      tags: ["Data Structure", "Tree"]
    },
    {
      id: 6,
      title: "Bit Manipulation",
      description: "Manipulating individual bits to perform operations.",
      readingTime: 12,
      level: "Advanced",
      tags: ["Low Level", "Programming"]
    },
    {
      id: 7,
      title: "C++",
      description: "Powerful programming language often used for DSA implementations.",
      readingTime: 15,
      level: "Intermediate",
      tags: ["Programming Language", "DSA"]
    },
    {
      id: 8,
      title: "CS Core",
      description: "Essential concepts in Computer Science.",
      readingTime: 20,
      level: "Beginner",
      tags: ["Computer Science", "Fundamentals"]
    },
    {
      id: 9,
      title: "Data Structures",
      description: "Fundamental building blocks for organizing and storing data efficiently.",
      readingTime: 9,
      level: "Beginner",
      tags: ["Data Structure", "Programming"]
    },
    {
      id: 10,
      title: "Graph Theory",
      description: "Mathematical structures used to model pairwise relations between objects.",
      readingTime: 14,
      level: "Advanced",
      tags: ["Algorithm", "Graph"]
    },
    {
      id: 11,
      title: "Dynamic Programming",
      description: "Optimization technique used to solve complex problems by breaking them into simpler subproblems.",
      readingTime: 18,
      level: "Advanced",
      tags: ["Algorithm", "Optimization"]
    },
    {
      id: 12,
      title: "Heap Data Structure",
      description: "Binary tree-based structure used for priority queues.",
      readingTime: 11,
      level: "Intermediate",
      tags: ["Data Structure", "Heap"]
    },
    {
      id: 13,
      title: "Recursion",
      description: "Problem-solving technique where a function calls itself.",
      readingTime: 10,
      level: "Intermediate",
      tags: ["Algorithm", "Programming"]
    },
    {
      id: 14,
      title: "Sorting Algorithms",
      description: "Techniques to arrange elements in a specific order.",
      readingTime: 9,
      level: "Beginner",
      tags: ["Algorithm", "Sorting"]
    },
    {
      id: 15,
      title: "Greedy Algorithms",
      description: "Algorithmic paradigm that makes locally optimal choices at each step.",
      readingTime: 13,
      level: "Intermediate",
      tags: ["Algorithm", "Optimization"]
    },
    {
      id: 16,
      title: "Backtracking",
      description: "Algorithmic technique for solving problems recursively by trying different possibilities.",
      readingTime: 17,
      level: "Advanced",
      tags: ["Algorithm", "Optimization"]
    },
    {
      id: 17,
      title: "Linked List",
      description: "Linear data structure consisting of nodes pointing to the next node.",
      readingTime: 8,
      level: "Beginner",
      tags: ["Data Structure", "Programming"]
    },
    {
      id: 18,
      title: "Operating Systems",
      description: "Core concepts of OS such as processes, memory management, and file systems.",
      readingTime: 22,
      level: "Intermediate",
      tags: ["Computer Science", "OS"]
    },
    {
      id: 19,
      title: "Database Management Systems",
      description: "Concepts of relational databases, normalization, and SQL queries.",
      readingTime: 16,
      level: "Intermediate",
      tags: ["Database", "SQL"]
    },
    {
      id: 20,
      title: "Networking Basics",
      description: "Fundamentals of computer networks, protocols, and the internet.",
      readingTime: 15,
      level: "Beginner",
      tags: ["Computer Science", "Networking"]
    },
    {
      id: 21,
      title: "Software Engineering Principles",
      description: "Key principles for designing and developing high-quality software systems.",
      readingTime: 19,
      level: "Intermediate",
      tags: ["Software Engineering", "Best Practices"]
    }
  ];

  interface SubBlog {
    id: number;
    title: string;
    description: string;
    readingTime: string;
    level: string;
    tags: string[];
    date: string;
    author: string;
  }
  
  interface MainBlog {
    id: number;
    title: string;
    navigationName: string;
    description: string;
    readingTime: number;
    level: string;
    tags: string[];
    subBlogs: SubBlog[];
  }
  

  // Sample blog data
  export const blogDataLevel1New: MainBlog[] = [
        {
        id: 1,
        title: "Arrays",
        navigationName: "Arrays",
        description: "Fundamental data structure for storing elements of the same type.",
        readingTime: 5,
        level: "Beginner",
        tags: ["Data Structure", "Programming"],
        subBlogs: [
          {
            id: 1,
            title: "Convert an Array to a Linked List",
            description:
              "Given an array arr[] of size N. The task is to create a linked list from the given array and return the head of the linked list. This tutorial covers multiple approaches including iterative and recursive methods.",
            readingTime: "5 min",
            level: "Intermediate",
            tags: ["Data Structures", "Arrays", "Linked Lists"],
            date: "March 15, 2025",
            author: "Alex Johnson",
          },
          {
            id: 2,
            title: "Find the Majority Element in an Array",
            description:
              "Learn how to find the majority element (appearing more than N/2 times) using techniques like the Boyer-Moore Voting Algorithm. This is a frequently asked interview question.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Algorithms", "Arrays", "Searching"],
            date: "March 16, 2025",
            author: "Emily Carter",
          },
          {
            id: 3,
            title: "Kadane's Algorithm: Maximum Subarray Sum",
            description:
              "This article explains Kadane's Algorithm to find the maximum sum of a contiguous subarray in linear time. Includes a dry-run example and edge case handling.",
            readingTime: "7 min",
            level: "Advanced",
            tags: ["Dynamic Programming", "Arrays", "Algorithms"],
            date: "March 17, 2025",
            author: "Michael Chen",
          },
          {
            id: 4,
            title: "Rotate an Array by K Positions",
            description:
              "Explore different methods to rotate an array to the right by K steps. Covers the reversal algorithm and auxiliary space-based methods with time complexity analysis.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Arrays", "Algorithms", "Two Pointers"],
            date: "March 18, 2025",
            author: "Sofia Lee",
          },
          {
            id: 5,
            title: "Two Sum Problem Using Hashing",
            description:
              "Solve the classic Two Sum problem efficiently using hash maps. Learn the brute force, sorting + two pointers, and hashing approaches with code snippets.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Arrays", "Hashing", "Interview Problems"],
            date: "March 19, 2025",
            author: "David Patel",
          },
        ],
      },
     {
        id: 2,
        title: "Introduction to DSA",
        navigationName: "Introduction_to_DSA",
        description: "Primer on Data Structures and Algorithms.",
        readingTime: 8,
        level: "Beginner",
        tags: ["DSA", "Computer Science"],
        subBlogs: [
          {
            id: 1,
            title: "What is Data Structures and Algorithms (DSA)?",
            description:
              "This article introduces the basics of Data Structures and Algorithms, why they matter in programming, and how they are used to solve real-world problems efficiently.",
            readingTime: "4 min",
            level: "Beginner",
            tags: ["DSA", "Foundations", "Algorithms", "Data Structures"],
            date: "March 20, 2025",
            author: "Nina Sharma",
          },
          {
            id: 2,
            title: "Time and Space Complexity Simplified",
            description:
              "Learn the fundamentals of time and space complexity to analyze the efficiency of your code. Includes Big O, Omega, and Theta notations with examples.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Complexity Analysis", "DSA", "Big O"],
            date: "March 21, 2025",
            author: "Raj Mehta",
          },
          {
            id: 3,
            title: "Understanding Arrays and Linked Lists",
            description:
              "Get a beginner-friendly comparison of arrays and linked lists, including their structure, operations, pros and cons, and real-world use cases.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["DSA", "Arrays", "Linked Lists", "Data Structures"],
            date: "March 22, 2025",
            author: "Lily Anderson",
          },
          {
            id: 4,
            title: "Types of Data Structures Explained",
            description:
              "Explore linear and non-linear data structures like arrays, stacks, queues, trees, and graphs. Learn their use cases and how they are implemented.",
            readingTime: "7 min",
            level: "Beginner",
            tags: ["DSA", "Data Structures", "Tree", "Graph", "Stack"],
            date: "March 23, 2025",
            author: "Omar Hassan",
          },
          {
            id: 5,
            title: "Why Learn DSA for Placements?",
            description:
              "Understand the importance of DSA in coding interviews and competitive programming. This guide explains how mastering DSA can help you crack placements.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Placements", "DSA", "Career", "Interview Prep"],
            date: "March 24, 2025",
            author: "Grace Miller",
          },
        ],
      },
     {
        id: 3,
        title: "Binary Search",
        navigationName: "Binary_Search",
        description: "Efficient searching algorithm for sorted arrays.",
        readingTime: 6,
        level: "Intermediate",
        tags: ["Algorithm", "Searching"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Binary Search",
            description:
              "Learn the core idea behind binary search — a divide and conquer algorithm that efficiently searches sorted arrays in O(log N) time. Includes dry runs and edge cases.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Binary Search", "Algorithms", "Searching", "DSA"],
            date: "March 25, 2025",
            author: "Karan Verma",
          },
          {
            id: 2,
            title: "Binary Search on a Sorted Array",
            description:
              "Understand how to implement binary search on a sorted array using both iterative and recursive approaches. Common pitfalls and debugging tips included.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Binary Search", "Arrays", "Algorithms"],
            date: "March 26, 2025",
            author: "Elena Morris",
          },
          {
            id: 3,
            title: "Binary Search on Answer: Lower and Upper Bound",
            description:
              "Explore advanced binary search techniques to find lower and upper bounds, floor, ceiling, and first/last occurrences in a sorted array. Useful for range queries.",
            readingTime: "7 min",
            level: "Advanced",
            tags: ["Binary Search", "Range Queries", "Lower Bound", "Upper Bound"],
            date: "March 27, 2025",
            author: "Abdul Rahman",
          },
          {
            id: 4,
            title: "Binary Search in Rotated Sorted Arrays",
            description:
              "Learn how to apply binary search to rotated sorted arrays, such as in LeetCode problems. Includes logic for finding the pivot and searching accordingly.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["Binary Search", "Rotated Array", "Interview Problems"],
            date: "March 28, 2025",
            author: "Sophia Kim",
          },
          {
            id: 5,
            title: "Binary Search in Infinite Sorted Arrays",
            description:
              "Understand how to perform binary search in an infinite or unknown-size sorted array using exponential search and binary logic within bounds.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["Binary Search", "Infinite Arrays", "Algorithms"],
            date: "March 29, 2025",
            author: "Daniel Cruz",
          },
        ],
      },
      {
        id: 4,
        title: "Binary Search Tree",
        navigationName: "Binary_Search_Tree",
        description:
          "Hierarchical data structure with efficient search, insertion, and deletion operations.",
        readingTime: 10,
        level: "Advanced",
        tags: ["Data Structure", "Tree"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Binary Search Trees (BST)",
            description:
              "Learn the basic structure and properties of Binary Search Trees. Understand how BSTs maintain order and allow efficient insertion, deletion, and lookup operations.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["BST", "Trees", "DSA", "Data Structures"],
            date: "March 30, 2025",
            author: "Ava Wilson",
          },
          {
            id: 2,
            title: "Insertion and Deletion in BST",
            description:
              "Understand how to insert and delete nodes in a Binary Search Tree while maintaining the BST property. Includes recursive and iterative approaches.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["BST", "Tree Operations", "Algorithms"],
            date: "March 31, 2025",
            author: "James O'Connor",
          },
          {
            id: 3,
            title: "Inorder, Preorder, and Postorder Traversal of BST",
            description:
              "Learn how to perform various tree traversals on a Binary Search Tree and understand their significance. Includes code examples and visual walkthroughs.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["BST", "Tree Traversal", "DFS"],
            date: "April 1, 2025",
            author: "Riya Banerjee",
          },
          {
            id: 4,
            title: "Validate a Binary Search Tree",
            description:
              "Explore methods to check whether a given binary tree is a valid BST. Covers recursive bounds checking, in-order traversal, and edge case handling.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["BST", "Validation", "Interview Problems"],
            date: "April 2, 2025",
            author: "Leo Martinez",
          },
          {
            id: 5,
            title: "Lowest Common Ancestor in a BST",
            description:
              "Learn how to find the lowest common ancestor of two nodes in a Binary Search Tree. This is a common interview question solved efficiently using BST properties.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["BST", "LCA", "Algorithms"],
            date: "April 3, 2025",
            author: "Isabella Rossi",
          },
        ],
      },
      {
        id: 5,
        title: "Binary Tree",
        navigationName: "Binary_Tree",
        description: "Tree data structure where each node has at most two children.",
        readingTime: 7,
        level: "Intermediate",
        tags: ["Data Structure", "Tree"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Binary Trees",
            description:
              "Get started with the fundamental concepts of binary trees, their structure, types (full, complete, perfect), and use cases in data organization and processing.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Binary Tree", "DSA", "Tree Basics"],
            date: "April 4, 2025",
            author: "Noah Park",
          },
          {
            id: 2,
            title: "Binary Tree Traversal Techniques",
            description:
              "Learn about the different traversal methods in binary trees—Inorder, Preorder, Postorder, and Level Order—with code examples and visual representation.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Binary Tree", "Traversal", "DFS", "BFS"],
            date: "April 5, 2025",
            author: "Chloe Singh",
          },
          {
            id: 3,
            title: "Height and Depth in a Binary Tree",
            description:
              "Understand how to calculate the height and depth of nodes in a binary tree. Includes recursive solutions and time complexity analysis.",
            readingTime: "5 min",
            level: "Intermediate",
            tags: ["Binary Tree", "Height", "Depth", "Recursion"],
            date: "April 6, 2025",
            author: "Zaid Khan",
          },
          {
            id: 4,
            title: "Construct Binary Tree from Inorder and Preorder",
            description:
              "Reconstruct a binary tree from given inorder and preorder traversal arrays. This is a common recursive problem in interviews and coding contests.",
            readingTime: "7 min",
            level: "Advanced",
            tags: ["Binary Tree", "Recursion", "Tree Construction"],
            date: "April 7, 2025",
            author: "Mei Tanaka",
          },
          {
            id: 5,
            title: "Check if a Binary Tree is Balanced",
            description:
              "Learn how to determine whether a binary tree is height-balanced using recursive approaches. Includes optimized solutions with early stopping.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Binary Tree", "Balanced Tree", "Interview Problem"],
            date: "April 8, 2025",
            author: "Ethan Rivera",
          },
        ],
      },
      {
        id: 6,
        title: "Bit Manipulation",
        navigationName: "Bit_Manipulation",
        description: "Manipulating individual bits to perform operations.",
        readingTime: 12,
        level: "Advanced",
        tags: ["Low Level", "Programming"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Bit Manipulation",
            description:
              "Learn the fundamentals of bitwise operations including AND, OR, XOR, NOT, and bit shifts. This article sets the foundation for solving problems using bit manipulation.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Bit Manipulation", "Bitwise Operators", "DSA"],
            date: "April 9, 2025",
            author: "Anaya Desai",
          },
          {
            id: 2,
            title: "Check if a Number is Power of Two",
            description:
              "Explore efficient bit manipulation techniques to check if a number is a power of two using a single line of code and binary properties.",
            readingTime: "4 min",
            level: "Beginner",
            tags: ["Bit Manipulation", "Math", "Interview Problem"],
            date: "April 10, 2025",
            author: "Jaden Brooks",
          },
          {
            id: 3,
            title: "Find the Only Non-Repeating Element",
            description:
              "Use the XOR operation to find the element that appears once while all others appear twice. An elegant O(N) and O(1) space solution.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Bit Manipulation", "XOR", "Arrays"],
            date: "April 11, 2025",
            author: "Haruki Yamamoto",
          },
          {
            id: 4,
            title: "Count the Number of Set Bits",
            description:
              "Learn how to count the number of 1's (set bits) in the binary representation of an integer using Brian Kernighan’s Algorithm and inbuilt functions.",
            readingTime: "5 min",
            level: "Intermediate",
            tags: ["Bit Manipulation", "Set Bits", "Binary"],
            date: "April 12, 2025",
            author: "Lara Müller",
          },
          {
            id: 5,
            title: "Subset Generation Using Bitmasking",
            description:
              "Generate all possible subsets of a set using bitmasking. This approach is especially useful in solving subset sum, combinatorics, and DP problems.",
            readingTime: "7 min",
            level: "Advanced",
            tags: ["Bit Manipulation", "Bitmasking", "Combinatorics"],
            date: "April 13, 2025",
            author: "Oluwaseun Adeyemi",
          },
        ],
      },
      {
        id: 7,
        title: "C++",
        navigationName: "C_Plus_Plus",
        description: "Powerful programming language often used for DSA implementations.",
        readingTime: 15,
        level: "Intermediate",
        tags: ["Programming Language", "DSA"],
        subBlogs: [
          {
            id: 1,
            title: "Understanding the Basics of C++",
            description:
              "An introduction to the C++ language, covering its history, syntax, and how it's used in both competitive programming and software development.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["C++", "Programming Basics", "Syntax"],
            date: "April 14, 2025",
            author: "Rehan Kapoor",
          },
          {
            id: 2,
            title: "Object-Oriented Programming in C++",
            description:
              "Explore the four pillars of OOP in C++—Encapsulation, Abstraction, Inheritance, and Polymorphism—along with real-world use cases.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["C++", "OOP", "Classes", "Objects"],
            date: "April 15, 2025",
            author: "Samantha Lee",
          },
          {
            id: 3,
            title: "STL (Standard Template Library) in C++",
            description:
              "A deep dive into the most commonly used STL components like vectors, maps, sets, stacks, and algorithms. Essential for coding interviews and contests.",
            readingTime: "7 min",
            level: "Intermediate",
            tags: ["C++", "STL", "Vectors", "Maps", "Sets"],
            date: "April 16, 2025",
            author: "Dmitri Ivanov",
          },
          {
            id: 4,
            title: "Memory Management in C++",
            description:
              "Learn about dynamic memory allocation using new/delete, pointers, references, and how to avoid memory leaks in modern C++.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["C++", "Memory", "Pointers", "Dynamic Allocation"],
            date: "April 17, 2025",
            author: "Fatima Zahra",
          },
          {
            id: 5,
            title: "Exception Handling in C++",
            description:
              "Understand how to handle runtime errors in C++ using try, catch, and throw. Learn best practices and when to use custom exceptions.",
            readingTime: "5 min",
            level: "Intermediate",
            tags: ["C++", "Exception Handling", "Error Handling"],
            date: "April 18, 2025",
            author: "Marco Ferraro",
          },
        ],
      },
      {
        id: 8,
        title: "CS Core",
        navigationName: "CS_Core",
        description: "Essential concepts in Computer Science.",
        readingTime: 20,
        level: "Beginner",
        tags: ["Computer Science", "Fundamentals"],
        subBlogs: [
          {
            id: 1,
            title: "Operating Systems: Concepts and Scheduling",
            description:
              "Understand the fundamentals of operating systems including process management, scheduling algorithms (FCFS, SJF, Round Robin), and concurrency basics.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["CS Core", "Operating Systems", "Scheduling", "Concurrency"],
            date: "April 19, 2025",
            author: "Anjali Raj",
          },
          {
            id: 2,
            title: "Database Management Systems (DBMS) Basics",
            description:
              "Dive into key DBMS concepts such as relational models, SQL, normalization, transactions, and indexing—crucial for backend and system design interviews.",
            readingTime: "7 min",
            level: "Intermediate",
            tags: ["CS Core", "DBMS", "SQL", "Transactions"],
            date: "April 20, 2025",
            author: "Kabir Das",
          },
          {
            id: 3,
            title: "Computer Networks: Protocols and Layers",
            description:
              "Explore how the internet works with core concepts like OSI vs TCP/IP models, protocols (IP, TCP, HTTP), and network devices with real-world analogies.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["CS Core", "Computer Networks", "TCP/IP", "Protocols"],
            date: "April 21, 2025",
            author: "Lina Cheng",
          },
          {
            id: 4,
            title: "Compiler Design: Phases and Parsing",
            description:
              "Learn how compilers work under the hood, from lexical analysis to syntax and semantic analysis, parsing techniques, and code generation.",
            readingTime: "7 min",
            level: "Advanced",
            tags: ["CS Core", "Compiler Design", "Parsing", "Lexical Analysis"],
            date: "April 22, 2025",
            author: "Rohit Nayak",
          },
          {
            id: 5,
            title: "Computer Architecture and Organization",
            description:
              "Understand how computers process instructions with topics like instruction cycles, pipelining, memory hierarchy, and RISC vs CISC architecture.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["CS Core", "Computer Architecture", "Memory", "Instruction Cycle"],
            date: "April 23, 2025",
            author: "Emily Laurent",
          },
        ],
      },
      {
        id: 9,
        title: "Data Structures",
        navigationName: "Data_Structures",
        description: "Fundamental building blocks for organizing and storing data efficiently.",
        readingTime: 9,
        level: "Beginner",
        tags: ["Data Structure", "Programming"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Data Structures",
            description:
              "Learn what data structures are, why they’re important, and how they help in organizing and managing data efficiently for algorithmic solutions.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Data Structures", "DSA", "Foundations"],
            date: "April 24, 2025",
            author: "Ayaan Mehta",
          },
          {
            id: 2,
            title: "Arrays vs Linked Lists",
            description:
              "Compare two fundamental linear data structures—arrays and linked lists. Understand their operations, pros and cons, and where to use each.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Data Structures", "Arrays", "Linked Lists", "Comparison"],
            date: "April 25, 2025",
            author: "Kiara Thomas",
          },
          {
            id: 3,
            title: "Understanding Stacks and Queues",
            description:
              "Explore stack and queue data structures, their real-life applications, and how they are implemented using arrays or linked lists.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Data Structures", "Stacks", "Queues", "Linear Structures"],
            date: "April 26, 2025",
            author: "Zubair Ali",
          },
          {
            id: 4,
            title: "Trees and Their Applications",
            description:
              "Dive into non-linear data structures like binary trees, BSTs, and heaps. Learn how they are used in real-world applications like file systems and priority queues.",
            readingTime: "7 min",
            level: "Intermediate",
            tags: ["Data Structures", "Trees", "Heaps", "Non-Linear"],
            date: "April 27, 2025",
            author: "Sofia Nair",
          },
          {
            id: 5,
            title: "Hash Tables and Collision Handling",
            description:
              "Understand how hash tables work, their importance in constant-time access, and the methods used to handle collisions such as chaining and open addressing.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["Data Structures", "Hashing", "Hash Tables", "Collisions"],
            date: "April 28, 2025",
            author: "Leo Dasgupta",
          },
        ],
      },
      {
        id: 10,
        title: "Graph Theory",
        navigationName: "Graph_Theory",
        description: "Mathematical structures used to model pairwise relations between objects.",
        readingTime: 14,
        level: "Advanced",
        tags: ["Algorithm", "Graph"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Graph Theory",
            description:
              "Understand what graphs are, their types (directed, undirected, weighted, unweighted), and real-world applications like maps and social networks.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Graph Theory", "Graphs", "DSA", "Introduction"],
            date: "April 29, 2025",
            author: "Nina Prakash",
          },
          {
            id: 2,
            title: "Graph Representations: Adjacency List vs Matrix",
            description:
              "Learn how to represent graphs efficiently using adjacency lists and matrices, and understand when to use which based on the problem type.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Graph Theory", "Adjacency List", "Adjacency Matrix"],
            date: "April 30, 2025",
            author: "Omar Farooq",
          },
          {
            id: 3,
            title: "Depth First Search (DFS) and Breadth First Search (BFS)",
            description:
              "Explore the two primary graph traversal algorithms—DFS and BFS—along with their applications in pathfinding, cycle detection, and connectivity checks.",
            readingTime: "7 min",
            level: "Intermediate",
            tags: ["Graph Theory", "DFS", "BFS", "Traversal"],
            date: "May 1, 2025",
            author: "Priya Shankar",
          },
          {
            id: 4,
            title: "Detecting Cycles in Graphs",
            description:
              "Learn techniques to detect cycles in directed and undirected graphs using DFS and Union-Find, with special attention to interview questions.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Graph Theory", "Cycle Detection", "Union Find", "DFS"],
            date: "May 2, 2025",
            author: "Jason Wu",
          },
          {
            id: 5,
            title: "Topological Sorting in Directed Acyclic Graphs (DAGs)",
            description:
              "Understand how to perform topological sorting using DFS and Kahn’s Algorithm, and explore its use cases in scheduling and dependency resolution.",
            readingTime: "7 min",
            level: "Advanced",
            tags: ["Graph Theory", "Topological Sort", "DAG", "Kahn's Algorithm"],
            date: "May 3, 2025",
            author: "Tanya Bhatt",
          },
        ],
      },
      {
        id: 11,
        title: "Dynamic Programming",
        navigationName: "Dynamic_Programming",
        description:
          "Optimization technique used to solve complex problems by breaking them into simpler subproblems.",
        readingTime: 18,
        level: "Advanced",
        tags: ["Algorithm", "Optimization"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Dynamic Programming",
            description:
              "Learn the core idea behind dynamic programming—solving complex problems by breaking them down into overlapping subproblems and using memoization or tabulation.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Dynamic Programming", "DP", "Memoization", "Tabulation"],
            date: "May 4, 2025",
            author: "Neha Vardhan",
          },
          {
            id: 2,
            title: "Top-Down vs Bottom-Up DP",
            description:
              "Understand the difference between memoization (top-down) and tabulation (bottom-up) approaches with pros, cons, and when to use each effectively.",
            readingTime: "5 min",
            level: "Intermediate",
            tags: ["Dynamic Programming", "Top-Down", "Bottom-Up", "Optimization"],
            date: "May 5, 2025",
            author: "Ishaan Rao",
          },
          {
            id: 3,
            title: "0/1 Knapsack Problem Explained",
            description:
              "One of the classic DP problems. Learn how to approach and solve the 0/1 Knapsack problem using recursion, memoization, and tabulation.",
            readingTime: "7 min",
            level: "Intermediate",
            tags: ["Dynamic Programming", "Knapsack", "Optimization", "DP Patterns"],
            date: "May 6, 2025",
            author: "Selena Roy",
          },
          {
            id: 4,
            title: "Longest Common Subsequence (LCS)",
            description:
              "Explore how to solve LCS problems using DP—an important pattern behind many string problems like edit distance and subsequence matching.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Dynamic Programming", "LCS", "Strings", "Subsequences"],
            date: "May 7, 2025",
            author: "Anirudh Jain",
          },
          {
            id: 5,
            title: "Optimizing Space in Dynamic Programming",
            description:
              "Learn how to reduce the space complexity of DP solutions using rolling arrays and space-efficient techniques without sacrificing clarity.",
            readingTime: "5 min",
            level: "Advanced",
            tags: ["Dynamic Programming", "Space Optimization", "Advanced DP"],
            date: "May 8, 2025",
            author: "Maya Ghosh",
          },
        ],
      },
      {
        id: 12,
        title: "Heap Data Structure",
        navigationName: "Heap_Data_Structure",
        description: "Binary tree-based structure used for priority queues.",
        readingTime: 11,
        level: "Intermediate",
        tags: ["Data Structure", "Heap"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Heaps",
            description:
              "Understand what heaps are, the difference between min-heaps and max-heaps, and how they are used in efficient priority queue implementations.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Heap", "Priority Queue", "Data Structures"],
            date: "May 9, 2025",
            author: "Meera Patel",
          },
          {
            id: 2,
            title: "Heap Operations: Insert and Delete",
            description:
              "Explore how to insert and delete elements in a binary heap and maintain the heap property after every operation.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Heap", "Insert", "Delete", "Binary Heap"],
            date: "May 10, 2025",
            author: "Rafael Costa",
          },
          {
            id: 3,
            title: "Heap Sort Algorithm",
            description:
              "Learn how the Heap Sort algorithm works, its time complexity, and how it leverages the heap structure for efficient sorting.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Heap", "Heap Sort", "Sorting Algorithms"],
            date: "May 11, 2025",
            author: "Sana Farooq",
          },
          {
            id: 4,
            title: "Applications of Heaps",
            description:
              "Dive into real-world and competitive programming problems where heaps shine, such as finding the K largest/smallest elements.",
            readingTime: "5 min",
            level: "Intermediate",
            tags: ["Heap", "Applications", "Top K Elements"],
            date: "May 12, 2025",
            author: "Noah Kim",
          },
          {
            id: 5,
            title: "Implementing Heaps Using STL",
            description:
              "Learn how to use priority queues in C++ STL and Python's `heapq` module to implement heap operations efficiently.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Heap", "STL", "C++", "Python"],
            date: "May 13, 2025",
            author: "Ritika Sharma",
          },
        ],
      },
      {
        id: 13,
        title: "Recursion",
        navigationName: "Recursion",
        description: "Problem-solving technique where a function calls itself.",
        readingTime: 10,
        level: "Intermediate",
        tags: ["Algorithm", "Programming"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Recursion",
            description:
              "Understand what recursion is, how the call stack works, and how to identify base and recursive cases in problems.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Recursion", "Call Stack", "Programming Basics"],
            date: "May 14, 2025",
            author: "Aditya Iyer",
          },
          {
            id: 2,
            title: "Tail Recursion vs Head Recursion",
            description:
              "Explore different types of recursion—tail, head, linear, and tree recursion—and learn their differences and optimizations.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Recursion", "Tail Recursion", "Optimization"],
            date: "May 15, 2025",
            author: "Luisa Mendez",
          },
          {
            id: 3,
            title: "Classic Problems Solved Using Recursion",
            description:
              "Go through classic recursive problems like factorial, Fibonacci, and power calculation to build a solid foundation.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Recursion", "Classic Problems", "Fibonacci"],
            date: "May 16, 2025",
            author: "Nathan Brooks",
          },
          {
            id: 4,
            title: "Backtracking and Recursion",
            description:
              "Learn how recursion powers backtracking algorithms like N-Queens, Sudoku Solver, and Subset Generation.",
            readingTime: "7 min",
            level: "Advanced",
            tags: ["Recursion", "Backtracking", "N-Queens"],
            date: "May 17, 2025",
            author: "Tina Kapoor",
          },
          {
            id: 5,
            title: "Converting Recursion to Iteration",
            description:
              "Understand when and how to replace recursive solutions with iterative ones to avoid stack overflow and improve performance.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["Recursion", "Iteration", "Optimization"],
            date: "May 18, 2025",
            author: "James Dsouza",
          },
        ],
      },
      {
        id: 14,
        title: "Sorting Algorithms",
        navigationName: "Sorting_Algorithms",
        description: "Techniques to arrange elements in a specific order.",
        readingTime: 9,
        level: "Beginner",
        tags: ["Algorithm", "Sorting"],
        subBlogs: [
          {
            id: 1,
            title: "Overview of Sorting Algorithms",
            description:
              "Get a bird's-eye view of popular sorting algorithms, their time/space complexities, and stable vs unstable sorting.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Sorting", "Algorithms", "DSA Basics"],
            date: "May 19, 2025",
            author: "Elena Vasquez",
          },
          {
            id: 2,
            title: "Bubble Sort, Selection Sort, and Insertion Sort",
            description:
              "Explore elementary sorting algorithms with visual intuition, dry runs, and when (or when not) to use them.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Sorting", "Bubble Sort", "Insertion Sort"],
            date: "May 20, 2025",
            author: "Rishi Agarwal",
          },
          {
            id: 3,
            title: "Merge Sort and Quick Sort Explained",
            description:
              "Learn divide-and-conquer sorting algorithms—merge sort and quick sort—with detailed breakdowns and comparisons.",
            readingTime: "7 min",
            level: "Intermediate",
            tags: ["Sorting", "Merge Sort", "Quick Sort"],
            date: "May 21, 2025",
            author: "Zoey Chen",
          },
          {
            id: 4,
            title: "Counting Sort and Radix Sort",
            description:
              "Understand non-comparison-based sorting algorithms and how they achieve linear time for constrained input ranges.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["Sorting", "Counting Sort", "Radix Sort"],
            date: "May 22, 2025",
            author: "Farhan Siddiqui",
          },
          {
            id: 5,
            title: "Best Sorting Algorithm for Every Scenario",
            description:
              "Explore which sorting algorithm to use based on input size, data distribution, and memory constraints.",
            readingTime: "5 min",
            level: "Advanced",
            tags: ["Sorting", "Comparative Analysis", "Efficiency"],
            date: "May 23, 2025",
            author: "Chloe Martin",
          },
        ],
      },
      {
        id: 15,
        title: "Greedy Algorithms",
        navigationName: "Greedy_Algorithms",
        description: "Algorithmic paradigm that makes locally optimal choices at each step.",
        readingTime: 13,
        level: "Intermediate",
        tags: ["Algorithm", "Optimization"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Greedy Algorithms",
            description: "Understand the greedy paradigm, when it works, and how to identify problems where local choices lead to optimal global solutions.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Greedy", "Algorithms", "Optimization"],
            date: "May 24, 2025",
            author: "Karan Shah"
          },
          {
            id: 2,
            title: "Activity Selection and Job Scheduling",
            description: "Explore classic greedy problems like activity selection and job sequencing with deadlines using sorting and greedy choices.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Greedy", "Scheduling", "Sorting"],
            date: "May 25, 2025",
            author: "Aarushi Rana"
          },
          {
            id: 3,
            title: "Fractional Knapsack Problem",
            description: "Learn how greedy works for the fractional version of the knapsack problem, and why it fails for the 0/1 version.",
            readingTime: "5 min",
            level: "Intermediate",
            tags: ["Greedy", "Knapsack", "Optimization"],
            date: "May 26, 2025",
            author: "Tobias Klein"
          },
          {
            id: 4,
            title: "Huffman Encoding using Greedy",
            description: "Understand how greedy algorithms are used in constructing Huffman trees for data compression problems.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["Greedy", "Huffman Coding", "Data Compression"],
            date: "May 27, 2025",
            author: "Isha Chauhan"
          },
          {
            id: 5,
            title: "Greedy vs Dynamic Programming",
            description: "Compare greedy and DP approaches in real problems, and understand how to choose the right paradigm for a given problem.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["Greedy", "DP", "Comparison"],
            date: "May 28, 2025",
            author: "Daniel Weber"
          }
        ]
      },
      {
        id: 16,
        title: "Backtracking",
        navigationName: "Backtracking",
        description: "Algorithmic technique for solving problems recursively by trying different possibilities.",
        readingTime: 17,
        level: "Advanced",
        tags: ["Algorithm", "Optimization"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Backtracking",
            description: "Understand the core idea behind backtracking: exploring all possible solutions by making choices and undoing them if needed.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Backtracking", "Recursion", "Algorithms"],
            date: "May 29, 2025",
            author: "Ira Menon"
          },
          {
            id: 2,
            title: "Solving the N-Queens Problem",
            description: "Dive into the classic N-Queens problem to see how backtracking is used to place queens on a board without conflicts.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Backtracking", "N-Queens", "Recursion"],
            date: "May 30, 2025",
            author: "Dev Bhattacharya"
          },
          {
            id: 3,
            title: "Sudoku Solver Using Backtracking",
            description: "Learn how to build a Sudoku solver using backtracking, showcasing constraint satisfaction and smart decision-making.",
            readingTime: "7 min",
            level: "Advanced",
            tags: ["Backtracking", "Sudoku", "Constraint Solving"],
            date: "May 31, 2025",
            author: "Leila Zhang"
          },
          {
            id: 4,
            title: "Subset and Permutation Generation",
            description: "Explore how to use backtracking to generate all subsets, permutations, and combinations of a given set.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Backtracking", "Permutations", "Subsets"],
            date: "June 1, 2025",
            author: "Marcus Singh"
          },
          {
            id: 5,
            title: "Optimizations in Backtracking",
            description: "Learn how to prune recursion trees, use constraints early, and avoid redundant states to optimize backtracking solutions.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["Backtracking", "Optimization", "Pruning"],
            date: "June 2, 2025",
            author: "Sofia Ramesh"
          }
        ]
      },
      {
        id: 17,
        title: "Linked List",
        navigationName: "Linked_List",
        description: "Linear data structure consisting of nodes pointing to the next node.",
        readingTime: 8,
        level: "Beginner",
        tags: ["Data Structure", "Programming"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Linked Lists",
            description: "Understand the basics of singly and doubly linked lists, node structure, and how they differ from arrays.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Linked List", "Data Structures", "Singly List"],
            date: "June 3, 2025",
            author: "Ravi Chawla"
          },
          {
            id: 2,
            title: "Common Operations on Linked Lists",
            description: "Learn how to insert, delete, and search nodes in singly and doubly linked lists through step-by-step breakdowns.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Linked List", "Insert", "Delete", "Traversal"],
            date: "June 4, 2025",
            author: "Ella Mathews"
          },
          {
            id: 3,
            title: "Detecting and Removing Loops",
            description: "Explore Floyd’s Cycle Detection Algorithm and learn how to detect and remove loops in linked lists.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Linked List", "Cycle Detection", "Floyd's Algorithm"],
            date: "June 5, 2025",
            author: "Zayan Malik"
          },
          {
            id: 4,
            title: "Reversing a Linked List",
            description: "Understand how to reverse a linked list using iterative and recursive approaches with clean logic.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Linked List", "Reverse", "Recursion"],
            date: "June 6, 2025",
            author: "Anita Desai"
          },
          {
            id: 5,
            title: "Applications of Linked Lists",
            description: "Explore real-world applications like implementing stacks, queues, hash maps with chaining, and adjacency lists using linked lists.",
            readingTime: "5 min",
            level: "Intermediate",
            tags: ["Linked List", "Applications", "Stacks", "Queues"],
            date: "June 7, 2025",
            author: "Yash Pratap"
          }
        ]
      },
      {
        id: 18,
        title: "Operating Systems",
        navigationName: "Operating_Systems",
        description: "Core concepts of OS such as processes, memory management, and file systems.",
        readingTime: 22,
        level: "Intermediate",
        tags: ["Computer Science", "OS"],
        subBlogs: [
          {
            id: 1,
            title: "Basics of Operating Systems",
            description: "Understand what operating systems are, their key functions, and how they serve as an interface between users and hardware.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Operating Systems", "OS Basics", "Processes"],
            date: "June 8, 2025",
            author: "Grace Kumar"
          },
          {
            id: 2,
            title: "Process Scheduling Algorithms",
            description: "Explore various scheduling strategies like FCFS, SJF, Round Robin, and Priority Scheduling with Gantt chart examples.",
            readingTime: "7 min",
            level: "Intermediate",
            tags: ["Operating Systems", "Scheduling", "Processes"],
            date: "June 9, 2025",
            author: "Ayaan Mehra"
          },
          {
            id: 3,
            title: "Memory Management Techniques",
            description: "Dive into memory allocation methods including paging, segmentation, and virtual memory with working examples.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Operating Systems", "Memory Management", "Paging"],
            date: "June 10, 2025",
            author: "Fatima Noor"
          },
          {
            id: 4,
            title: "Deadlocks: Detection and Prevention",
            description: "Understand how deadlocks occur in concurrent systems and learn techniques for prevention, avoidance, and detection.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["Operating Systems", "Deadlocks", "Concurrency"],
            date: "June 11, 2025",
            author: "David Raj"
          },
          {
            id: 5,
            title: "File Systems and Disk Scheduling",
            description: "Learn how file systems are organized and how disk scheduling algorithms like SSTF and LOOK improve performance.",
            readingTime: "5 min",
            level: "Intermediate",
            tags: ["Operating Systems", "File System", "Disk Scheduling"],
            date: "June 12, 2025",
            author: "Kiara Joshi"
          }
        ]
      },
      {
        id: 19,
        title: "Database Management Systems",
        navigationName: "Database_Management_Systems",
        description: "Concepts of relational databases, normalization, and SQL queries.",
        readingTime: 16,
        level: "Intermediate",
        tags: ["Database", "SQL"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to DBMS",
            description: "Get familiar with the basics of databases, DBMS vs RDBMS, and why databases are central to modern applications.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["DBMS", "Database", "Introduction"],
            date: "June 13, 2025",
            author: "Rajeev Narayan"
          },
          {
            id: 2,
            title: "Normalization and Normal Forms",
            description: "Understand the concept of data redundancy, normalization, and various normal forms up to BCNF with examples.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["DBMS", "Normalization", "BCNF"],
            date: "June 14, 2025",
            author: "Sabrina Paul"
          },
          {
            id: 3,
            title: "SQL vs NoSQL Databases",
            description: "Explore the difference between relational and non-relational databases, and when to choose SQL vs NoSQL for projects.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["DBMS", "SQL", "NoSQL"],
            date: "June 15, 2025",
            author: "Mohammed Riaz"
          },
          {
            id: 4,
            title: "Transactions and Concurrency Control",
            description: "Learn about ACID properties, transaction states, and how concurrency control prevents anomalies in multi-user environments.",
            readingTime: "7 min",
            level: "Advanced",
            tags: ["DBMS", "Transactions", "ACID", "Concurrency"],
            date: "June 16, 2025",
            author: "Nikita Jain"
          },
          {
            id: 5,
            title: "Indexing and Query Optimization",
            description: "Understand the importance of indexing in databases and how query optimization improves performance for large datasets.",
            readingTime: "6 min",
            level: "Advanced",
            tags: ["DBMS", "Indexing", "Query Optimization"],
            date: "June 17, 2025",
            author: "Aaron Kapoor"
          }
        ]
      },
     {
        id: 20,
        title: "Networking Basics",
        navigationName: "Networking_Basics",
        description: "Fundamentals of computer networks, protocols, and the internet.",
        readingTime: 15,
        level: "Beginner",
        tags: ["Computer Science", "Networking"],
        subBlogs: [
          {
            id: 1,
            title: "Introduction to Computer Networks",
            description: "Understand what computer networks are, their goals, components, and the different types like LAN, WAN, and MAN.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Networking", "Basics", "LAN", "WAN"],
            date: "June 18, 2025",
            author: "Ritika Sharma"
          },
          {
            id: 2,
            title: "The OSI Model Explained",
            description: "Explore the 7-layer OSI reference model and understand the purpose of each layer from physical to application.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Networking", "OSI Model", "Layers"],
            date: "June 19, 2025",
            author: "Nikhil Thomas"
          },
          {
            id: 3,
            title: "IP Addressing and Subnetting",
            description: "Learn about IPv4 addressing, classes, subnet masks, and how subnetting helps in efficient IP management.",
            readingTime: "7 min",
            level: "Intermediate",
            tags: ["Networking", "IP Address", "Subnetting"],
            date: "June 20, 2025",
            author: "Priya Anand"
          },
          {
            id: 4,
            title: "TCP vs UDP: What’s the Difference?",
            description: "Compare the two key transport layer protocols: TCP and UDP, including reliability, speed, and use cases.",
            readingTime: "5 min",
            level: "Intermediate",
            tags: ["Networking", "TCP", "UDP", "Protocols"],
            date: "June 21, 2025",
            author: "Samar Deshmukh"
          },
          {
            id: 5,
            title: "DNS, DHCP, and NAT Explained",
            description: "Understand how essential networking services like DNS, DHCP, and NAT work behind the scenes to connect you to the internet.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Networking", "DNS", "DHCP", "NAT"],
            date: "June 22, 2025",
            author: "Tanya Mehra"
          }
        ]
      },
    {
        id: 21,
        title: "Software Engineering Principles",
        navigationName: "Software_Engineering_Principles",
        description: "Key principles for designing and developing high-quality software systems.",
        readingTime: 19,
        level: "Intermediate",
        tags: ["Software Engineering", "Best Practices"],
        subBlogs: [
          {
            id: 1,
            title: "Understanding Software Development Life Cycle (SDLC)",
            description: "Learn about the key phases of SDLC including planning, analysis, design, implementation, testing, deployment, and maintenance.",
            readingTime: "6 min",
            level: "Beginner",
            tags: ["Software Engineering", "SDLC", "Development Process"],
            date: "June 23, 2025",
            author: "Meera Venkatesh"
          },
          {
            id: 2,
            title: "Agile vs Waterfall: Choosing the Right Model",
            description: "Explore the differences between Agile and Waterfall development models, and when to use each in software projects.",
            readingTime: "5 min",
            level: "Intermediate",
            tags: ["Software Engineering", "Agile", "Waterfall", "Project Management"],
            date: "June 24, 2025",
            author: "Anand Patel"
          },
          {
            id: 3,
            title: "Principles of Object-Oriented Design",
            description: "Dive into SOLID principles — the five foundational rules of object-oriented software design for writing maintainable code.",
            readingTime: "7 min",
            level: "Advanced",
            tags: ["Software Engineering", "SOLID", "OOP", "Design Principles"],
            date: "June 25, 2025",
            author: "Sneha Reddy"
          },
          {
            id: 4,
            title: "Version Control and Collaboration with Git",
            description: "Understand the importance of version control systems like Git in modern software engineering and team collaboration.",
            readingTime: "5 min",
            level: "Beginner",
            tags: ["Software Engineering", "Git", "Collaboration", "Version Control"],
            date: "June 26, 2025",
            author: "Manoj Kapoor"
          },
          {
            id: 5,
            title: "Code Quality, Testing, and Maintainability",
            description: "Learn the best practices for writing clean code, implementing unit tests, and ensuring long-term maintainability of software.",
            readingTime: "6 min",
            level: "Intermediate",
            tags: ["Software Engineering", "Clean Code", "Testing", "Maintainability"],
            date: "June 27, 2025",
            author: "Rhea Thomas"
          }
        ]
    }
  ];

  interface NewMainBlog {
    id: number;
    title: string;
    navigationName: string;
    description: string;
    readingTime: number;
    level: string;
    tags: string[];
    subBlogs: NewSubBlog[];
  }
  
export  interface NewSubBlog {
    id: number;
    title: string;
    description: string;
    readingTime: string;
    level: string;
    tags: string[];
    date: string;
    author: string;
    content: string;
    likes: number;
    dislikes: number;
  }

  export const blogDataLevel2TotalNew: NewMainBlog[] = [
    {
    id: 1,
    title: "Arrays",
    navigationName: "Arrays",
    description: "Fundamental data structure for storing elements of the same type.",
    readingTime: 5,
    level: "Beginner",
    tags: ["Data Structure", "Programming"],
    subBlogs: [
      {
        id: 1,
        title: "Convert an Array to a Linked List",
        description:
          "Given an array arr[] of size N. The task is to create a linked list from the given array and return the head of the linked list. This tutorial covers multiple approaches including iterative and recursive methods.",
        readingTime: "5 min",
        level: "Intermediate",
        tags: ["Data Structures", "Arrays", "Linked Lists"],
        date: "March 15, 2025",
        author: "Alex Johnson",
        content: `
# 🧩 Convert an Array to a Linked List

**Author:** Alex Johnson  
**Date:** March 15, 2025  
**Reading Time:** ⏱️ 5 min  
**Level:** Intermediate  
**Tags:** \`Data Structures\`, \`Arrays\`, \`Linked Lists\`

---

## 📘 Introduction

Converting an array to a linked list is a classic programming problem that strengthens your understanding of both data structures. Arrays offer random access, while linked lists offer dynamic memory and efficient insertions/removals. This tutorial explores both **iterative** and **recursive** methods to achieve this transformation.

---

## 🔍 Problem Statement

Given an array \`arr[]\` of size \`N\`, your task is to construct a linked list using the elements of the array in the same order and return the head of the linked list.

---

## 🚀 Approaches

### ✅ Iterative Method

The most straightforward approach is to traverse the array and create a new linked list node for each element.

\`\`\`javascript
function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = { val: arr[0], next: null };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }
  return head;
}
\`\`\`

### 🔁 Recursive Method

A more elegant (but stack-intensive) method is recursion:

\`\`\`javascript
function arrayToLinkedListRecursive(arr, index = 0) {
  if (index >= arr.length) return null;
  return {
    val: arr[index],
    next: arrayToLinkedListRecursive(arr, index + 1)
  };
}
\`\`\`

---

## 🧠 Final Thoughts

Whether you prefer the iterative method's clarity or the recursive method's elegance, understanding both gives you a solid grasp of how arrays and linked lists interact. Mastering such problems will enhance your confidence in solving complex data structure challenges.

---

Happy Coding! 🚀
        `,
        likes: 100,
      dislikes: 10
      },
      {
        id: 2,
        title: "Find the Majority Element in an Array",
        description:
          "Learn how to find the majority element (appearing more than N/2 times) using techniques like the Boyer-Moore Voting Algorithm. This is a frequently asked interview question.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Algorithms", "Arrays", "Searching"],
        date: "March 16, 2025",
        author: "Emily Carter",
        content: `
# 🕵️ Find the Majority Element in an Array

**Author:** Emily Carter  
**Date:** March 16, 2025  
**Reading Time:** ⏱️ 6 min  
**Level:** Intermediate  
**Tags:** \`Algorithms\`, \`Arrays\`, \`Searching\`

---

## 📘 Introduction

Finding the **majority element** in an array—an element that appears more than ⌊N/2⌋ times—is a classic algorithmic problem and a common interview favorite. One of the most efficient techniques to solve this is the **Boyer-Moore Voting Algorithm**, which operates in linear time and constant space.

---

## 🔍 Problem Statement

Given an array of size \`N\`, identify the element that appears more than \`N/2\` times. It's guaranteed that such an element exists.

---

## 🚀 Approaches

### 🧠 Brute Force

Count occurrences of each element using a hashmap.

- **Time Complexity:** O(N)  
- **Space Complexity:** O(N)

\`\`\`javascript
function majorityElement(arr) {
  const count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > arr.length / 2) return num;
  }
}
\`\`\`

### ⚡ Boyer-Moore Voting Algorithm

This optimized approach works in O(N) time and O(1) space.

\`\`\`javascript
function majorityElement(arr) {
  let count = 0, candidate = null;
  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
}
\`\`\`

---

## 🧪 Example

**Input:** \[3, 3, 4, 2, 3, 3, 3, 5\]  
**Output:** \`3\` (appears 5 times out of 8)

---

## 🧠 Final Thoughts

The Boyer-Moore algorithm is a brilliant example of how mathematical intuition can simplify problems dramatically. Mastering it will help you tackle a wide range of array-based interview questions more confidently.

---

Happy Coding! 🚀
        `,
        likes: 100,
      dislikes: 10
      },
      {
        id: 3,
        title: "Kadane's Algorithm: Maximum Subarray Sum",
        description:
          "This article explains Kadane's Algorithm to find the maximum sum of a contiguous subarray in linear time. Includes a dry-run example and edge case handling.",
        readingTime: "7 min",
        level: "Advanced",
        tags: ["Dynamic Programming", "Arrays", "Algorithms"],
        date: "March 17, 2025",
        author: "Michael Chen",
        content: `
# ⚡ Kadane's Algorithm: Maximum Subarray Sum

**Author:** Michael Chen  
**Date:** March 17, 2025  
**Reading Time:** ⏱️ 7 min  
**Level:** Advanced  
**Tags:** \`Dynamic Programming\`, \`Arrays\`, \`Algorithms\`

---

## 📘 Introduction

Kadane's Algorithm is a powerful and elegant solution to the classic **Maximum Subarray Problem** — finding the contiguous subarray with the highest sum in an array of integers. The key advantage of Kadane's Algorithm is that it works in **linear time**.

---

## 🔍 Problem Statement

Given an array of integers (both positive and negative), return the maximum sum of a contiguous subarray.

---

## 🚀 Kadane's Algorithm

The idea is to iterate through the array and at each step, determine whether to add the current element to the existing subarray or start a new subarray from the current element.

### 🔣 Algorithm Steps:

1. Initialize two variables:  
   - \`maxSum = arr[0]\`  
   - \`currentSum = arr[0]\`

2. Loop through the array from index 1:
   - \`currentSum = max(arr[i], currentSum + arr[i])\`
   - \`maxSum = max(maxSum, currentSum)\`

3. Return \`maxSum\`

---

## 💡 Code (JavaScript)

\`\`\`javascript
function maxSubArray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
\`\`\`

---

## 🧪 Example

**Input:** \`[-2, 1, -3, 4, -1, 2, 1, -5, 4]\`  
**Output:** \`6\`  
**Explanation:** The subarray \`[4, -1, 2, 1]\` has the maximum sum = 6.

---

## ⚠️ Edge Cases

- All negative numbers: Kadane's still works, returns the least negative number.
- Single element array: Returns that single element.

---

## 🧠 Final Thoughts

Kadane's Algorithm is a great introduction to **dynamic programming**. Its beauty lies in its simplicity and efficiency. Understanding it gives you a foundation for tackling more complex DP problems.

---

Happy Coding! 🚀
        `,
        likes: 100,
      dislikes: 10
      },
      {
        id: 4,
        title: "Rotate an Array by K Positions",
        description:
          "Explore different methods to rotate an array to the right by K steps. Covers the reversal algorithm and auxiliary space-based methods with time complexity analysis.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Arrays", "Algorithms", "Two Pointers"],
        date: "March 18, 2025",
        author: "Sofia Lee",
        content: `
# 🔄 Rotate an Array by K Positions

**Author:** Sofia Lee  
**Date:** March 18, 2025  
**Reading Time:** ⏱️ 5 min  
**Level:** Beginner  
**Tags:** \`Arrays\`, \`Algorithms\`, \`Two Pointers\`

---

## 📘 Introduction

Rotating an array by \`K\` positions is a common interview question that tests your understanding of array manipulation and algorithmic thinking. In this post, we’ll cover multiple approaches to rotate an array to the **right by K steps**, including the **reversal algorithm** and a **space-based method**.

---

## 🔍 Problem Statement

Given an array \`arr[]\` and an integer \`K\`, rotate the array to the right by \`K\` steps.

---

## 🚀 Approaches

### 🧠 1. Using Extra Space

Store the last \`K\` elements, shift the rest, then append back.

- **Time Complexity:** O(N)  
- **Space Complexity:** O(K)

\`\`\`javascript
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  const rotated = arr.slice(n - k).concat(arr.slice(0, n - k));
  return rotated;
}
\`\`\`

---

### 🔄 2. Reversal Algorithm (In-Place)

- Reverse the entire array  
- Reverse the first \`K\` elements  
- Reverse the rest

- **Time Complexity:** O(N)  
- **Space Complexity:** O(1)

\`\`\`javascript
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateArrayInPlace(arr, k) {
  const n = arr.length;
  k = k % n;
  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
}
\`\`\`

---

## 🧪 Example

**Input:** \`[1, 2, 3, 4, 5, 6, 7], K = 3\`  
**Output:** \`[5, 6, 7, 1, 2, 3, 4]\`

---

## 🧠 Final Thoughts

This simple problem gives a great opportunity to compare trade-offs between space and time complexity. Mastering array rotations helps strengthen your core algorithmic foundations — especially with **two-pointer techniques**.

---

Happy Coding! 🚀
        `,
        likes: 100,
      dislikes: 10
      },
      {
        id: 5,
        title: "Two Sum Problem Using Hashing",
        description:
          "Solve the classic Two Sum problem efficiently using hash maps. Learn the brute force, sorting + two pointers, and hashing approaches with code snippets.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Arrays", "Hashing", "Interview Problems"],
        date: "March 19, 2025",
        author: "David Patel",
        content: `
# ➕ Two Sum Problem Using Hashing

**Author:** David Patel  
**Date:** March 19, 2025  
**Reading Time:** ⏱️ 6 min  
**Level:** Beginner  
**Tags:** \`Arrays\`, \`Hashing\`, \`Interview Problems\`

---

## 📘 Introduction

The **Two Sum** problem is a classic that every aspiring programmer encounters early on. Given an array and a target, you must find two elements whose sum equals the target. While the brute force approach is intuitive, hashing offers a much more efficient solution.

---

## 🔍 Problem Statement

Given an array \`arr[]\` and a target value \`T\`, return the indices of two numbers such that \`arr[i] + arr[j] == T\`.

---

## 🚀 Approaches

### 💡 1. Brute Force

Check every possible pair.

- **Time Complexity:** O(N²)  
- **Space Complexity:** O(1)

\`\`\`javascript
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}
\`\`\`

---

### 🧠 2. Sorting + Two Pointers

Sort array, use two pointers from both ends. But **won’t return indices from original array** unless you store them.

- **Time Complexity:** O(N log N)  
- **Space Complexity:** O(N) (for index tracking)

---

### ⚡ 3. Hashing (Efficient)

Use a hash map to store elements and their indices as you iterate.

- **Time Complexity:** O(N)  
- **Space Complexity:** O(N)

\`\`\`javascript
function twoSum(arr, target) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    map[arr[i]] = i;
  }
}
\`\`\`

---

## 🧪 Example

**Input:** \`[2, 7, 11, 15], target = 9\`  
**Output:** \`[0, 1]\`  
**Explanation:** \`2 + 7 = 9\`

---

## 🧠 Final Thoughts

Hashing provides a clean and optimized way to solve the Two Sum problem. Knowing when and how to use hash maps is essential for cracking coding interviews and writing efficient code.

---

Happy Coding! 🚀
      `,
      likes: 100,
    dislikes: 10
      },
    ],
  },
  {
    id: 2,
    title: "Introduction to DSA",
    navigationName: "Introduction_to_DSA",
    description: "Primer on Data Structures and Algorithms.",
    readingTime: 8,
    level: "Beginner",
    tags: ["DSA", "Computer Science"],
    subBlogs: [
      {
        id: 1,
        title: "What is Data Structures and Algorithms (DSA)?",
        description:
          "This article introduces the basics of Data Structures and Algorithms, why they matter in programming, and how they are used to solve real-world problems efficiently.",
        readingTime: "4 min",
        level: "Beginner",
        tags: ["DSA", "Foundations", "Algorithms", "Data Structures"],
        date: "March 20, 2025",
        author: "Nina Sharma",
        content: `
# What is Data Structures and Algorithms (DSA)?
*By Nina Sharma • Beginner • 4 min read • March 20, 2025*

---

### Introduction

In the world of software development, **Data Structures and Algorithms (DSA)** are the building blocks that power the efficiency and effectiveness of code. Whether you're developing a simple application or designing a complex system, understanding DSA is crucial to solving problems in the best possible way.

---

### Why are DSA Important?

Imagine having to find a contact in a phonebook. You can either scan every single name (inefficient) or you can jump to the right section using alphabetical order (efficient). This real-world example mirrors the importance of DSA in programming. 

Here’s why learning DSA is essential:
- **Efficiency**: The right algorithm and data structure can drastically reduce time and space complexity.
- **Problem Solving**: DSA enhances your ability to think logically and break down problems into manageable parts.
- **Coding Interviews**: Top tech companies assess DSA skills to evaluate a candidate's ability to optimize solutions.
- **Scalability**: Writing code that performs well as data grows is key to building robust systems.

---

### What are Data Structures?

Data structures are ways to store and organize data so it can be used efficiently. Common types include:
- **Arrays and Lists**: Store items in a sequential order.
- **Stacks and Queues**: Follow specific orderings (LIFO and FIFO).
- **Trees and Graphs**: Useful for hierarchical and networked data.
- **Hash Tables**: Provide fast data access via key-value pairs.

Each structure serves a unique purpose, and choosing the right one can make a big difference in performance.

---

### What are Algorithms?

Algorithms are step-by-step procedures to perform tasks or solve problems. Examples include:
- **Searching** (e.g., Binary Search)
- **Sorting** (e.g., Merge Sort, Quick Sort)
- **Pathfinding** (e.g., Dijkstra’s Algorithm)
- **Recursion & Dynamic Programming**

An efficient algorithm is one that gets the job done using the least amount of time and space.

---

### Real-World Use Cases

- **Search Engines** use graph algorithms to rank and connect web pages.
- **Navigation Apps** rely on shortest path algorithms to provide optimal routes.
- **Social Media** platforms use data structures like graphs to map relationships and suggest connections.

---

### Getting Started with DSA

For beginners, start with the basics:
1. Learn the time and space complexity (Big-O notation).
2. Master foundational structures like arrays, linked lists, and stacks.
3. Practice solving problems on platforms like LeetCode or HackerRank.
4. Gradually move to advanced topics like trees, graphs, and dynamic programming.

---

### Tags
\`DSA\` \`Foundations\` \`Algorithms\` \`Data Structures\`

---

Data Structures and Algorithms are not just academic topics; they are vital tools that empower you to write clean, fast, and reliable code. Whether you're just starting your journey or looking to sharpen your skills, understanding DSA is a foundational step toward becoming a great programmer.

---

        `,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Time and Space Complexity Simplified",
        description:
          "Learn the fundamentals of time and space complexity to analyze the efficiency of your code. Includes Big O, Omega, and Theta notations with examples.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Complexity Analysis", "DSA", "Big O"],
        date: "March 21, 2025",
        author: "Raj Mehta",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Understanding Arrays and Linked Lists",
        description:
          "Get a beginner-friendly comparison of arrays and linked lists, including their structure, operations, pros and cons, and real-world use cases.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["DSA", "Arrays", "Linked Lists", "Data Structures"],
        date: "March 22, 2025",
        author: "Lily Anderson",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Types of Data Structures Explained",
        description:
          "Explore linear and non-linear data structures like arrays, stacks, queues, trees, and graphs. Learn their use cases and how they are implemented.",
        readingTime: "7 min",
        level: "Beginner",
        tags: ["DSA", "Data Structures", "Tree", "Graph", "Stack"],
        date: "March 23, 2025",
        author: "Omar Hassan",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Why Learn DSA for Placements?",
        description:
          "Understand the importance of DSA in coding interviews and competitive programming. This guide explains how mastering DSA can help you crack placements.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Placements", "DSA", "Career", "Interview Prep"],
        date: "March 24, 2025",
        author: "Grace Miller",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
 {
    id: 3,
    title: "Binary Search",
    navigationName: "Binary_Search",
    description: "Efficient searching algorithm for sorted arrays.",
    readingTime: 6,
    level: "Intermediate",
    tags: ["Algorithm", "Searching"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Binary Search",
        description:
          "Learn the core idea behind binary search — a divide and conquer algorithm that efficiently searches sorted arrays in O(log N) time. Includes dry runs and edge cases.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Binary Search", "Algorithms", "Searching", "DSA"],
        date: "March 25, 2025",
        author: "Karan Verma",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Binary Search on a Sorted Array",
        description:
          "Understand how to implement binary search on a sorted array using both iterative and recursive approaches. Common pitfalls and debugging tips included.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Binary Search", "Arrays", "Algorithms"],
        date: "March 26, 2025",
        author: "Elena Morris",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Binary Search on Answer: Lower and Upper Bound",
        description:
          "Explore advanced binary search techniques to find lower and upper bounds, floor, ceiling, and first/last occurrences in a sorted array. Useful for range queries.",
        readingTime: "7 min",
        level: "Advanced",
        tags: ["Binary Search", "Range Queries", "Lower Bound", "Upper Bound"],
        date: "March 27, 2025",
        author: "Abdul Rahman",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Binary Search in Rotated Sorted Arrays",
        description:
          "Learn how to apply binary search to rotated sorted arrays, such as in LeetCode problems. Includes logic for finding the pivot and searching accordingly.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["Binary Search", "Rotated Array", "Interview Problems"],
        date: "March 28, 2025",
        author: "Sophia Kim",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Binary Search in Infinite Sorted Arrays",
        description:
          "Understand how to perform binary search in an infinite or unknown-size sorted array using exponential search and binary logic within bounds.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["Binary Search", "Infinite Arrays", "Algorithms"],
        date: "March 29, 2025",
        author: "Daniel Cruz",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 4,
    title: "Binary Search Tree",
    navigationName: "Binary_Search_Tree",
    description:
      "Hierarchical data structure with efficient search, insertion, and deletion operations.",
    readingTime: 10,
    level: "Advanced",
    tags: ["Data Structure", "Tree"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Binary Search Trees (BST)",
        description:
          "Learn the basic structure and properties of Binary Search Trees. Understand how BSTs maintain order and allow efficient insertion, deletion, and lookup operations.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["BST", "Trees", "DSA", "Data Structures"],
        date: "March 30, 2025",
        author: "Ava Wilson",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Insertion and Deletion in BST",
        description:
          "Understand how to insert and delete nodes in a Binary Search Tree while maintaining the BST property. Includes recursive and iterative approaches.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["BST", "Tree Operations", "Algorithms"],
        date: "March 31, 2025",
        author: "James O'Connor",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Inorder, Preorder, and Postorder Traversal of BST",
        description:
          "Learn how to perform various tree traversals on a Binary Search Tree and understand their significance. Includes code examples and visual walkthroughs.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["BST", "Tree Traversal", "DFS"],
        date: "April 1, 2025",
        author: "Riya Banerjee",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Validate a Binary Search Tree",
        description:
          "Explore methods to check whether a given binary tree is a valid BST. Covers recursive bounds checking, in-order traversal, and edge case handling.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["BST", "Validation", "Interview Problems"],
        date: "April 2, 2025",
        author: "Leo Martinez",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Lowest Common Ancestor in a BST",
        description:
          "Learn how to find the lowest common ancestor of two nodes in a Binary Search Tree. This is a common interview question solved efficiently using BST properties.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["BST", "LCA", "Algorithms"],
        date: "April 3, 2025",
        author: "Isabella Rossi",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 5,
    title: "Binary Tree",
    navigationName: "Binary_Tree",
    description: "Tree data structure where each node has at most two children.",
    readingTime: 7,
    level: "Intermediate",
    tags: ["Data Structure", "Tree"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Binary Trees",
        description:
          "Get started with the fundamental concepts of binary trees, their structure, types (full, complete, perfect), and use cases in data organization and processing.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Binary Tree", "DSA", "Tree Basics"],
        date: "April 4, 2025",
        author: "Noah Park",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Binary Tree Traversal Techniques",
        description:
          "Learn about the different traversal methods in binary trees—Inorder, Preorder, Postorder, and Level Order—with code examples and visual representation.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Binary Tree", "Traversal", "DFS", "BFS"],
        date: "April 5, 2025",
        author: "Chloe Singh",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Height and Depth in a Binary Tree",
        description:
          "Understand how to calculate the height and depth of nodes in a binary tree. Includes recursive solutions and time complexity analysis.",
        readingTime: "5 min",
        level: "Intermediate",
        tags: ["Binary Tree", "Height", "Depth", "Recursion"],
        date: "April 6, 2025",
        author: "Zaid Khan",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Construct Binary Tree from Inorder and Preorder",
        description:
          "Reconstruct a binary tree from given inorder and preorder traversal arrays. This is a common recursive problem in interviews and coding contests.",
        readingTime: "7 min",
        level: "Advanced",
        tags: ["Binary Tree", "Recursion", "Tree Construction"],
        date: "April 7, 2025",
        author: "Mei Tanaka",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Check if a Binary Tree is Balanced",
        description:
          "Learn how to determine whether a binary tree is height-balanced using recursive approaches. Includes optimized solutions with early stopping.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Binary Tree", "Balanced Tree", "Interview Problem"],
        date: "April 8, 2025",
        author: "Ethan Rivera",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 6,
    title: "Bit Manipulation",
    navigationName: "Bit_Manipulation",
    description: "Manipulating individual bits to perform operations.",
    readingTime: 12,
    level: "Advanced",
    tags: ["Low Level", "Programming"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Bit Manipulation",
        description:
          "Learn the fundamentals of bitwise operations including AND, OR, XOR, NOT, and bit shifts. This article sets the foundation for solving problems using bit manipulation.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Bit Manipulation", "Bitwise Operators", "DSA"],
        date: "April 9, 2025",
        author: "Anaya Desai",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Check if a Number is Power of Two",
        description:
          "Explore efficient bit manipulation techniques to check if a number is a power of two using a single line of code and binary properties.",
        readingTime: "4 min",
        level: "Beginner",
        tags: ["Bit Manipulation", "Math", "Interview Problem"],
        date: "April 10, 2025",
        author: "Jaden Brooks",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Find the Only Non-Repeating Element",
        description:
          "Use the XOR operation to find the element that appears once while all others appear twice. An elegant O(N) and O(1) space solution.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Bit Manipulation", "XOR", "Arrays"],
        date: "April 11, 2025",
        author: "Haruki Yamamoto",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Count the Number of Set Bits",
        description:
          "Learn how to count the number of 1's (set bits) in the binary representation of an integer using Brian Kernighan’s Algorithm and inbuilt functions.",
        readingTime: "5 min",
        level: "Intermediate",
        tags: ["Bit Manipulation", "Set Bits", "Binary"],
        date: "April 12, 2025",
        author: "Lara Müller",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Subset Generation Using Bitmasking",
        description:
          "Generate all possible subsets of a set using bitmasking. This approach is especially useful in solving subset sum, combinatorics, and DP problems.",
        readingTime: "7 min",
        level: "Advanced",
        tags: ["Bit Manipulation", "Bitmasking", "Combinatorics"],
        date: "April 13, 2025",
        author: "Oluwaseun Adeyemi",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 7,
    title: "C++",
    navigationName: "C_Plus_Plus",
    description: "Powerful programming language often used for DSA implementations.",
    readingTime: 15,
    level: "Intermediate",
    tags: ["Programming Language", "DSA"],
    subBlogs: [
      {
        id: 1,
        title: "Understanding the Basics of C++",
        description:
          "An introduction to the C++ language, covering its history, syntax, and how it's used in both competitive programming and software development.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["C++", "Programming Basics", "Syntax"],
        date: "April 14, 2025",
        author: "Rehan Kapoor",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Object-Oriented Programming in C++",
        description:
          "Explore the four pillars of OOP in C++—Encapsulation, Abstraction, Inheritance, and Polymorphism—along with real-world use cases.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["C++", "OOP", "Classes", "Objects"],
        date: "April 15, 2025",
        author: "Samantha Lee",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "STL (Standard Template Library) in C++",
        description:
          "A deep dive into the most commonly used STL components like vectors, maps, sets, stacks, and algorithms. Essential for coding interviews and contests.",
        readingTime: "7 min",
        level: "Intermediate",
        tags: ["C++", "STL", "Vectors", "Maps", "Sets"],
        date: "April 16, 2025",
        author: "Dmitri Ivanov",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Memory Management in C++",
        description:
          "Learn about dynamic memory allocation using new/delete, pointers, references, and how to avoid memory leaks in modern C++.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["C++", "Memory", "Pointers", "Dynamic Allocation"],
        date: "April 17, 2025",
        author: "Fatima Zahra",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Exception Handling in C++",
        description:
          "Understand how to handle runtime errors in C++ using try, catch, and throw. Learn best practices and when to use custom exceptions.",
        readingTime: "5 min",
        level: "Intermediate",
        tags: ["C++", "Exception Handling", "Error Handling"],
        date: "April 18, 2025",
        author: "Marco Ferraro",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 8,
    title: "CS Core",
    navigationName: "CS_Core",
    description: "Essential concepts in Computer Science.",
    readingTime: 20,
    level: "Beginner",
    tags: ["Computer Science", "Fundamentals"],
    subBlogs: [
      {
        id: 1,
        title: "Operating Systems: Concepts and Scheduling",
        description:
          "Understand the fundamentals of operating systems including process management, scheduling algorithms (FCFS, SJF, Round Robin), and concurrency basics.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["CS Core", "Operating Systems", "Scheduling", "Concurrency"],
        date: "April 19, 2025",
        author: "Anjali Raj",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Database Management Systems (DBMS) Basics",
        description:
          "Dive into key DBMS concepts such as relational models, SQL, normalization, transactions, and indexing—crucial for backend and system design interviews.",
        readingTime: "7 min",
        level: "Intermediate",
        tags: ["CS Core", "DBMS", "SQL", "Transactions"],
        date: "April 20, 2025",
        author: "Kabir Das",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Computer Networks: Protocols and Layers",
        description:
          "Explore how the internet works with core concepts like OSI vs TCP/IP models, protocols (IP, TCP, HTTP), and network devices with real-world analogies.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["CS Core", "Computer Networks", "TCP/IP", "Protocols"],
        date: "April 21, 2025",
        author: "Lina Cheng",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Compiler Design: Phases and Parsing",
        description:
          "Learn how compilers work under the hood, from lexical analysis to syntax and semantic analysis, parsing techniques, and code generation.",
        readingTime: "7 min",
        level: "Advanced",
        tags: ["CS Core", "Compiler Design", "Parsing", "Lexical Analysis"],
        date: "April 22, 2025",
        author: "Rohit Nayak",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Computer Architecture and Organization",
        description:
          "Understand how computers process instructions with topics like instruction cycles, pipelining, memory hierarchy, and RISC vs CISC architecture.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["CS Core", "Computer Architecture", "Memory", "Instruction Cycle"],
        date: "April 23, 2025",
        author: "Emily Laurent",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 9,
    title: "Data Structures",
    navigationName: "Data_Structures",
    description: "Fundamental building blocks for organizing and storing data efficiently.",
    readingTime: 9,
    level: "Beginner",
    tags: ["Data Structure", "Programming"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Data Structures",
        description:
          "Learn what data structures are, why they’re important, and how they help in organizing and managing data efficiently for algorithmic solutions.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Data Structures", "DSA", "Foundations"],
        date: "April 24, 2025",
        author: "Ayaan Mehta",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Arrays vs Linked Lists",
        description:
          "Compare two fundamental linear data structures—arrays and linked lists. Understand their operations, pros and cons, and where to use each.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Data Structures", "Arrays", "Linked Lists", "Comparison"],
        date: "April 25, 2025",
        author: "Kiara Thomas",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Understanding Stacks and Queues",
        description:
          "Explore stack and queue data structures, their real-life applications, and how they are implemented using arrays or linked lists.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Data Structures", "Stacks", "Queues", "Linear Structures"],
        date: "April 26, 2025",
        author: "Zubair Ali",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Trees and Their Applications",
        description:
          "Dive into non-linear data structures like binary trees, BSTs, and heaps. Learn how they are used in real-world applications like file systems and priority queues.",
        readingTime: "7 min",
        level: "Intermediate",
        tags: ["Data Structures", "Trees", "Heaps", "Non-Linear"],
        date: "April 27, 2025",
        author: "Sofia Nair",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Hash Tables and Collision Handling",
        description:
          "Understand how hash tables work, their importance in constant-time access, and the methods used to handle collisions such as chaining and open addressing.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["Data Structures", "Hashing", "Hash Tables", "Collisions"],
        date: "April 28, 2025",
        author: "Leo Dasgupta",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 10,
    title: "Graph Theory",
    navigationName: "Graph_Theory",
    description: "Mathematical structures used to model pairwise relations between objects.",
    readingTime: 14,
    level: "Advanced",
    tags: ["Algorithm", "Graph"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Graph Theory",
        description:
          "Understand what graphs are, their types (directed, undirected, weighted, unweighted), and real-world applications like maps and social networks.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Graph Theory", "Graphs", "DSA", "Introduction"],
        date: "April 29, 2025",
        author: "Nina Prakash",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Graph Representations: Adjacency List vs Matrix",
        description:
          "Learn how to represent graphs efficiently using adjacency lists and matrices, and understand when to use which based on the problem type.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Graph Theory", "Adjacency List", "Adjacency Matrix"],
        date: "April 30, 2025",
        author: "Omar Farooq",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Depth First Search (DFS) and Breadth First Search (BFS)",
        description:
          "Explore the two primary graph traversal algorithms—DFS and BFS—along with their applications in pathfinding, cycle detection, and connectivity checks.",
        readingTime: "7 min",
        level: "Intermediate",
        tags: ["Graph Theory", "DFS", "BFS", "Traversal"],
        date: "May 1, 2025",
        author: "Priya Shankar",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Detecting Cycles in Graphs",
        description:
          "Learn techniques to detect cycles in directed and undirected graphs using DFS and Union-Find, with special attention to interview questions.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Graph Theory", "Cycle Detection", "Union Find", "DFS"],
        date: "May 2, 2025",
        author: "Jason Wu",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Topological Sorting in Directed Acyclic Graphs (DAGs)",
        description:
          "Understand how to perform topological sorting using DFS and Kahn’s Algorithm, and explore its use cases in scheduling and dependency resolution.",
        readingTime: "7 min",
        level: "Advanced",
        tags: ["Graph Theory", "Topological Sort", "DAG", "Kahn's Algorithm"],
        date: "May 3, 2025",
        author: "Tanya Bhatt",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 11,
    title: "Dynamic Programming",
    navigationName: "Dynamic_Programming",
    description:
      "Optimization technique used to solve complex problems by breaking them into simpler subproblems.",
    readingTime: 18,
    level: "Advanced",
    tags: ["Algorithm", "Optimization"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Dynamic Programming",
        description:
          "Learn the core idea behind dynamic programming—solving complex problems by breaking them down into overlapping subproblems and using memoization or tabulation.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Dynamic Programming", "DP", "Memoization", "Tabulation"],
        date: "May 4, 2025",
        author: "Neha Vardhan",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Top-Down vs Bottom-Up DP",
        description:
          "Understand the difference between memoization (top-down) and tabulation (bottom-up) approaches with pros, cons, and when to use each effectively.",
        readingTime: "5 min",
        level: "Intermediate",
        tags: ["Dynamic Programming", "Top-Down", "Bottom-Up", "Optimization"],
        date: "May 5, 2025",
        author: "Ishaan Rao",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "0/1 Knapsack Problem Explained",
        description:
          "One of the classic DP problems. Learn how to approach and solve the 0/1 Knapsack problem using recursion, memoization, and tabulation.",
        readingTime: "7 min",
        level: "Intermediate",
        tags: ["Dynamic Programming", "Knapsack", "Optimization", "DP Patterns"],
        date: "May 6, 2025",
        author: "Selena Roy",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Longest Common Subsequence (LCS)",
        description:
          "Explore how to solve LCS problems using DP—an important pattern behind many string problems like edit distance and subsequence matching.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Dynamic Programming", "LCS", "Strings", "Subsequences"],
        date: "May 7, 2025",
        author: "Anirudh Jain",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Optimizing Space in Dynamic Programming",
        description:
          "Learn how to reduce the space complexity of DP solutions using rolling arrays and space-efficient techniques without sacrificing clarity.",
        readingTime: "5 min",
        level: "Advanced",
        tags: ["Dynamic Programming", "Space Optimization", "Advanced DP"],
        date: "May 8, 2025",
        author: "Maya Ghosh",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 12,
    title: "Heap Data Structure",
    navigationName: "Heap_Data_Structure",
    description: "Binary tree-based structure used for priority queues.",
    readingTime: 11,
    level: "Intermediate",
    tags: ["Data Structure", "Heap"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Heaps",
        description:
          "Understand what heaps are, the difference between min-heaps and max-heaps, and how they are used in efficient priority queue implementations.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Heap", "Priority Queue", "Data Structures"],
        date: "May 9, 2025",
        author: "Meera Patel",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Heap Operations: Insert and Delete",
        description:
          "Explore how to insert and delete elements in a binary heap and maintain the heap property after every operation.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Heap", "Insert", "Delete", "Binary Heap"],
        date: "May 10, 2025",
        author: "Rafael Costa",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Heap Sort Algorithm",
        description:
          "Learn how the Heap Sort algorithm works, its time complexity, and how it leverages the heap structure for efficient sorting.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Heap", "Heap Sort", "Sorting Algorithms"],
        date: "May 11, 2025",
        author: "Sana Farooq",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Applications of Heaps",
        description:
          "Dive into real-world and competitive programming problems where heaps shine, such as finding the K largest/smallest elements.",
        readingTime: "5 min",
        level: "Intermediate",
        tags: ["Heap", "Applications", "Top K Elements"],
        date: "May 12, 2025",
        author: "Noah Kim",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Implementing Heaps Using STL",
        description:
          "Learn how to use priority queues in C++ STL and Python's `heapq` module to implement heap operations efficiently.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Heap", "STL", "C++", "Python"],
        date: "May 13, 2025",
        author: "Ritika Sharma",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 13,
    title: "Recursion",
    navigationName: "Recursion",
    description: "Problem-solving technique where a function calls itself.",
    readingTime: 10,
    level: "Intermediate",
    tags: ["Algorithm", "Programming"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Recursion",
        description:
          "Understand what recursion is, how the call stack works, and how to identify base and recursive cases in problems.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Recursion", "Call Stack", "Programming Basics"],
        date: "May 14, 2025",
        author: "Aditya Iyer",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Tail Recursion vs Head Recursion",
        description:
          "Explore different types of recursion—tail, head, linear, and tree recursion—and learn their differences and optimizations.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Recursion", "Tail Recursion", "Optimization"],
        date: "May 15, 2025",
        author: "Luisa Mendez",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Classic Problems Solved Using Recursion",
        description:
          "Go through classic recursive problems like factorial, Fibonacci, and power calculation to build a solid foundation.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Recursion", "Classic Problems", "Fibonacci"],
        date: "May 16, 2025",
        author: "Nathan Brooks",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Backtracking and Recursion",
        description:
          "Learn how recursion powers backtracking algorithms like N-Queens, Sudoku Solver, and Subset Generation.",
        readingTime: "7 min",
        level: "Advanced",
        tags: ["Recursion", "Backtracking", "N-Queens"],
        date: "May 17, 2025",
        author: "Tina Kapoor",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Converting Recursion to Iteration",
        description:
          "Understand when and how to replace recursive solutions with iterative ones to avoid stack overflow and improve performance.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["Recursion", "Iteration", "Optimization"],
        date: "May 18, 2025",
        author: "James Dsouza",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 14,
    title: "Sorting Algorithms",
    navigationName: "Sorting_Algorithms",
    description: "Techniques to arrange elements in a specific order.",
    readingTime: 9,
    level: "Beginner",
    tags: ["Algorithm", "Sorting"],
    subBlogs: [
      {
        id: 1,
        title: "Overview of Sorting Algorithms",
        description:
          "Get a bird's-eye view of popular sorting algorithms, their time/space complexities, and stable vs unstable sorting.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Sorting", "Algorithms", "DSA Basics"],
        date: "May 19, 2025",
        author: "Elena Vasquez",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Bubble Sort, Selection Sort, and Insertion Sort",
        description:
          "Explore elementary sorting algorithms with visual intuition, dry runs, and when (or when not) to use them.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Sorting", "Bubble Sort", "Insertion Sort"],
        date: "May 20, 2025",
        author: "Rishi Agarwal",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Merge Sort and Quick Sort Explained",
        description:
          "Learn divide-and-conquer sorting algorithms—merge sort and quick sort—with detailed breakdowns and comparisons.",
        readingTime: "7 min",
        level: "Intermediate",
        tags: ["Sorting", "Merge Sort", "Quick Sort"],
        date: "May 21, 2025",
        author: "Zoey Chen",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Counting Sort and Radix Sort",
        description:
          "Understand non-comparison-based sorting algorithms and how they achieve linear time for constrained input ranges.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["Sorting", "Counting Sort", "Radix Sort"],
        date: "May 22, 2025",
        author: "Farhan Siddiqui",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Best Sorting Algorithm for Every Scenario",
        description:
          "Explore which sorting algorithm to use based on input size, data distribution, and memory constraints.",
        readingTime: "5 min",
        level: "Advanced",
        tags: ["Sorting", "Comparative Analysis", "Efficiency"],
        date: "May 23, 2025",
        author: "Chloe Martin",
        content: ``,
        likes: 10,
        dislikes: 12
      },
    ],
  },
  {
    id: 15,
    title: "Greedy Algorithms",
    navigationName: "Greedy_Algorithms",
    description: "Algorithmic paradigm that makes locally optimal choices at each step.",
    readingTime: 13,
    level: "Intermediate",
    tags: ["Algorithm", "Optimization"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Greedy Algorithms",
        description: "Understand the greedy paradigm, when it works, and how to identify problems where local choices lead to optimal global solutions.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Greedy", "Algorithms", "Optimization"],
        date: "May 24, 2025",
        author: "Karan Shah",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Activity Selection and Job Scheduling",
        description: "Explore classic greedy problems like activity selection and job sequencing with deadlines using sorting and greedy choices.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Greedy", "Scheduling", "Sorting"],
        date: "May 25, 2025",
        author: "Aarushi Rana",content: ``,
        likes: 10,
        dislikes: 12

      },
      {
        id: 3,
        title: "Fractional Knapsack Problem",
        description: "Learn how greedy works for the fractional version of the knapsack problem, and why it fails for the 0/1 version.",
        readingTime: "5 min",
        level: "Intermediate",
        tags: ["Greedy", "Knapsack", "Optimization"],
        date: "May 26, 2025",
        author: "Tobias Klein",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Huffman Encoding using Greedy",
        description: "Understand how greedy algorithms are used in constructing Huffman trees for data compression problems.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["Greedy", "Huffman Coding", "Data Compression"],
        date: "May 27, 2025",
        author: "Isha Chauhan",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Greedy vs Dynamic Programming",
        description: "Compare greedy and DP approaches in real problems, and understand how to choose the right paradigm for a given problem.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["Greedy", "DP", "Comparison"],
        date: "May 28, 2025",
        author: "Daniel Weber",
        content: ``,
        likes: 10,
        dislikes: 12
      }
    ]
  },
  {
    id: 16,
    title: "Backtracking",
    navigationName: "Backtracking",
    description: "Algorithmic technique for solving problems recursively by trying different possibilities.",
    readingTime: 17,
    level: "Advanced",
    tags: ["Algorithm", "Optimization"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Backtracking",
        description: "Understand the core idea behind backtracking: exploring all possible solutions by making choices and undoing them if needed.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Backtracking", "Recursion", "Algorithms"],
        date: "May 29, 2025",
        author: "Ira Menon",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Solving the N-Queens Problem",
        description: "Dive into the classic N-Queens problem to see how backtracking is used to place queens on a board without conflicts.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Backtracking", "N-Queens", "Recursion"],
        date: "May 30, 2025",
        author: "Dev Bhattacharya",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Sudoku Solver Using Backtracking",
        description: "Learn how to build a Sudoku solver using backtracking, showcasing constraint satisfaction and smart decision-making.",
        readingTime: "7 min",
        level: "Advanced",
        tags: ["Backtracking", "Sudoku", "Constraint Solving"],
        date: "May 31, 2025",
        author: "Leila Zhang",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Subset and Permutation Generation",
        description: "Explore how to use backtracking to generate all subsets, permutations, and combinations of a given set.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Backtracking", "Permutations", "Subsets"],
        date: "June 1, 2025",
        author: "Marcus Singh",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Optimizations in Backtracking",
        description: "Learn how to prune recursion trees, use constraints early, and avoid redundant states to optimize backtracking solutions.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["Backtracking", "Optimization", "Pruning"],
        date: "June 2, 2025",
        author: "Sofia Ramesh",
        content: ``,
        likes: 10,
        dislikes: 12
      }
    ]
  },
  {
    id: 17,
    title: "Linked List",
    navigationName: "Linked_List",
    description: "Linear data structure consisting of nodes pointing to the next node.",
    readingTime: 8,
    level: "Beginner",
    tags: ["Data Structure", "Programming"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Linked Lists",
        description: "Understand the basics of singly and doubly linked lists, node structure, and how they differ from arrays.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Linked List", "Data Structures", "Singly List"],
        date: "June 3, 2025",
        author: "Ravi Chawla",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Common Operations on Linked Lists",
        description: "Learn how to insert, delete, and search nodes in singly and doubly linked lists through step-by-step breakdowns.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Linked List", "Insert", "Delete", "Traversal"],
        date: "June 4, 2025",
        author: "Ella Mathews",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Detecting and Removing Loops",
        description: "Explore Floyd’s Cycle Detection Algorithm and learn how to detect and remove loops in linked lists.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Linked List", "Cycle Detection", "Floyd's Algorithm"],
        date: "June 5, 2025",
        author: "Zayan Malik",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Reversing a Linked List",
        description: "Understand how to reverse a linked list using iterative and recursive approaches with clean logic.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Linked List", "Reverse", "Recursion"],
        date: "June 6, 2025",
        author: "Anita Desai",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Applications of Linked Lists",
        description: "Explore real-world applications like implementing stacks, queues, hash maps with chaining, and adjacency lists using linked lists.",
        readingTime: "5 min",
        level: "Intermediate",
        tags: ["Linked List", "Applications", "Stacks", "Queues"],
        date: "June 7, 2025",
        author: "Yash Pratap",
        content: ``,
        likes: 10,
        dislikes: 12
      }
    ]
  },
  {
    id: 18,
    title: "Operating Systems",
    navigationName: "Operating_Systems",
    description: "Core concepts of OS such as processes, memory management, and file systems.",
    readingTime: 22,
    level: "Intermediate",
    tags: ["Computer Science", "OS"],
    subBlogs: [
      {
        id: 1,
        title: "Basics of Operating Systems",
        description: "Understand what operating systems are, their key functions, and how they serve as an interface between users and hardware.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Operating Systems", "OS Basics", "Processes"],
        date: "June 8, 2025",
        author: "Grace Kumar",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Process Scheduling Algorithms",
        description: "Explore various scheduling strategies like FCFS, SJF, Round Robin, and Priority Scheduling with Gantt chart examples.",
        readingTime: "7 min",
        level: "Intermediate",
        tags: ["Operating Systems", "Scheduling", "Processes"],
        date: "June 9, 2025",
        author: "Ayaan Mehra",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Memory Management Techniques",
        description: "Dive into memory allocation methods including paging, segmentation, and virtual memory with working examples.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Operating Systems", "Memory Management", "Paging"],
        date: "June 10, 2025",
        author: "Fatima Noor",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Deadlocks: Detection and Prevention",
        description: "Understand how deadlocks occur in concurrent systems and learn techniques for prevention, avoidance, and detection.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["Operating Systems", "Deadlocks", "Concurrency"],
        date: "June 11, 2025",
        author: "David Raj",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "File Systems and Disk Scheduling",
        description: "Learn how file systems are organized and how disk scheduling algorithms like SSTF and LOOK improve performance.",
        readingTime: "5 min",
        level: "Intermediate",
        tags: ["Operating Systems", "File System", "Disk Scheduling"],
        date: "June 12, 2025",
        author: "Kiara Joshi",
        content: ``,
        likes: 10,
        dislikes: 12
      }
    ]
  },
  {
    id: 19,
    title: "Database Management Systems",
    navigationName: "Database_Management_Systems",
    description: "Concepts of relational databases, normalization, and SQL queries.",
    readingTime: 16,
    level: "Intermediate",
    tags: ["Database", "SQL"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to DBMS",
        description: "Get familiar with the basics of databases, DBMS vs RDBMS, and why databases are central to modern applications.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["DBMS", "Database", "Introduction"],
        date: "June 13, 2025",
        author: "Rajeev Narayan",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Normalization and Normal Forms",
        description: "Understand the concept of data redundancy, normalization, and various normal forms up to BCNF with examples.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["DBMS", "Normalization", "BCNF"],
        date: "June 14, 2025",
        author: "Sabrina Paul",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "SQL vs NoSQL Databases",
        description: "Explore the difference between relational and non-relational databases, and when to choose SQL vs NoSQL for projects.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["DBMS", "SQL", "NoSQL"],
        date: "June 15, 2025",
        author: "Mohammed Riaz",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Transactions and Concurrency Control",
        description: "Learn about ACID properties, transaction states, and how concurrency control prevents anomalies in multi-user environments.",
        readingTime: "7 min",
        level: "Advanced",
        tags: ["DBMS", "Transactions", "ACID", "Concurrency"],
        date: "June 16, 2025",
        author: "Nikita Jain",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Indexing and Query Optimization",
        description: "Understand the importance of indexing in databases and how query optimization improves performance for large datasets.",
        readingTime: "6 min",
        level: "Advanced",
        tags: ["DBMS", "Indexing", "Query Optimization"],
        date: "June 17, 2025",
        author: "Aaron Kapoor",
        content: ``,
        likes: 10,
        dislikes: 12
      }
    ]
  },
 {
    id: 20,
    title: "Networking Basics",
    navigationName: "Networking_Basics",
    description: "Fundamentals of computer networks, protocols, and the internet.",
    readingTime: 15,
    level: "Beginner",
    tags: ["Computer Science", "Networking"],
    subBlogs: [
      {
        id: 1,
        title: "Introduction to Computer Networks",
        description: "Understand what computer networks are, their goals, components, and the different types like LAN, WAN, and MAN.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Networking", "Basics", "LAN", "WAN"],
        date: "June 18, 2025",
        author: "Ritika Sharma",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "The OSI Model Explained",
        description: "Explore the 7-layer OSI reference model and understand the purpose of each layer from physical to application.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Networking", "OSI Model", "Layers"],
        date: "June 19, 2025",
        author: "Nikhil Thomas",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "IP Addressing and Subnetting",
        description: "Learn about IPv4 addressing, classes, subnet masks, and how subnetting helps in efficient IP management.",
        readingTime: "7 min",
        level: "Intermediate",
        tags: ["Networking", "IP Address", "Subnetting"],
        date: "June 20, 2025",
        author: "Priya Anand",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "TCP vs UDP: What’s the Difference?",
        description: "Compare the two key transport layer protocols: TCP and UDP, including reliability, speed, and use cases.",
        readingTime: "5 min",
        level: "Intermediate",
        tags: ["Networking", "TCP", "UDP", "Protocols"],
        date: "June 21, 2025",
        author: "Samar Deshmukh",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "DNS, DHCP, and NAT Explained",
        description: "Understand how essential networking services like DNS, DHCP, and NAT work behind the scenes to connect you to the internet.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Networking", "DNS", "DHCP", "NAT"],
        date: "June 22, 2025",
        author: "Tanya Mehra",
        content: ``,
        likes: 10,
        dislikes: 12
      }
    ]
  },
{
    id: 21,
    title: "Software Engineering Principles",
    navigationName: "Software_Engineering_Principles",
    description: "Key principles for designing and developing high-quality software systems.",
    readingTime: 19,
    level: "Intermediate",
    tags: ["Software Engineering", "Best Practices"],
    subBlogs: [
      {
        id: 1,
        title: "Understanding Software Development Life Cycle (SDLC)",
        description: "Learn about the key phases of SDLC including planning, analysis, design, implementation, testing, deployment, and maintenance.",
        readingTime: "6 min",
        level: "Beginner",
        tags: ["Software Engineering", "SDLC", "Development Process"],
        date: "June 23, 2025",
        author: "Meera Venkatesh",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 2,
        title: "Agile vs Waterfall: Choosing the Right Model",
        description: "Explore the differences between Agile and Waterfall development models, and when to use each in software projects.",
        readingTime: "5 min",
        level: "Intermediate",
        tags: ["Software Engineering", "Agile", "Waterfall", "Project Management"],
        date: "June 24, 2025",
        author: "Anand Patel",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 3,
        title: "Principles of Object-Oriented Design",
        description: "Dive into SOLID principles — the five foundational rules of object-oriented software design for writing maintainable code.",
        readingTime: "7 min",
        level: "Advanced",
        tags: ["Software Engineering", "SOLID", "OOP", "Design Principles"],
        date: "June 25, 2025",
        author: "Sneha Reddy",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 4,
        title: "Version Control and Collaboration with Git",
        description: "Understand the importance of version control systems like Git in modern software engineering and team collaboration.",
        readingTime: "5 min",
        level: "Beginner",
        tags: ["Software Engineering", "Git", "Collaboration", "Version Control"],
        date: "June 26, 2025",
        author: "Manoj Kapoor",
        content: ``,
        likes: 10,
        dislikes: 12
      },
      {
        id: 5,
        title: "Code Quality, Testing, and Maintainability",
        description: "Learn the best practices for writing clean code, implementing unit tests, and ensuring long-term maintainability of software.",
        readingTime: "6 min",
        level: "Intermediate",
        tags: ["Software Engineering", "Clean Code", "Testing", "Maintainability"],
        date: "June 27, 2025",
        author: "Rhea Thomas",
        content: ``,
        likes: 10,
        dislikes: 12
      }
    ]
}
];