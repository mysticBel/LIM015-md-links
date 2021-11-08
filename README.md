# Markdown Links 🔗 ✨

```js
`
█████████████████████████████████████████████████████████████
███████████             Welcome to             ██████████████
███████████ █▀▄▀█ █▀▀▄ ░░ █░░ ░▀░ █▀▀▄ █░█ █▀▀ ██████████████
███████████ █░▀░█ █░░█ ▀▀ █░░ ▀█▀ █░░█ █▀▄ ▀▀█ ██████████████
███████████ ▀░░░▀ ▀▀▀░ ░░ ▀▀▀ ▀▀▀ ▀░░▀ ▀░▀ ▀▀▀▒██████████████
█████████████████████████████████████████████████████████████
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░▄▄▄▄█▀▀▀░░░░░░░░░░░░▀▀██░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░▄███▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█▄▄▄░░░░░░░░   . . .   ░░░
░░░░░░▄▀▀░█░░░░▀█▄▀▄▀██████░▀█▄▀▄▀████▀░░░░░░░░   aw      ░░░
░░░░░░█░░░█░░░░░░▀█▄█▄███▀░░░░▀▀▀▀▀▀▀░▀▀▄░░░░░░ yeaah !!  ░░░
░░░░░░█░░░█░▄▄▄░░░░░░░░░░░░░░░░░░░░░▀▀░░░█░░░░░   . . .   ░░░
░░░░░░█░░░▀█░░█░░░░▄░░░░▄░░░░░▀███▀░░░░░░░█░░░░░░░░░░░░░░░░░░
░░░░░░█░░░░█░░▀▄░░░░░░▄░░░░░░░░░█░░░░░░░░█▀▄░░░░░░░░░░░░░░░░░
░░░░░░░▀▄▄▀░░░░░▀▀▄▄▄░░░░░░░▄▄▄▀░▀▄▄▄▄▄▀▀░░█░░░░░░░░░░░░░░░░░
░░░░░░░█▄░░░░░░░░░░░░▀▀▀▀▀▀▀░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░
░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄██░░░░░░░░░░░░░░░░░░░
░░░░░░░░▀█▄░░░░░░░░░░░░░░░░░░░░░░░░░▄▀▀░░░▀█░░░░░░░░░░░░░░░░░`
``` 

## Index

- [1. About md-links](#1-About-md-links)
- [2. How to install mdLinks?](#2-How-to-install-mdLinks-?)
- [3. Flowchart](#3-Flowchart)
- [4. Backlog & Planning](#4-Backlog-&-Planning)
- [5. Learning goals](#5-Learning-goals)


---

## 1. About md-links
 [Markdown](https://en.wikipedia.org/wiki/Markdown) is a very popular lightweight markup language among developers. 
 It is used in many platforms that handle plain text (GitHub, forums, blogs, ...), and it is very common to find several
  files in that format in any type of repository (starting with the traditional README.md).

These Markdown files usually contain links that are often broken or no longer valid and that greatly damages the value of
 the information that you want to share.


In this project, `md-links` is an executable that reads and analyzes files in Markdown format, to verify the links they contain and report some statistics.

 Options:
- `--validate` (OK, Fail)
- `--stats`    (total, unique, broken)


## 2. How to install mdLinks?



## ⬇️Install :
 Install this library with this command :   


```
npm install mysticbel-mdlinks
```
or you can also download it from github:

```
npm install mysticbel/LIM015-md-links
```


## 🔍Usage:

```js

// Usage: 
  md-links <path-to-file> [options]

// Commands:
  --v, --validate       Show validate links, makes an HTTP request to find out if the link works or not
  --s, --stats          Show basic statistics about links
  --v --s               Show statistics about links : total, unique, broken
  --validate --stats    Show statistics about links : total, unique, broken
  
// Global options:
  -h, --help            display help for command

``` 

## Options:

#### `--validate`

If we pass the `--validate` option, the module must make an HTTP request to find out if the link works or not. If the link results in a redirect to a URL that responds ok, then we will treat the link as ok.

Example:
![validate](./images/image1-v.png)

#### `--stats`

If we pass the `--stats` option, the output will be a text with basic statistics about the links. 

Example:
![stats](./images/image2-s.png)

We can also combine `--stats` and` --validate` to obtain needed statistics from the validation results. 

![val&stats](./images/image3-v-s.png)

#### `--help`

If we pass the `--help` option, the output will be a help menu with all commands.

![help](./images/image4-h.png)

#### `other option`

If we pass a non existant option, the output will be a help menu with an 'invalid command' message.

![opt-not-valid](./images/image5-opt-not-valid.png)



#### `no option`
#### What if we put a wrong path or a non-existance file?

If we do not pass any option(s) , the output will be a 'links not found' message and the path doesn't exist.

![image6-wrong-path](./images/image6-wrong-path.png)


#### What if we put a path without an option?

the output will be an array with all the links extracted from the file.

![image7-no-opt](./images/image7.png)


## 3. Flowchart

![CLI](./images/CLI-diagram.png)
![API](./images/API-diagram.png)

## 4. Backlog & Planning

 I love using Github Projects !! 😍
 
![backlog](./images/backlog.png)

## 5. Learning Objectives

## Checklist

### General

- [✔️🐱] Can be installed via `npm install --global <github-user>/md-links`

### `README.md`

- [✔️🐳] A board with the backlog for the implementation of the library. 
- [✔️🐳] Technical documentation of the library. 
- [✔️🐳] Library installation and use guide.

### API `mdLinks(path, opts)`

- [✔️🐼] The module exports a function with the expected interface (API). 
- [✔️🐼] Implement single file support.
- [✔️🐼] Implement directory support.
- [✔️🐼] Implement `options.validate`

### CLI

- [✔️🦄] Exposes executable `md-links` in the path (configured in `package.json`) 
- [✔️🦄] Runs without errors / expected output 
- [✔️🦄] Implement `--validate`
- [✔️🦄] Implement `--stats`

### Unit tests

- [✔️🐱] Unit tests cover a minimum of 70% of statements, functions, lines, and branches. 
- [✔️🐱] Pass tests (and linters) (`npm test`).


![test](./images/testing-api.png)




### NodeSchool workshoppers

- [learnyounode](https://github.com/workshopper/learnyounode)
- [how-to-npm](https://github.com/workshopper/how-to-npm)
- [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Otros recursos

- [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
- [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
- [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
- [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
- [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
- [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
- [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
- [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
- [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
- [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
- [Asíncronía en js](https://carlosazaustre.es/manejando-la-asincronia-en-javascript)
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
- [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
- [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
- [Path](https://nodejs.org/api/path.html)
- [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)










 

![image](https://media.giphy.com/media/81jB1QNsrfvNRuR9Xn/giphy.gif)
<br>
'md-links' is a project done by Maribel Maza for [Laboratoria](https://github.com/Laboratoria) , <br>October 2021 🤗
<br><br><br>
<a href="https://www.linkedin.com/in/maribel-maza/"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=flat&logo=linkedin&logoColor=white"/></a> <a href="https://github.com/mysticBel"><img alt="Github" src="https://img.shields.io/github/followers/mysticBel?label=follow&style=social"/></a> &nbsp;