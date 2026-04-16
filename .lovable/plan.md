
## Site One-Page — Lilian Jusoli

Construir o site oficial da autora como **single page application** em React + Vite + Tailwind, com efeito **parallax suave**, totalmente responsivo, seguindo o brand kit já definido (café, nude, baunilha, dourado vintage; cursiva elegante + serifada editorial + máquina de escrever).

### Identidade visual aplicada
- **Paleta:** café imperial `#3A261F`, nude `#D7C1AF`, dourado vintage `#B08A57`, baunilha seda `#F4E7D4`, cacau `#5B4035`, off-white `#FAF5EF` — tudo via design tokens HSL no `index.css`.
- **Tipografia (Google Fonts):** *Parisienne* (assinatura), *Playfair Display* (títulos editoriais), *Cormorant Garamond* (subtítulos), *Lora* (corpo), *Special Elite* (poemas/máquina de escrever).
- **Detalhes:** linhas finas douradas, ornamentos sutis, muito espaço em branco, sombras suaves, cantos arredondados discretos.

### Seções da página (one-page com scroll suave)

1. **Hero** — Logo + nome "Lilian Jusoli" em cursiva gigante, tagline *"Poesia, presença e perfume."*, dois CTAs (Comprar o livro / Conhecer a autora). Fundo off-white com ornamento dourado.

2. **Sobre a Autora** — Bloco duas colunas (espaço para foto + texto biográfico), fundo nude suave, pequeno detalhe dourado.

3. **Livro em Destaque — "Quem pisou no meu pé"** — Seção mais forte da página. Espaço reservado para capa (placeholder elegante caso não haja imagem) + título grande em cursiva sobre fundo branco, copy de venda, CTA principal "Quero comprar agora".

4. **Por que ler esta obra?** — 4 cards com benefícios (encanta a infância, estimula vínculo, valoriza a leitura, presente com significado).

5. **Poemas e Poesias** — Grid de cards menores (sub-destaque), cada card com título em cursiva grande sobre fundo branco no lugar do thumbnail, trecho curto, e botão "ler". Inclui: *Quem foi brincar de vivo ou morto*, *Na teia do conformismo*, *O bater das asas*, *Elegia da Mulher que Acordou*, *Documento*.

6. **A Voz da Autora** — Citação destacada em tipografia editorial, fundo café com texto claro.

7. **Universo Autoral** — Faixa sensorial com palavras-chave da marca (café, baunilha, MPB, leitura, encanto).

8. **Inspirações** — Bloco curto sobre leitura, MPB, caminhada, memória.

9. **Chamada Final para Compra** — CTA forte de conversão.

10. **Contato / Redes** — Instagram, WhatsApp, e-mail.

11. **Footer** — Marca + tagline + direitos reservados.

### Comportamento e UX
- Navegação fixa no topo com âncoras suaves para cada seção.
- Efeito **parallax** sutil em fundos decorativos (não nos textos), respeitando performance e mobile.
- Animações de entrada discretas (fade-up) ao scroll usando Intersection Observer.
- Modal/drawer ao clicar em um poema, exibindo o texto completo em tipografia *Special Elite* (clima de máquina de escrever).
- Botões de compra apontam para link externo (placeholder até definir loja).
- Totalmente responsivo (mobile-first).

### Estrutura técnica
- Componentes: `Navbar`, `Hero`, `About`, `FeaturedBook`, `BookBenefits`, `PoemsGrid`, `PoemCard`, `PoemModal`, `AuthorVoice`, `Universe`, `Inspirations`, `FinalCTA`, `Contact`, `Footer`.
- Dados dos poemas em um arquivo `src/data/poems.ts` (título + trecho + texto completo) — fácil de expandir.
- Design tokens completos no `index.css` + `tailwind.config.ts` estendido com as fontes e cores semânticas.
- Pronto para deploy no GitHub Pages do repositório `lilianjusoli.github.io` após renomeação.

### Observações
- Imagens (foto da autora, capa do livro, logo) ficam como **placeholders elegantes** com tipografia até você fornecer os arquivos finais.
- Link de compra do livro: deixarei como `#` configurável (você me passa quando tiver o link da loja).
