let config = {};

// web configs
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.encryption_key = 's3cret';

// database configs - dev
config.database = {};
config.database.username = 'nodeQuizUserName';
config.database.password = 'password123';
config.database.port = '11851';
config.database.url = 'ds111851.mlab.com';
config.database.name = 'node-quiz';


module.exports = config;