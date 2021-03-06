module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/app',
          '@constants': './src/constants',
          '@components': './src/app/components',
          '@hooks': './src/app/hooks',
          '@assets': './src/app/assets',
          '@screens': './src/app/screens',
          '@config': './src/config',
          '@interfaces': './src/interfaces',
          '@services': './src/services',
          '@utils': './src/utils',
          '@navigator': './src/app/navigator',
          '@redux': './src/redux',
          '@reduxtest': '../../../src/redux/'
        }
      }
    ]
  ]
};
