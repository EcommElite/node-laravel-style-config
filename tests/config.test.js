import base_config from './../src/config'
import env from './../src/env';

base_config.config = {

    test: env('TEST_VALUE', 'testing'),

};

let config = base_config.func;

test('it works through env', () => {

    let result = config('test');
    expect(result).toBe('just a test value');

});

test('it works with fallback', () => {

    let result = config('fake', 'fallback');
    expect(result).toBe('fallback');

});