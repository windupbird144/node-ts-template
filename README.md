# Node 16 Typescript starter

A small starter application to save 5-10 minutes when setting up a node + Typescript project. This starter is for applications built with Typescript and Node 16

Includes:
* git 
* tests
* directory structure
* compilation

Fetures:
* git: contains an empty git repository on the `development` branch and a gitignore
* directory structure:
    * `src/main` for the application code
    * `src/main/index.ts` is the entry point of the application
    * `src/test` for the application tests
    * `dist` for the compiled JS output
* test: tests use the [tap](https://www.npmjs.com/package/tap) framework. The source code (application and tests) are compiled before the test, and tests are run on the Javascript files instead of the Typescript files
* VSCode: contains a .vscode folder with project settings. The setting excludes the contents of node_modules from the file explorer.

Important scripts:
- `npm test` To run all tests (runs npm run build first)
- `npm run build` To compile TS -> JS
- `npm start` To run node/dist/index.js