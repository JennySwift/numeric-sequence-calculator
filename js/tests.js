
describe('numeric sequence calculator', function () {
    it('displays all numbers up to and including the given number', function () {
        vm.userInput = 10;
        expect(vm.allNumbers).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });
});