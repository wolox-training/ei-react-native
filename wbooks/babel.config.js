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
          '@assets': './src/app/hooks',
          '@views': './src/app/views',
          '@config': './src/config',
          '@interfaces': './src/interfaces',
          '@services': './src/services',
          '@utils': './src/utils',
          '@genericStyles': './src/app/styles'
        }
      }
    ]
  ]
};
