# `<bitcoin-logo />`

(Official) `Bitcoin` logo provided as [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). It based on the original graphic promoted by `bitboy` in 2010 as described by [`Bitcoin Design`](https://bitcoin.design) [here](https://bitcoin.design/guide/getting-started/visual-language/#update-by-bitboy).

The SVG itself is friendly borrowed from `Bitcoin Design` ([source](https://bitcoin.design/assets/images/guide/getting-started/visual-language/bitcoin-symbol.svg)).

## Few variants

![bitcoin-logo-webcomponent](https://github.com/BitcoinBeachTravemuende/bitcoin-logo-webcomponent/assets/47693/1157247c-6b2e-4fda-aa90-e2d6a096e0f9)


## Features

- Customize size and colors as you like
- SVG based
- No dependencies
- Small bundle size: `3.14 kB │ gzip: 1.53 kB`
- Supported by modern browsers
- Use it with your favourite web framework

## Usage

### Installation 

Use your favourite Node package manager to install `bitcoin-logo` web component.

`npm`

```bash
npm install @bitcoinbeachtravemuende/bitcoin-logo
```

`bun`

```bash
bun add @bitcoinbeachtravemuende/bitcoin-logo
```

`pnpm`

```bash
pnpm add @bitcoinbeachtravemuende/bitcoin-logo
```

`yarn`

```bash
yarn add @bitcoinbeachtravemuende/bitcoin-logo
```

### Use bundle via `unpkg`

TBD

### Properties

- `size: string`: `px` or `em`, eg. `size="300px"` or `size="8em"`
- `background-color: string`: Background color. Value can be either a valid color `name` or a `hex` color, eg. `bgColor="white"` or `bgColor="#FFF"`
- `color: string`: Color of the capital `₿`. Value can be either a valid color `name` or a `hex` color, eg. `color="black"` or `color="#000"`

### Examples

**_Default_**

```html
<bitcoin-logo />
```

**_Custom colors_**

```html
<bitcoin-logo color="white" background-color="black"></bitcoin-logo>
```


**_All custom values_**

```html
<bitcoin-logo size="300px" background-color="black" color="white"></bitcoin-logo>
```

## Build

### Requirements

#### Nix

Install [Nix](https://zero-to-flakes.com/install)

#### Other

Install [`pnpm`](https://pnpm.io/) or any other Node package manager ([`bun`](https://bun.sh/), [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [`yarn`](https://yarnpkg.com/) or whatever)

### Local build

- Install dependencies (command might be different for other package manager)

```bash
pnpm install
```

- Local build

```bash
pnpm dev
```
Open http://localhost:5173

- Release build

```bash
pnpm build
```
Build sources land into `dist` folder.

## License

[MIT](./LICENSE)
