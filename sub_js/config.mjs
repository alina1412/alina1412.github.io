const config = {
    defaults: {
        some_name: 0,
        name2: "name"

    },

    
};

config.init_defaults = function(obj, defaults, custom_defaults) {
    for (const prop in custom_defaults) {
        obj[prop] = custom_defaults[prop]
    }
    for (const prop in defaults) {
        if (prop in obj) {
            continue;
        }
        obj[prop] = defaults[prop]
    }
};
export default config;