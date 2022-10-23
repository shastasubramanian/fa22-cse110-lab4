1. The program outputs '3' since it logs the latest value of 'i'. The for loops runs 3 times since the length of the prices array is 3.
2. The program outputs '150' since it logs the latest discountedPrice variable. In the third iteration of the for loop, the price that is being assessed is 300 and we are discounting it by 50%, yielding 150.
3. The program outputs '150' since it logs the final latest finalPrice variable. Again, in the third iteration of the for loop we assess 300 as the original price and with the 50% discount the final price is 150.
4. This function returns an array named 'discounted' that stores the discounted prices of all items. In the example, it will store [50, 100, 150] after considering the 50% discount of prices.
5. Since 'i' was declared using 'let' it is no longer in scope after the for loop so calling 'console.log(i)' will cause an error.
6. Since 'discountedPrice' was declared using 'let' it is no longer in scope after the for loop so calling 'console.log(discountedPrice)' will cause an error.
7. The program outputs '150' since it logs the latest finalPrice variable. In the third iteration of the for loop we assess 300 as the original price and with the 50% discount the final price is 150. The finalPrice variable was declared outside of the for loop so no error occurs.
8. This function returns an array named 'discounted' that stores the discounted prices of all items. It will store [50, 100, 150] after considering the 50% discount of prices.
9. Since 'i' was declared using 'let' it is no longer in scope after the for loop so calling 'console.log(i)' will cause an error.
10. The program outputs '3' since it stores the length variable which was declared outside of the for loop so no error occurs.
11. This function returns an array named 'discounted' that stores the discounted prices of all items. In the example, it will store [50, 100, 150] after considering the 50% discount of prices.
12. a) student.name
    b) student['Grad Year']
    c) student.greeting()
    d) student['Favorite Teacher'].name
    e) student.courseLoad[0]
13. a) '3' + 2: '32' (String concatenation)
    b) '3' - 2: 1 (Integer conversion and subtraction)
    c) 3 + null: 3 (null is 0 for arithmetic)
    d) '3' + null: '3null' (String concatenation)
    e) true + 3: 4 (true converts to 1 for arithmetic)
    f) false + null: 0 (false and null are both 0 for arithmetic)
    g) '3' + undefined: '3undefined' (String concatenation)
    h) '3' - undefined: NaN (In subtraction undefined can't be converted)
14. a) '2' > 1: true (string gets converted to int and 2 is greater than 1)
    b) '2' < '12': false (ascii value compares first digit 2 to 1)
    c) 2 == '2': true (type casting -> compares int to char)
    d) 2 === '2': false (string equality checks data type as well)
    e) true == 2: false (true is 1)
    f) true === Boolean(2): true (Converts 2 to boolean true)
15. '==' is the comparison operator which checks if the left and right side arguments are equal. '===' is the strict equality comparison operator which checks if the left and right side arguments are exactly the same. The main difference stems from '===' also comparing data types whereas '==' does not.
16. Refer to 'part2-question16.js'
17. This function doubles all elements in the array. If the doSomething method is changed, then we can manipulate the variables further. I arrived at the result by first walking through the code, seeing how callback is called on each index of the array. After running the code myself and outputting the new array, I was able to confirm the function's use.
18. Refer to 'part2-question18.js'
19. The program outputs:
    1
    4
    3
    2
    This is because there is a delay set for 3 and 2. We print 4 after 1 because a delay of '0' is set for 1 so it prints after all other statements. The delay of '1000' for 2 causes it to be outputted last.
    