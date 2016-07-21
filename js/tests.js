
describe('numeric sequence calculator', function () {
    it('displays all numbers up to and including the given number', function () {
        vm.userInput = 10;
        expect(vm.allNumbers).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

    it('displays all odd numbers up to and including the given number', function () {
        vm.userInput = 10;
        expect(vm.oddNumbers).toEqual([1,3,5,7,9]);
    });

    it('displays all even numbers up to and including the given number', function () {
        vm.userInput = 10;
        expect(vm.evenNumbers).toEqual([2,4,6,8,10]);
    });

    it('displays all numbers up to and including the given number but replaces multiples of 3 with "C" and multiples of 5 with "E" and multiples of both 3 and 5 with "Z"', function () {
        vm.userInput = 20;
        expect(vm.numbersWithLetterReplacements).toEqual([1,2,'C',4,'E','C',7,8,'C','E',11,'C',13,14,'Z',16,17,'C',19,'E']);
    });

    it('displays all Fibonacci numbers up to and including the given number', function () {
        vm.userInput = 89;
        expect(vm.fibonacciNumbers).toEqual([0,1,1,2,3,5,8,13,21,34,55,89]);
    });

    it('does not display Fibonacci numbers if there is no given number', function () {
        vm.userInput = '';
        expect(vm.fibonacciNumbers).toEqual([]);
    });

    it('displays all Fibonacci numbers up to and including the given number if the number is 1', function () {
        vm.userInput = 1;
        expect(vm.fibonacciNumbers).toEqual([0,1,1]);
    });

    it('displays an error if the given number is negative', function () {
        vm.userInput = -1;
        expect(vm.errors).toEqual(['The input field only accepts positive numbers.']);
    });

    it('displays an error if the given number is 0', function () {
        vm.userInput = 0;
        expect(vm.errors).toEqual(['The input field only accepts positive numbers.']);
    });

    it('displays an error if the given number is not a whole number', function () {
        vm.userInput = 1.5;
        expect(vm.errors).toEqual(['The input field only accepts whole numbers.']);
    });

    it('displays errors if the given number is not a whole number and is negative', function () {
        vm.userInput = -1.5;
        expect(vm.errors).toEqual(['The input field only accepts positive numbers.', 'The input field only accepts whole numbers.']);
    });

    it('displays no errors if the given number is a positive, whole number', function () {
        vm.userInput = 3;
        expect(vm.errors).toEqual([]);
    });

    it('displays no errors if the given number is an empty string', function () {
        vm.userInput = '';
        expect(vm.errors).toEqual([]);
    });
});