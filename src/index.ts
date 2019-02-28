import * as util from './utils';

export function stripDebug() {
    return {
        name: 'strip-debug',

        transform(sourceText: string, fileName: string) {
            if (!util.usePlugin(fileName)) {
                return null;
            }

            return util.strip(sourceText).toString();
        }
    };
}
