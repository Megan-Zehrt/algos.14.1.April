// 231. Power Of Two

var isPowerOfTwo = function(n) {
    
    if(n <= 0){
        return false
    }

    function helper(n){
        if(n == 1){
            return true
        }
        if(n % 2 === 0){
            return helper(n / 2)
        }
        return false
    }
    return helper(n)
};