(function() {

    const getRandomNum = function(min = 1, max = 100) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getUniqueVal = function() {
        const arr = [];

        const closure = function() {
            const randomNum = getRandomNum();

            if (arr.length > 100) return arr;

            if (arr.includes(randomNum)) return closure();
            
            arr.push(randomNum);
            return arr;
        }

        return closure;
    }

    const uniqueValArr = getUniqueVal();
    
    for (let i = 0; i < 100; i++) {
        console.log(uniqueValArr());
    }

}());