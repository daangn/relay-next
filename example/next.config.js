module.exports = {
  reactStrictMode: true,
  compiler: {
    relay: {
      src: "./src",
      artifactDirectory: "src/__relay__",
      language: "typescript",
    },
  },
};
