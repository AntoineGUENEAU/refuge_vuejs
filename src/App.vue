<template>
    <div id="app">
        <nav class="navbar navbar-light bg-light justify-content-between">
            <router-link to="/" class="navbar-brand">Nos animaux</router-link>
            <span class="float-right"><router-link to="/cart" class="navbar-brand">
                <svg class="bi bi-bag-fill" style="margin-right: 10px " width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4h14v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm7-2.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"/>
                </svg>
                <span class="badge btn-danger">{{$store.getters.cartCounter}}</span></router-link></span>
        </nav>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<style>
    .container {
        margin-top: 50px;
    }
</style>