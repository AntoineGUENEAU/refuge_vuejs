<template>
    <li class="list-group-item">
        <img class="picture" :src="pet.image">
        <router-link :to="{ name: 'PetShow', params: { id: pet.id }}">{{pet.race.toUpperCase()}} - {{pet.name}}
        </router-link>
        <btn-add-cart v-if="!hide_icon_cart" :pet="pet"></btn-add-cart>
    </li>
</template>

<script>
    import BtnAddCart from "../plugins/cart-plugin/components/BtnAddCart";

    export default {
        components: {BtnAddCart},
        name: "PetItemComponenent",
        props: {
            hide_icon_cart : null,
            pet : null,
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