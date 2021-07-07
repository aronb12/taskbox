module.exports = {
  stories: ["../src/app/components/**/*.stories.ts"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  ref: {
    "chromatic-published-Storybook": {
      // The title of your Storybook
      title: "Design System",
      // The url provided by Chromatic when it was published
      url: "https://4dbc533--60df0940a562af0039d627ea.chromatic.com",
    },
  },
};
