<template>
    <li class="list-group-item">
        <img class="picture" :src="pet.image">
        <router-link :to="{ name: 'PetShow', params: { id: pet.id }}">{{pet.race.toUpperCase()}} - {{pet.name}}
        </router-link>
        <btn-add-cart v-if="!hide_icon_cart" :pet="pet"></btn-add-cart>
        <button v-else class="float-right btn btn-primary" @click="removeFromCart">
            <svg class="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clip-rule="evenodd"/>
            </svg>
        </button>
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
        },
        methods : {
            removeFromCart : function () {
                this.$store.commit('removeCart', this.pet)
            }
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