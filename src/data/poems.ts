export interface Poem {
  id: string;
  title: string;
  excerpt: string;
  body: string;
}

export const poems: Poem[] = [
  {
    id: "quem-foi-brincar",
    title: "Quem foi brincar de vivo ou morto",
    excerpt: "Uma pergunta sobre o destino, o tempo e a condição humana.",
    body: `Quem foi brincar de vivo ou morto
e esqueceu de avisar ao tempo
que ainda queria voltar?

Quem foi brincar de vivo ou morto
e ficou parado demais,
fingindo de estátua,
enquanto a vida seguia
sem perguntar?

Há quem viva morrendo,
há quem morra vivendo,
e há os que apenas esperam
o sopro que não veio.

— Lilian Jusoli`,
  },
  {
    id: "na-teia-do-conformismo",
    title: "Na teia do conformismo",
    excerpt: "Um olhar sensível sobre rotina, vazio e recomeço.",
    body: `Na teia do conformismo
a alma se enrola devagar,
sem perceber que se acostuma
a não mais voar.

Os dias se repetem
como passos de quem cansou de procurar.
E o coração, antes inquieto,
aprende a calar.

Mas há sempre um fio solto,
um instante, um sopro, um lugar —
e basta um sim sincero
para recomeçar.

— Lilian Jusoli`,
  },
  {
    id: "o-bater-das-asas",
    title: "O bater das asas",
    excerpt: "Um poema de passagem, dor e paz.",
    body: `Ouvi o bater das asas
e soube que era hora.
Não houve grito, nem pressa,
apenas o vento que chora.

Partiu como quem respira fundo
diante de uma janela aberta.
E deixou no ar uma certeza:
que a paz, enfim, desperta.

— Lilian Jusoli`,
  },
  {
    id: "elegia-da-mulher-que-acordou",
    title: "Elegia da Mulher que Acordou",
    excerpt: "Lucidez, maturidade e a beleza ferida de continuar.",
    body: `Acordou.
E acordar doeu mais do que dormir.

Viu o que não queria ver,
soube o que não queria saber,
e mesmo assim seguiu —
porque mulher que acorda
não volta a fingir.

Carrega o encanto perdido
como quem carrega flor seca:
com cuidado, com memória,
com a certeza de que um dia floresceu.

— Lilian Jusoli`,
  },
  {
    id: "documento",
    title: "Documento",
    excerpt: "Afeto, cuidado e amor como dádiva.",
    body: `Há amores que não se assinam,
mas se registram na alma
como documento de fé.

Há cuidados que não se cobram,
porque nascem de um lugar
onde o amor não pede prova,
apenas acontece.

E quando a vida pedir certidão,
mostrarei o coração:
nele estão todos os nomes
que um dia me chamaram de lar.

— Lilian Jusoli`,
  },
];
