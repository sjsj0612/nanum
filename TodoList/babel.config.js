module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // eslint-disable-next-line prettier/prettier
  plugins: [['babel-plugin-root-import', {rootPathPrefix:'~', rootPathSuffix: 'src'}]],
};
