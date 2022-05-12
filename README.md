# Study-Vue3
Repositório de estudo para Vue3

Estudos de Vue3:
---Without tag Unica (DIV)

- Agora no vue 3 é possivel utilizar as tags html sem ficar em volta de uma tag
unica que normalmente utilizamos um div exemplo: isso agora é permitido.
* Atenção atualizar ESLint para versão 3 do Vue.js
<template>
    <h1>teste</h1>
    <h2>teste</h2>
</template>

* Versão anterior Vue 2:
<template>
    <div>
        <h1>teste</h1>
        <h2>teste</h2>
    </div>
</template>
=================================================
--- Reatividade nova!
- A Reatividadedo vue 3 foi escrita do zero pois antes era feita usada um sistema de
observação que ate então era feito por Object.defineProperty() que é um recuros do javascript.
No Vue3 irá utilizar ES2015Proxies exemplo da nova alteração:
Objeto: user:{
name: ''
}
* Observação no objeto o atributo email nao esta criado, e no vue3 ele adiciona
assim que clicarmos no botão de adicionar email.
<button @click="user.name = 'joel de paula'">add nome</button>
<button @click="user.email = 'joel de paula'">add email</button>

*PS: no vue 2 esse recurso nao funciona pois o atributo email nao existe para ser adicionado!
só funciona se usar o ( $set )

==================================================

-- Portals

- É uma forma de transferir o codigo de um component para o arquivo html do vue
onde ele monta a <div id="app"></div>, exemplo:
* arquivo html do vue
<div id="modal"></div>

* exemplo de component com Portals
<Portal target="#modal">
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            You’ve successfully created a project with
            <a target="_blank" href="https://vitejs.dev/">Vite</a> +
            <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
        </h3>
    </div>
</Portal>

- Tudo que estiver no portal vai ser transferido para a tag <div id="modal"></div>
