const yamlLoader = {
    test: /\.yaml$/,
    use: 'yaml-loader'
};

module.exports = function override(config, env) {
    config.module.rules.push(yamlLoader);
    return config;
}