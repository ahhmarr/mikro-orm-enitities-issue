import app from './app';

const port = process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 8096;
const host = '0.0.0.0';

app.listen(
	{
		port,
		host,
	},
	(err, address) => {
		if (err) {
			app.log.error(err);
			process.exit(1);
		}
		app.log.info(`Server listening at!! ${address}`);
	},
);
