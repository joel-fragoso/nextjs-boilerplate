module.exports = {
  stories: [
    '../src/modules/**/stories/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../src/shared/components/**/stories/*.stories.@(ts|tsx|js|jsx|mdx)',
  ],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@react-theming/storybook-addon',
  ],
}
