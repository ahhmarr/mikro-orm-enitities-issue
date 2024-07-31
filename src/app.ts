import fastify from 'fastify';
import loadDb from './plugins/database';

const app = fastify({
	logger: true,
	disableRequestLogging: !process.env?.DEBUG,
	ignoreTrailingSlash: true,
	pluginTimeout: 600000,
});

app.register(loadDb)
	
export default app;
