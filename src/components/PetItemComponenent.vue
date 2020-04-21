<template>
    <li class="list-group-item">
        <router-link :to="{ name: 'PetShow', params: { id: pet.id }}">
            {{pet.race}} - {{pet.name}}
        </router-link>
        <btn-add-cart :pet="pet"></btn-add-cart>
    </li>
</template>

<script>
    import BtnAddCart from "./BtnAddCart";

    export default {
        components: {BtnAddCart},
        name: "PetItemComponenent",
        props: {
            pet: null,
        }
    }
</script>