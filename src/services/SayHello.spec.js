const sayHelloWorld = require('./SayHello');

describe('Say Hello tests', () => {
    it('Deve dizer Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Deve dizer Hello Daniel', () => {
        const response = sayHelloWorld.sayHello('Daniel');

        expect(response).toBe('Hello Daniel!');
    })
});