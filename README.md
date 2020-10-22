# ReactJs / VCAP Example

This project is a very simple example mostly standard generated with `create-react-app` app,
on how to read and use CloudFoundry VCAP variables in a ReactJS project.

The start script in `package.json` file executes the `src/genEnv.js` script that creates a `.env`
with some data read from VCAP environment variables. Change `src/genEnv.js` accordingly to the variables
you need use.
