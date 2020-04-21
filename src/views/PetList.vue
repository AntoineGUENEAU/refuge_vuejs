<template>
    <ul class="list-group">
        <PetItemComponenent v-for="pet in $store.state.pets" :pet="pet" :hide_icon_cart="false" :key="pet.id"></PetItemComponenent>
    </ul>
</template>

<script>
    import PetItemComponenent from '../components/PetItemComponenent'

    export default {
        name: 'PetList',
        components: {
            PetItemComponenent
        }
    }
</script>

