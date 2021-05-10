export default {
  setAsyncStorageHandler: () => ({
    configure: () => ({
      useReactNative: () => ({
        use: () => ({
          use: () => ({
            connect: () => ({
              createEnhancer: jest.fn()
            })
          })
        })
      })
    })
  })
};

export const asyncStorage = jest.fn();
