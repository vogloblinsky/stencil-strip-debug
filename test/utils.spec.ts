import * as util from '../src/utils';

describe('usePlugin', () => {
    it('should use the plugin for .js file', () => {
        const fileName = 'my-file.js';
        expect(util.usePlugin(fileName)).toBe(true);
    });

    it('should not use the plugin for .vue file', () => {
        const fileName = 'my-file.vue';
        expect(util.usePlugin(fileName)).toBe(false);
    });
});

describe('strip', () => {
    it('should remove console.log', () => {
        const input = `export class MyComponent {
            getText() {
                console.log('getText debug');
                alert('getText alert');
                debugger;
            }
        }`;
        const output = util.strip(input);
        expect(output).not.toContain('console.log');
        expect(output).not.toContain('alert');
        expect(output).not.toContain('debugger');
    });
});
