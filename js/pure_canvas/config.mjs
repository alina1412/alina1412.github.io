const config = {
    defaults: {
        table: {
            color: "#bbb",
            borders: {color: "#333", thickness: 4},
        },
        ball: {
            color: "#111",
            radius: 8
        }
    },
    environment: {
        speed_loss_on_impact_multiplier: 0.6
    }
    
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