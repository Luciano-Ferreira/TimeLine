
<details>
<summary>Aula 1 setup Nextjs</summary>

## Next 13
### Roteamento
React Router do next se eu criar uma pagina e dentro dela eu colocar page.tsx, essa pasta será uma nova pagina dentro da aplicação.

- prettier-plugin-tailwindcss -D
- @rocketseat/eslint-config -D

</details>


<details>
<summary>Aula 2 fontes e estrutura basica</summary>

A forma de importa as fontes mudou.
vamos utilizar essa roboto flex pq ela se adapta melhor ao peso das fontes, algumas fontes pode não ter todos os pesos ou subsets.

e o tailwind no setup inicial  no boilerplate integrou com tailwind e tem como configurar as fontes para funcionar direto com o tailwind.
![image](https://github.com/Luciano-Ferreira/TimeLine/assets/46464433/60ada5c6-0ee8-42bf-b57a-ef54ca71ac08)

e ai temos que configurar no tailwind config tbm

![image](https://github.com/Luciano-Ferreira/TimeLine/assets/46464433/17984f58-224e-4e5b-b64b-b15dd0878365)

e aqui vamos interpolar todas as fontes 
![image](https://github.com/Luciano-Ferreira/TimeLine/assets/46464433/ae78c727-ee2d-49eb-927d-6a2b42bdc9ae)

essa configuração de fontes evita "Layout shift" quando a pagina renderiza demora a carregar as fontes ai o usuario ver a pagina com as fontes padrão por uns milesimos e depois carrega.

plugins figma
![image](https://github.com/Luciano-Ferreira/TimeLine/assets/46464433/711bded1-af69-477b-ab30-374acdb9478f)

o favicon vai na pasta app ai o nome tem que ser icon.png, 400x400 um png funcionou

e no layout ja podemos definir o title da pagina e a descrição que vai apareer no google.

160% de peso na fonte e o melhor ali para ler para designers

tem u hack com o translate para centralizar a div semelhante ao que eu tava fazendo nos slider esses dias isso pode servir. O overflow hidden serve para a div não invadir o grid da direit .
![image](https://github.com/Luciano-Ferreira/TimeLine/assets/46464433/0a24b565-4078-451b-bdbf-6df71fe9d410)
e o position relative é necessario para o elemento filho com absolute se comportar.

essa div esta bem no centro mas por conta do overflow hidden não invade a div da direita
![image](https://github.com/Luciano-Ferreira/TimeLine/assets/46464433/12b6d0cb-72df-4cbb-9b3c-c7388de41415)

pra q q serve o noreferrer?
</details>