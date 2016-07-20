new Vue({
    el: 'body',
    computed: {
        allNumbers: function () {
            var array = [];
            for (var i = 0; i < this.userInput; i++) {
                array.push(i);
            }
            array.push(this.userInput);

            return array;
        },
        oddNumbers: function () {
            var array = [];
            for (var i = 0; i < this.userInput; i++) {
                if (this.isOdd(i)) {
                    array.push(i);
                }
            }
            if (this.isOdd(this.userInput)) {
                array.push(this.userInput);
            }

            return array;
        },
        evenNumbers: function () {
            var array = [];
            for (var i = 0; i < this.userInput; i++) {
                if (!this.isOdd(i)) {
                    array.push(i);
                }
            }
            if (!this.isOdd(this.userInput)) {
                array.push(this.userInput);
            }

            return array;
        }
    },
    data: {
        userInput: 5
    },
    methods: {
        isOdd: function (number) {
            return number % 2 !== 0;
        }
    }
});