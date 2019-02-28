export function usePlugin(fileName: string) {
    return /(\.js)$/i.test(fileName);
}

/**
 * Copyright sindresorhus - https://github.com/sindresorhus/strip-debug/blob/master/index.js
 * Fork here for supporting ES6 source files with sourceType: 'module' for espree
 */
export function strip(source: string) {
    const rocambole = require('rocambole');
    const stripDebugger = require('rocambole-strip-debugger');
    const stripConsole = require('rocambole-strip-console');
    const stripAlert = require('rocambole-strip-alert');
    const espree = require('espree');

    rocambole.parseFn = espree.parse;
    rocambole.parseContext = espree;
    rocambole.parseOptions = {
        range: true,
        tokens: true,
        comment: true,
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            globalReturn: false,
            impliedStrict: false
        }
    };
    return rocambole.moonwalk(source, (node: any) => {
        stripDebugger(node);
        stripConsole(node);
        stripAlert(node);
    });
}
