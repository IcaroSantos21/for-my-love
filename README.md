# Declaração de amor ❤️

Site estático com HTML, CSS e JavaScript, responsivo para celulares e pronto para GitHub Pages.

## Arquivos
- `index.html`: conteúdo e seções.
- `style.css`: visual, layout responsivo e animações.
- `script.js`: carrossel e interação do quiz.
- `fotos/`: coloque suas imagens aqui.

## Como colocar fotos no carrossel
1. Coloque as imagens em `fotos/`, por exemplo `fotos/foto-1.jpg`.
2. Em `index.html`, procure cada bloco `<div class="placeholder">...</div>` e substitua pelo exemplo abaixo (mude o nome do arquivo em cada slide):

```html
<img class="couple-photo" src="fotos/foto-1.jpg" alt="Nós dois em um momento especial">
```

3. Adicione ao final do `style.css`:

```css
.couple-photo {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
```

Troque também o texto das legendas `<figcaption>`. Prefira JPG/WebP otimizados e nomes de arquivo sem espaços ou acentos.

## Quiz
As datas da conversa e do primeiro encontro são pessoais, então o site não presume as respostas corretas. O quiz só verifica se os dois campos foram preenchidos; não envia nem salva respostas em servidor.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Envie `index.html`, `style.css`, `script.js`, `README.md` e a pasta `fotos/` para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**, escolha `main` e `/(root)`, depois clique em **Save**.
5. Aguarde a URL aparecer na página Pages.

O site não usa bibliotecas JavaScript ou backend. A fonte personalizada é carregada do Google Fonts; se estiver offline, fontes alternativas serão usadas.
