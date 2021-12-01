(function() {

    const getRandomNum = function (min = 1, max = 100) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const isUnique = function (array) { 
        const obj = {};

        for (let i = 0; i < array.length; i++) { 
            if (obj[array[i]]) return false;
            obj[array[i]] = true;
        }

        return true;
    }

    const getUniqueVal = function () {
        const arr = [];

        const closure = function() {
            const randomNum = getRandomNum();

            if (arr.length > 100) return arr;

            if (arr.includes(randomNum)) return closure();
            
            arr.push(randomNum);
            arr.sort((a, b) => a - b);
            return arr;
        }

        return closure;
    }

    const uniqueValArr = getUniqueVal();
    
    for(let i = 0; i < 100; i++) {
        const fullArr = uniqueValArr();
        console.log(fullArr);

        if (i === 99) console.log(isUnique(fullArr));
    }
}());