import dot from 'dot-object';

let conf = {

    config: {},

    func: (value, or = null) => {

        let result = dot.pick(value, conf.config);

        if (! result) {
            result = or;
        }

        return result;

    },

    set(config) {
        conf.config = config;
    }

};

export default conf;