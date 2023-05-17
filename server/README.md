https://efficient-sloth-d85.notion.site/Trilha-Ignite-e2ed19139b544a46984a28b65dcd4aae

- Typescript
  permite que eu deenvolva com tipagem estática com o java e c# por exemplo.

- types/node
  serve para tipar as variaveis do node. por exemplo a variavel process.

- npx
  É uma forma de executar binários dentro do projeto
  ```bash
  # Cria um projeto javascript
  npm init -y
  ```


  ```bash
  # cria o arquivo de confguração do typescript
  npx tsc --init 
  ```
  o comando tsc tbm gera um cofigo transpilado.

  E o target indica qual versão o typescript vai transpilar o meu código do projeto depois do build, que no nosso caso será ECMA SCRIPT 2020(pode vir outra versão devemos nos atentar).

  ![image](https://github.com/Luciano-Ferreira/nlw-bolao/assets/46464433/27c65ece-b39f-4f38-a563-be32639252a2)


## tsx 
O node não entende typescript, o tsx serve pra transpilar e rodar o codigo durante o desenvolvimento, o node até pode rodar um arquivo typescript, mas se eu usar um recurso que tenha no typescript e não tenha no javascript, não vai rodar essa transpilação precisa acontecer é interessante rodar em watch para que eu n tenha que iniciar e reiniciar, para manter o meu projeto rodando como no nodemon.

```bash
  yarn add tsx
```

prisma é como se fosse o RN dos bancos de dados relacionais e talvez não relacionais tbm. Ele vai transpilar querys feitas com javascript a varias querys SQL diferentes.

[prisma docs](https://www.prisma.io/docs/getting-started)

```bash
  yarn add prisma -D
```
```bash
  yarn prisma init --datasource-provider SQLite 
```
```bash
yarn prisma migrate dev
```

```bash
yarn prisma studio
```

model é um nome generico que o prisma utiliza como ele atende tanto nosql como sql pode ser model table store ou document.

```bash
yarn add @prisma/client
```