# Svelte component template

To create a svelte component package or a web component package

## Usage

1. In `package.json` file change `name` of your package (kebab-case string)
1. In `package.json` file change `componentname` value to your own component name (PascalCase string).

## Try it in your app

1. Run `npm pack`
1. Test your component in your Svelte app by installing it locally `npm i ./path/to/package/`
1. Import it in your app `import YourComponentName from 'your-package-name'`

## Publish your package to npm

1. Deploy your package to npm with `npm publish`

## Make it a web component

1. Add `<svelte:options tag="custom-element" />` tag to your component where `custom-element` is the tag name of your web component
1. In `rollup.config.js` file set `plugins > svelte > compilerOptions > customElement` to `true`
1. Import your component like `import 'your-package-name'`
1. Use your web component like `<custom-element></custom-element>` tag where `custom-element` is the tag name you chose in step 1
