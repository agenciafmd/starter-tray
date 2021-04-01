![Logo](https://github.com/agenciafmd/starter/raw/master/public/images/logo.png "Logo")
# Tray starter
Projeto base para criação de lojas virtuais na plataforma Tray

## Primeira instalação

Pré-requisitos: Ruby v2.3.3, RVM

### Instalar o RVM

```
$ gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
$ gpg-connect-agent --dirmngr 'keyserver --hosttable'
$ \curl -sSL https://get.rvm.io | bash -s stable
```

### Instalar Ruby v2.3.3

```
$ rvm pkg install openssl
$ rvm install 2.3.3 --with-openssl-dir=$HOME/.rvm/usr
```

### Instalar o opencode_theme

```
$ gem install faraday -v 1.0.1
$ gem install launchy -v 2.4.3
$ gem install opencode_theme
$ bundle install
```

## Novo projeto

Pré-requisitos: NodeJS, NPM e GULP

```
$ git clone git@gitlab.com:mixdinternet/starter-tray.git
$ cd starter-tray
$ npm install
```

## Configuração do tema

Configure a loja que você vai trabalhar:

```
$ cd theme
$ opencode configure API_KEY PASSWORD THEME_ID (veja a Obs: logo abaixo)
```

- API_KEY e PASSWORD são chaves individuais disponíveis em Minha loja > Design da loja > Lista de desenvolvedores

- THEME_ID é o id único do tema que irá alterar (não pode estar publicado)

Para assistir os arquivos, compilá-los e subir para a Tray:

```
$ gulp default
``` 

Pronto, comece a editar seus arquivos e você verá o gulp e o opencode trabalhando por você!

## Material de apoio

- [Documentação da Tray](https://atendimento.tray.com.br/hc/pt-br/categories/360002365692-Opencode)
- [Tema original](https://lojadetestetemasneakersstore.commercesuite.com.br/)
- [Documentação do tema](https://manuais.netzee.com.br/tray/sneakers-store/)
- [Issues do Opencode no Github](https://github.com/tray-tecnologia/opencode_theme/issues/44)
- [Utilizando o Gulp](https://atendimento.tray.com.br/hc/pt-br/articles/360027774451-Gerando-CSS-e-JS-dinamicamente-utilizando-o-workflow-de-temas)