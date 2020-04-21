<template>
    <li class="list-group-item">
        <img class="picture" :src="pet.image">
        <router-link :to="{ name: 'PetShow', params: { id: pet.id }}">{{pet.race.toUpperCase()}} - {{pet.name}}
        </router-link>
        <btn-add-cart :pet="pet"></btn-add-cart>
    </li>
</template>

<script>
    import BtnAddCart from "../plugins/cart-plugin/components/BtnAddCart";

    export default {
        components: {BtnAddCart},
        name: "PetItemComponenent",
        props: {
            pet: null,
        }
    }
</script>

<style>
    img{
        height: 50px;
        width: 50px;
        margin-right: 20px;
    }
</style>