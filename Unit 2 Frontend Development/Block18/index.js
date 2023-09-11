/* 
 ************ Block 18 Workshop: Writing Test Specifications ************

Prompts: 
    For each prompt below: 
        Read the prompt.
        Identify the expectations.
        Write specifications for all the tests that would be useful for that prompt.
            Try to take any "edge cases," or unexpected circumstances, into account, and write test specs for them.
            Try not to write extraneous tests!



 ---- Unit Tests ----
    Wrtie unit tests for the following examples:

        1- A function called "multiplication" that returns the product of the two input numbers.
            
            Unit Test:   
                Expect multiplication(a, b) parameters to be a number
                Expect multiplication(a, b) to return a number
                Expect multiplication(4, 3) to be equal to 12
                Expect multiplication("a", 3) to be an error
                Expect multiplication(4, "3") to be equal to 12
                Expect multiplication(-4, 3) to be equal to -12
                Expect multiplication(-4, -3) to be equal to 12
                
        ---------------------------------------------------------------------------------------

        2- A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
        Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
            ...should result in [-1, 1, 3, 9, 15]
        Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:
            What should happen with unexpected inputs?
                What kinds of unexpected inputs should we worry about?
            What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)
            Please see below the comments for code


            Unit Test:
                Expect concatOdds(a, b) parameters to be two array of numbers
                Expect concatOdds(a, b) to return a single array of odd numbers
                Expect concatOdds(a, b) to remove duplicate values
                Expect concatOdds(a, b) to return sorted odd numbers
                Expect concatOdds(a, b) to return negative odd numbers as well
                Expect concatOdds(["a", "b"], [9, 1, 1, 1, 4, 15, -1]) to return [-1, 1, 9, 15] 
                Expect concatOdds(["a", "b"], ["c", "d"]) to return an empty array []
                Expect concatOdds(["5", "2"], ["3", "9"]) to convert them into integers and return [3, 5, 9]
                Expect concatOdds() to return error if arguments or params are empty
                Expect concatOdds([1, 1, 1, 2, 2, 3], [5, 3, 3, 9]) to return [1, 3, 5, 9]


-----------------------------------------------------------------------------------------------------------------------


 ---- Functional Tests ----
    A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
        Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
            What should happen if the cart is empty?
            What needs to be shown to the user at each step of check out?
            What behaviors of this feature does the prompt miss or gloss over?
        Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!



        Functional Test: 
        - As a guest (without an account):
            1. When the user has an empty cart and click on it it should show the user a message that cart is empty and give them two options to sign in or sign up.
            2. If the user adds an item in the cart and procceds to chekcout, there should be two options:
                1. Checkout as a guest: User procceeds with checkout and it prompts user to enter their personal info and payment info
                2. Sign in/Sign up option for the user to open their account and continue shopping/checkout
                    1. If user click on sign in, then user should be prompt to enter their username and password
                        1. If user enters wrong username or password, should be prompt with an error
                        2. If user enters correct username and password, they should log in
                    2. If user click on sign up, then it prompt them to enter their personal info to create an account. 
                    3. If they procceed to chekcout it should prompt them to enter their payment info and shipping address. 
        
        - As a logged in user:
            1. When user clicks on his cart as he is logged in, the cart will show the following options:
                1. if the cart is empty, it will show a message that cart is empty and will throw some suggestions. 
                2. If the cart has an item in it, the procceed to checkout button will be available for user
                    1. when user click on procceed to checkout, it will check the user's info to make sure the payment method and shipping address is up to date
                    2. user should be prompt to check the delivery date, shipping address and personal info before placing order for the last time. 


*/


//Example code for concatOdd
const arr1 = [3, 2, 1], arr2 = [9, 1, 1, 1, 4, 15, -1];

//Function to find odd numbers and sort them and remove duplicate values. 
function concatOdds (a, b) {

    //combining two arrays into one
    const arr = [...a, ...b]

    //filtering, sorting and removing duplicate odd numbers to storing them into a new array
    const oddArr = arr.filter(num => num % 2 === 1 || num % 2 === -1).sort((a,b) => a-b).reduce((acc, num) => {
        if (!acc.includes(num)){
            acc.push(num);
        }
        return acc;
    }, []);

    console.log(oddArr);
}

//calling functioneiifccreecvihdelbflgvgfencfnilerlkvufjdtkrrn

concatOdds(arr1, arr2);


