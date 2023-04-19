module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: { // FIXME: 기존 next 지운거에서 vite react로 변경하도록
      rootDir: ["apps/*/"],
    },
  },
};
