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
                },

            ], 'https://www.secondechance.org/uploads/anim/59e35a863a293789786498.jpg'),
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
            ], 'https://www.animomut.fr/blog/wp-content/uploads/2019/06/unnamed-file-e1560779755739.jpg'),
            new Pet(3, 'chat', 'Gardfiel', [
                {
                    'prescription'  : new Prescription('Nifluril'),
                    'date'          : '2020-04-04'
                },
                {
                    'prescription'  : new Prescription('Flunir'),
                    'date'          :'2020-09-03'
                }
            ], 'https://i.pinimg.com/originals/33/53/77/335377f3ba512726cc4e67b8fdc7a3b8.jpg'),
            new Pet(4, 'chien', 'Snoopy', [
                {
                    'prescription'  : new Prescription('Niflugel'),
                    'date'          : '2020-12-02'
                }
            ], 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTib3m7evU_A5IJSLoYtwjVStj0R0ow1KsTB0vO8cdJTEKR_f7F&usqp=CAU'),
        ],
        cart : []
    },
    getters: {
        getTodoById: (state) => (id) => {
            return state.pets.find(pet => pet.id == id)
        },
        cartCounter : (state) => state.cart.length,
        cart : (state) => state.cart,
    },
    mutations: {
        addCart : function (state , pet) {
            state.cart.push(pet);
        }
    },
    actions: {},
    modules: {}
})
