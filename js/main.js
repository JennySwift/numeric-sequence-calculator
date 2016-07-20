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
    },
    data: {
        userInput: 5
    },
    methods: {
        isOdd: function (number) {
            return number % 2 !== 0;
        },
        isMultipleOf: function (number, multipleOf) {
            return number % multipleOf === 0;
        }
    }
});