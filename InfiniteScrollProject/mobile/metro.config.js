const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Watch the shared folder
config.watchFolders = [
  path.resolve(__dirname, '../shared'),
];

// Resolve 'react' and 'react-native' from mobile's node_modules
config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    react: path.resolve(__dirname, 'node_modules/react'),
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
  },
};

module.exports = config;
