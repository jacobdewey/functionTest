FunctionTests.FunctionTest(function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
basic.forever(function () {
	FunctionTests.doSomething
})
