import Vue from 'vue';
import Vuex from 'vuex';
import moduleVideo from "./modules/video";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        video: moduleVideo,
    }
});

export default store;
