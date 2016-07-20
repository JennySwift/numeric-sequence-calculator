new Vue({
    el: 'body',
    computed: {
        allNumbers: function () {
            var array = [];
            for (var i = 1; i <= this.userInput; i++) {
                array.push(i);
            }

            return array;
        },
        oddNumbers: function () {
            var array = [];
            for (var i = 1; i <= this.userInput; i++) {
                if (this.isOdd(i)) {
                    array.push(i);
                }
            }

            return array;
        },
        evenNumbers: function () {
            var array = [];
            for (var i = 1; i <= this.userInput; i++) {
                if (!this.isOdd(i)) {
                    array.push(i);
                }
            }

            return array;
        },
        numbersWithLetterReplacements: function () {
            var array = [];
            for (var i = 1; i <= this.userInput; i++) {
                if (this.isMultipleOf(i, 3) && this.isMultipleOf(i, 5)) {
                    array.push('Z');
                }
                else if (this.isMultipleOf(i, 3)) {
                    array.push('C');
                }
                else if (this.isMultipleOf(i, 5)) {
                    array.push('E');
                }
                else {
                    array.push(i);
                }
            }

            return array;
        },
        fibonacciNumbers: function () {
            var array = [0,1,1];
            var nextFibonacciNumber = this.getNextFibonacciNumber(array);

            while (nextFibonacciNumber <= this.userInput) {
                array.push(nextFibonacciNumber);
                nextFibonacciNumber = this.getNextFibonacciNumber(array);
            }

            return array;
        },
        errors: function () {
            var array = [];

            if (this.userInput < 0) {
                array.push("The input field only accepts positive numbers.")
            }

            if (!Number.isInteger(this.userInput * 1)) {
                array.push("The input field only accepts whole numbers.")
            }
            
            return array;
        },

    },
    data: {
        userInput: 40,
    },
    methods: {
        isOdd: function (number) {
            return number % 2 !== 0;
        },
        isMultipleOf: function (number, multipleOf) {
            return number % multipleOf === 0;
        },
        getNextFibonacciNumber: function (array) {
            return array[array.length - 1] + array[array.length - 2];
        }
    }
});