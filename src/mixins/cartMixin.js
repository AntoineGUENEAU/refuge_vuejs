let cartMixin = {
    methods : {
        addCart : function () {
            this.$store.commit('addCart', this.pet)
        }
    }
}

export default cartMixin;