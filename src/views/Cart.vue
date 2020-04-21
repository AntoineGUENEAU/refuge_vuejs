<template>
    <ul class="list-group">
        <PetItemComponenent v-for="pet in pets_in_cart" :pet="pet" :hide_icon_cart="true" :key="pet.id"></PetItemComponenent>
    </ul>
</template>

<script>
    import PetItemComponenent from '../components/PetItemComponenent'

    export default {
        name: 'Cart',
        components: {
            PetItemComponenent
        },
        computed : {
            pets_in_cart : function(){
                return this.$store.getters.cart
            }
        }
    }
</script>
