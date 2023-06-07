<details>
<summary>Aula 1 mobile apenas setup da RN</summary>
aqui não são utilizados px e sim bp a densidade de pixels são diferentes.
aqui é tudo igual no react exceto algumas libs e o m odo de estilização, mas até isso pode ser semelhante.

```bash
❯ yarn add nativewind   
❯ yarn add tailwindcss -D
```

```json
tsconfig.json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "types": [
      "nativewind/types"
    ]
  }
}
```
  
```js
    module.exports = function(api) {
      api.cache(true);
      return {
        presets: ['babel-preset-expo'],
        plugins: ["nativewind/babel"]
      };
    };
```


```js
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```bash
  yarn add eslint @rocketseat/eslint-config -D
```

```bash
touch eslintrc.json
```

```json
{
  "extends": [
    "@rocketseat/eslint-config/react"
  ]
}
```

```bash
 yarn add prettier-plugin-tailwindcss -D     
```


```bash
touch prettier.config.js
```

```js
module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss')
  ]
}

```

</details>

<details>
<summary>Aula 2 mobile</summary>

https://github.com/expo/google-fonts
```bash
 npx expo install @expo-google-fonts/inter expo-font
```

[svg no RN + Expo](https://github.com/kristerkari/react-native-svg-transformer)
</details>

