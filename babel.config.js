module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel", // Keep the existing plugin
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env", // Import alias for dotenv variables
          path: ".env", // Path to your .env file
          blacklist: null, // Variables to exclude
          whitelist: null, // Variables to include (optional)
          safe: false, // Set to true if using a safe default file
          allowUndefined: true, // Allow undefined variables
        },
      ],
    ],
  };
};
