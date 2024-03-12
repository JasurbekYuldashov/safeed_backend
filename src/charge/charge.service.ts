import { Injectable } from '@nestjs/common';
import { CreateChargeDto } from './dto/create-charge.dto';
import { UpdateChargeDto } from './dto/update-charge.dto';
import Stripe from 'stripe';
import { PaymentsApi, Environment, Client } from 'square';
import * as u from 'uuid';

@Injectable()
export class ChargeService {
  async create(charge: any) {
    try {
      // const response = await client.paymentsApi.createPayment({
      //   idempotencyKey: u.v4(),
      //   amountMoney: {
      //     amount: BigInt("1000"),
      //     currency: 'USD',
      //   },
      //   sourceId: "1",
      // });
      // console.log(response)
      // return {response};
      return {};
    } catch (error) {
      console.log(error);
      return { response: {} };
    }
  }

  // async create(createChargeDto: CreateChargeDto) {
  //   const priceData = {
  //     // Define your product details here
  //     currency: 'usd',
  //     product_data: {
  //       name: 'Your product name',
  //       description: 'Your product description',
  //     },
  //     unit_amount: 1000, // Price in cents
  //     quantity: 1,
  //   };

  //   const session =
  //     await stripe.paymentLinks.create({
  //       // prices: [priceData]     amount: 5999,
  //       currency: 'usd',
  //       line_items: [{ price: '1000', quantity: 1 }],
  //       // Each payment method type has support for different currencies. In order to
  //       // support many payment method types and several currencies, this server
  //       // endpoint accepts both the payment method type and the currency as
  //       // parameters. To get compatible payment method types, pass
  //       // `automatic_payment_methods[enabled]=true` and enable types in your dashboard
  //       // at https://dashboard.stripe.com/settings/payment_methods.
  //       //
  //       // Some example payment method types include `card`, `ideal`, and `link`.
  //       payment_method_types: ['link', 'card'],
  //       // Set other payment link options like success_url and cancel_url
  //     });

  //   return { url: session };
  // }

  async retrieve(body: any) {
    // return stripe.charges.retrieve(body.id);
  }

  findAll() {
    return `This action returns all charge`;
  }

  findOne(id: number) {
    return `This action returns a #${id} charge`;
  }

  update(id: number, updateChargeDto: UpdateChargeDto) {
    return `This action updates a #${id} charge`;
  }

  remove(id: number) {
    return `This action removes a #${id} charge`;
  }
}
