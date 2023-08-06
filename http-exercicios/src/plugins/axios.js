import Vue from "vue";
import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://curso-vue-ae00b-default-rtdb.firebaseio.com/",
    });

    Vue.prototype.$http.interceptors.request.use(
      (config) => {
        // eslint-disable-next-line no-console
        //   console.log(config);

        return config;
      },
      (error) => Promise.reject(error)
    );

    Vue.prototype.$http.interceptors.response.use(
      (res) => {
        // const array = [];

        // for (let chave in res.data) {
        //   array.push({ id: chave, ...res.data[chave] });
        // }

        // res.data = array

        return res
      },
      (error) => Promise.reject(error)
    );
  },
});
