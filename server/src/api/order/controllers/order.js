"use strict";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * order controller
 * Strapi provides this controller so you can integrate stripe with it for payment and orders
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, userName, email } = ctx.request.body;

    try {
      // Retrieve item information
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::item.item")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: product.count,
          };
        })
      );

      // Create a stripe session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        customer_email: email,
        mode: "payment",
        // Stripe helps redirect
        success_url: "http://localhost:5173/checkout/success",
        cancel_url: "http://localhost:5173",
        line_items: lineItems,
      });

      //   Create the item in backend - strapi- creates order automatically
      //   await strapi.service("api::order.order").create({
      //     data: { userName, products, stripeSessionId: session.id },
      //   });

      await strapi
        .service("api::order.order")
        .create({ data: { userName, products, stripeSessionId: session.id } });

      //   Return session id for front end to use
      return { id: session.id };
    } catch (error) {
      ctx.response.status = 500;
      return { error: { message: "There was a problem creating the charge." } };
    }
  },
}));
