import { loadScript } from "@paypal/paypal-js";
loadScript({ "client-id": AXQ1rBMcyZacWk8Sxm8MNyz2FYbvaW0NiJuQXSxLY10lWj9FbN2J3-E0H2u0WYF-iYXqBR4bZlT8MqTd})
.then((paypal) => {
    // start to use the PayPal JS SDK script
})
.catch((err) => {
    console.error("failed to load the PayPal JS SDK script", err);
});