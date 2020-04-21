import Vue from 'vue'
import Vuex from 'vuex'
import Pet from "../models/Pet";
import Prescription from "../models/Prescription";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pets: [
            new Pet(1, 'chien', 'Milou', [
                {
                    'prescription'  : new Prescription('Héxomédine'),
                    'date'          : '2019-12-12'
                }
            ]),
            new Pet(2, 'chien', 'Idéfix', [
                {
                    'prescription'  : new Prescription('Pholcodine'),
                    'date'          : '2020-01-01'
                },
                {
                    'prescription'  : new Prescription('Dimétane'),
                    'date'          : '2020-21-01'
                },
                {
                    'prescription'  : new Prescription('Héxomédine'),
                    'date'          : '2020-09-02'
                }
            ]),
            new Pet(3, 'chat', 'Gardfiel', [
                {
                    'prescription'  : new Prescription('Nifluril'),
                    'date'          : '2020-04-04'
                },
                {
                    'prescription'  : new Prescription('Flunir'),
                    'date'          :'2020-09-03'
                }
            ]),
            new Pet(4, 'chien', 'Snoopy', [
                {
                    'prescription'  : new Prescription('Niflugel'),
                    'date'          : '2020-12-02'
                }
            ]),
        ],
        cart : []
    },
    getters: {
        getTodoById: (state) => (id) => {
            return state.pets.find(pet => pet.id == id)
        },
        cartCounter : (state) => state.cart.length
    },
    mutations: {
        addCart : function (state , pet) {
            state.cart.push(pet);
        }
    },
    actions: {},
    modules: {}
})
