import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


const api = new WooCommerceRestApi({
    url: "https://woocommerce.maktabsharif.ir",
    consumerKey: "ck_9d1adc29a1e3fce74dff2bfb61cdb52d112d6e1a",
    consumerSecret: "cs_90e4daa51516c209d807929e8a933c992e9b9db9",
    version: "wc/v3"
});

export default api
