// https://github.com/avajs/ava/blob/master/docs/recipes/browser-testing.md

const { GlobalWindow } = require('happy-dom');

const window = new GlobalWindow();
global.window = window;
global.document = window.document;
global.navigator = window.navigator;
