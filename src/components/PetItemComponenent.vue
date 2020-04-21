<template>
    <li class="list-group-item">
        <router-link :to="{ name: 'PetShow', params: { id: pet.id }}">
            {{pet.race}} - {{pet.name}}
        </router-link>
        <button class="float-right btn btn-primary" @click="addCart">Ajout au panier</button>
    </li>
</template>

<script>
    export default {
        name: "PetItemComponenent",
        props: {
            pet: null,
        },
        methods : {
            addCart : function () {
                this.$store.commit('addCart', this.pet)
            }
        }
    }
</script>