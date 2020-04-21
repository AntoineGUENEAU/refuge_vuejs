<template>
    <div id="app">
        <nav class="navbar navbar-light bg-light justify-content-between">
            <router-link to="/" class="navbar-brand">Nos animaux</router-link>
            <span class="float-right"><router-link to="/cart" class="navbar-brand">Panier <span class="badge btn-danger">{{$store.getters.cartCounter}}</span></router-link></span>
        </nav>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<style>
    .container{
        margin-top: 50px;
    }
</style>