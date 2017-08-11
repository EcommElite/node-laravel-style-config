import dot from 'dot-object';
import dotenv from 'dotenv';
import fs from 'fs-extra';

const env_object = dotenv.parse(fs.readFileSync('.env'));

const env = (value, or = null) => {

    let result = dot.pick(value.toUpperCase(), env_object);

    if (! result) {
        result = or;
    }

    return result;

};

export default env;

