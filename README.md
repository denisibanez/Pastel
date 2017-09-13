# Pastel
Pastel generator, best generator from front end developers. :)



Acesse a pasta raiz do projeto pelo terminal e digite o comando NPM install.

Após o termino do processo digite GULP.

Ele irá gerar um server local para trabalho.

A estrutura é composta por duas pastas principais, SRC e DIST.

Sempre trabalhe na pasta SRC, já que a Dist é o Build do Projeto para produção.

PONTOS IMPORTANTES>

As imagens colocadas na pastas assets/images sempre serão otimizadas.

As imagens colocadas na pastas SVG irão gerar um sprite svg que já está sendo chamado no index.html
Dentro da pasta assets/images/icons tem um html com explicações sobre como usar o sprite.

O template utiliza Sass, portanto sempre que for inserido um código dentro da pasta Sass ele irá compilar em css para a pasta CSS dentro de SRC.

Sempre que o comando Gulp for executado, a task COPY/CLEAN irá copiar o conteúdo da pasta SRC para DIST, concatenando e minificando CSS e JS.

Para isso as chamadas devem estar dentro desses comentários na index.html, assim como o exemplo:

      <!-- build:css assets/css/app.min.css -->
      <link href="assets/images/icons/css/sprite.css" rel="stylesheet">
      <link href="assets/css/app.css" rel="stylesheet">
      <!-- endbuild -->

      <!-- build:js assets/js/app.min.js -->
      <script src="assets/js/app.js"></script>
      <!-- endbuild -->
 
 Obs: O plugin sempre muda o hash do arquivo, tanto no nome do arquivo como na chamada dentro do html, isso facilita a utilização de cache por parte do navegador, porém, além dessa prática deve ser configurado os headers dentro do server do projeto (produção), cada server tem uma maneira de configurar, consulte o especialista em infra responsável.
 
 Para inserir css e js inline, para efeitos de performance deve-se chamar o arquivo dentro destes comentários:
 
    <!-- build:inlinecss -->
    <link href="assets/css/layout/header.css" rel="stylesheet">
    <link href="assets/css/layout/media.css" rel="stylesheet">
    <link href="assets/css/layout/menu.css" rel="stylesheet">
    <link href="assets/css/layout/firstfold.css" rel="stylesheet">
    <!-- endbuild -->
    
    <!-- build:inlinejs -->
    <script src="assets/js/async.js"></script>
    <!-- endbuild -->
    
O projeto vem com:

Bootstrap3
Sass com watch
Jquery
Minificação e Concatenação de CSS
Minificação e Concatenação de JS
Minificação de HTML
Inline de CSS e JS
Otimização de img
SpriteSvg
Autoprefixer CSS
Rev (hash de arquivos)
Server browserSync com watch
csslint
jshint



