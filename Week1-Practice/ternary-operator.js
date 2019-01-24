/**
 * Program to further understanding the ternary operator/expression
 * Author: Lori Oliver
 * Date: 01/19/19
 * */

 function testNum(num) {
     // This if statement has to be wrapped in a function or class.
     /**
     if(num % 2 === 0) {
         return true;
     }else{
         return false;
     }
      */
     /**
     * Ternary Operator/Expression - A conditional expression that evaluates to a value. Consisting of: 
     *     truthy clause (value produced if the conditional evaluates to a truthy value) and a
     *     falsy clause (value produced if the conditional evaluates to a falsy value) 
     */
     return (num % 2 === 0)
        ? true
        : false;
 }

 /**
  * A ternary operator is often referred to as a shortand if statement but this limits the scope
  * of a ternary as it does not account for circumstances where there is no context from which to return.
  * This is NOT an issue in Java as everything is wrapped in a class.
  */
 
 console.log(`5 is it even? ${testNum(5)}`);
 console.log(`8 is it even? ${testNum(8)}`);