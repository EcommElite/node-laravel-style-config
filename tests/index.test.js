import { config, setConfig, env } from './../src/index';

setConfig({

    test: env('TEST_VALUE', 'testing'),

});

test('it works through env', () => {

    let result = config('test');
    expect(result).toBe('just a test value');

});

test('it works with fallback', () => {

    let result = config('fake', 'fallback');
    expect(result).toBe('fallback');

});