import Image from "next/image";
import React from "react";
import { useRecoilValue } from "recoil";
import HeaderHome from "../components/Header";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import { LoginUserAtom } from "../lib/recoil-atoms";

const confirmation = () => {
  const user = useRecoilValue(LoginUserAtom);
  return (
    <Layout pageTitle="Robin Tiles">
      <HeaderHome extraClassName="color" page="review" />
      <MobileMenu />

      <section style={{ paddingTop: 74 }}>
        <div class="container mt-5 mb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8">
              <div class="card">
                <div class="text-left logo p-2 px-5">
                  {/* {" "}
                  <Image
                    src="https://i.imgur.com/2zDU056.png"
                    width="50"
                    height={50}
                  />{" "} */}
                  <p style={{ fontSize: 35, marginTop: 20 }}>StickPix</p>
                </div>
                <div class="invoice p-5">
                  <h5>Your order Confirmed!</h5>{" "}
                  <span class="font-weight-bold d-block mt-4">
                    Hello, {user?.user?.name?.toUpperCase()}
                  </span>{" "}
                  <span>You order has been confirmed</span>
                  <div class="payment border-top mt-3 mb-3 border-bottom table-responsive">
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <td>
                            <div class="py-2">
                              {" "}
                              <span class="d-block text-muted">
                                Order Date
                              </span>{" "}
                              <span>
                                {new Date().toISOString().slice(0, 10)}
                              </span>{" "}
                            </div>
                          </td>
                          <td>
                            <div class="py-2">
                              {" "}
                              <span class="d-block text-muted">
                                Order No
                              </span>{" "}
                              <span>MT12332345</span>{" "}
                            </div>
                          </td>
                          {/* <td>
                            <div class="py-2">
                              {" "}
                              <span class="d-block text-muted">
                                Payment
                              </span>{" "}
                              <span>
                                <img
                                  src="https://img.icons8.com/color/48/000000/mastercard.png"
                                  width="20"
                                />
                              </span>{" "}
                            </div>
                          </td> */}
                          <td>
                            <div class="py-2">
                              {" "}
                              <span class="d-block text-muted">
                                Shiping Address
                              </span>{" "}
                              <span>414 Advert Avenue, NY,USA</span>{" "}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="product border-bottom table-responsive">
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <td width="20%">
                            {" "}
                            <Image
                              src="https://i.imgur.com/u11K1qd.jpg"
                              width="90"
                              height={90}
                              //   layout="fill"
                            />{" "}
                          </td>
                          <td width="60%">
                            {" "}
                            <span class="font-weight-bold">
                              Men's Sports cap
                            </span>
                            <div class="product-qty">
                              {" "}
                              <span class="d-block">Quantity:1</span>{" "}
                              <span>Color:Dark</span>{" "}
                            </div>
                          </td>
                          <td width="20%">
                            <div class="text-right">
                              {" "}
                              <span class="font-weight-bold">$67.50</span>{" "}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="20%">
                            {" "}
                            <Image
                              src="https://i.imgur.com/SmBOua9.jpg"
                              width="70"
                              height={90}
                              //   layout="fill"
                            />{" "}
                          </td>
                          <td width="60%">
                            {" "}
                            <span class="font-weight-bold">
                              Men's Collar T-shirt
                            </span>
                            <div class="product-qty">
                              {" "}
                              <span class="d-block">Quantity:1</span>{" "}
                              <span>Color:Orange</span>{" "}
                            </div>
                          </td>
                          <td width="20%">
                            <div class="text-right">
                              {" "}
                              <span class="font-weight-bold">$77.50</span>{" "}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="row d-flex justify-content-end">
                    <div class="col-md-5">
                      <table class="table table-borderless">
                        <tbody class="totals">
                          <tr>
                            <td>
                              <div class="text-left">
                                {" "}
                                <span class="text-muted">Subtotal</span>{" "}
                              </div>
                            </td>
                            <td>
                              <div class="text-right">
                                {" "}
                                <span>$168.50</span>{" "}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="text-left">
                                {" "}
                                <span class="text-muted">
                                  Shipping Fee
                                </span>{" "}
                              </div>
                            </td>
                            <td>
                              <div class="text-right">
                                {" "}
                                <span>$22</span>{" "}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="text-left">
                                {" "}
                                <span class="text-muted">Tax Fee</span>{" "}
                              </div>
                            </td>
                            <td>
                              <div class="text-right">
                                {" "}
                                <span>$7.65</span>{" "}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="text-left">
                                {" "}
                                <span class="text-muted">Discount</span>{" "}
                              </div>
                            </td>
                            <td>
                              <div class="text-right">
                                {" "}
                                <span class="text-success">$168.50</span>{" "}
                              </div>
                            </td>
                          </tr>
                          <tr class="border-top border-bottom">
                            <td>
                              <div class="text-left">
                                {" "}
                                <span class="font-weight-bold">
                                  Subtotal
                                </span>{" "}
                              </div>
                            </td>
                            <td>
                              <div class="text-right">
                                {" "}
                                <span class="font-weight-bold">
                                  $238.50
                                </span>{" "}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p>
                    We will be sending shipping confirmation email when the item
                    shipped successfully!
                  </p>
                  <p class="font-weight-bold mb-0">
                    Thanks for shopping with us!
                  </p>{" "}
                  <span>Nike Team</span>
                </div>
                <div class="d-flex justify-content-between footer p-3">
                  {" "}
                  <span>
                    Need Help? visit our <a href="#"> help center</a>
                  </span>{" "}
                  <span>12 June, 2020</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default confirmation;
