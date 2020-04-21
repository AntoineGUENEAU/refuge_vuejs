<template>
    <div class="card">
        <div class="card-header">
            Fiche animal
        </div>
        <div class="card-body">
            <p>Nom : {{pet.name}}</p>
            <p>Espèce : {{pet.race}}</p>
            <div>
                Prescritions :
                <ul v-for="(prescription) in pet.prescriptions" :key="prescription.name">
                    <li>Date : {{ prescription.date }}</li>
                    <li>Nom du médicament :{{ prescription.prescription.name }}</li>
                </ul>
            </div>
            <router-link :to="{ name: 'PetEdit', params: { id: pet.id }}"><button class="btn btn-secondary">Modifier la fiche animal</button></router-link>
            <button class="btn btn-primary float-right" @click="addCart">Ajouter au panier</button>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'PetShow',
        computed: {
            pet: function() {
                return this.$store.getters.getTodoById(this.$route.params.id)
            }
        },
        methods : {
            addCart : function () {
                this.$store.commit('addCart', this.pet)
            }
        }
    }
</script>
