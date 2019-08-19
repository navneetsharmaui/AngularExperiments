module.exports = {
    name: 'web-angular-app',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/web-angular-app',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};