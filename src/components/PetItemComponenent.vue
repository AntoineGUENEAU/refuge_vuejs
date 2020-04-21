<template>
    <li class="list-group-item">
        <router-link :to="{ name: 'PetShow', params: { id: pet.id }}">
            {{pet.race}} - {{pet.name}}
        </router-link>
        <button class="float-right btn btn-primary" @click="addCart">Ajout au panier</button>
    </li>
</template>

<script>
    import cartMixin from "../mixins/cartMixin";

    export default {
        mixins: [cartMixin],
        name: "PetItemComponenent",
        props: {
            pet: null,
        }
    }
</script>