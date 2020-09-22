const cracoAlias = require("craco-alias");
  
module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@": "./src",
          "@content": "./src/content",
          "@component": "./src/components",
          "@page": "./src/pages",
          "@asset": "./src/assets",
          "@icon": "./src/assets/icons",
          "@video": "./src/assets/videos",
          "@animation": "./src/assets/animated",
          "@helper": "./src/helpers"
        }
      }
    }
  ]
};
