import BtnAddCart from "./components/BtnAddCart";

const btnCartPlugin = {
    install(Vue) {
        Vue.component('btn-add-card' , BtnAddCart)
    }
}

export default btnCartPlugin;