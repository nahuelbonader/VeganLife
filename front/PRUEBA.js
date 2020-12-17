
function callAllFour ( var1, var2, var3, var4 ) {
return var1 + var2 - var3 * var4
}

function curry (callAllFour) {
    return curried1 (...args)  
    if ( args.length >= callAllFour.length ) {
        callAllFour(...args)
    } else {
        return function curried2(...nextArgs) {
              curried1(...args, ...nextArgs)
        }
    }
}