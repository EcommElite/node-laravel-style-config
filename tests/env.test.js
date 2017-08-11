import env from './../src/env';

test('it works with value', () => {

    let result = env('TEST_VALUE', 'other');
    expect(result).toBe('just a test value');

});

test('it works with lowercase', () => {

    let result = env('test_value', 'other');
    expect(result).toBe('just a test value');

});

test('it works with default', () => {

    let result = env('FAKE', 'other');
    expect(result).toBe('other');

});