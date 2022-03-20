export default () => ({

    PORT: parseInt(process.env.PORT) || 3000,
    PRODUCTION: (process.env.NODE_ENV && process.env.NODE_ENV.toLocaleUpperCase() === 'PRODUCTION') || false,
  
  });