import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import { Card, Col, Form } from "react-bootstrap";
import { Button } from "react-scroll";
import axios from "axios";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  confirmOrderAtom,
  LoginUserAtom,
  OrderAtom,
} from "../lib/recoil-atoms";

const checkout = () => {
  const user = useRecoilValue(LoginUserAtom);
  const [addForm, setAddForm] = useState({
    add1: "",
    add2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [isorderConfirm, setIsorderConfirm] = useState(false);
  const orderDetails = useRecoilValue(OrderAtom);
  const [conOrder, setConOrder] = useRecoilState(confirmOrderAtom);
  const router = useRouter();

  const BASE_URI = "https://tilesobz.herokuapp.com";

  function loadRazorpay() {
    const orderAmount =
      orderDetails?.images?.length * Number(orderDetails?.price);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        // setLoading(true);
        // const result = await axios.post("/api/order/create", {
        //   amount: orderAmount + "00",
        // });
        const result = await axios.post(`${BASE_URI}/api/order/create`, {
          amount: orderAmount + "00",
        });
        const { amount, id: order_id, currency } = result.data;
        // const {
        //   data: { key: razorpayKey },
        // } = await axios.get("/get-razorpay-key");

        const options = {
          key: "rzp_test_rBDudTLHXmz33C",
          amount: amount,
          currency: currency,
          name: user.user.name,
          description: "StickTiles",
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post(`${BASE_URI}/api/order/callback`, {
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              ...addForm,
              images: orderDetails.images,
              user: user.user._id,
            });
            alert(result.data.msg);
            setConOrder(result.data.data);
            setIsorderConfirm(true);

            // fetchOrders();
          },
          prefill: {
            name: user.user.name,
            email: user.user.email,
            contact: user.user.mobile,
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#80c0f0",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        // setLoading(false);
      }
    };
    document.body.appendChild(script);
  }

  useEffect(() => {
    if (isorderConfirm) {
      router.push("/confirmation");
    }
  }, [isorderConfirm]);

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, []);

  const handleChange = (name) => (e) => {
    setAddForm({ ...addForm, [name]: e.target.value });
  };

  return (
    <Layout pageTitle="Robin Tiles">
      <Header />
      <MobileMenu />

      <section style={{ paddingTop: 74, background: "#CAD3C8" }}>
        <div
          className="container min-vh-100 p-5"
          style={{ background: "#fff" }}
        >
          <div className="row m-0 justify-content-center align-center">
            <Card border="primary" className="w-100">
              <Card.Header>
                <h3>Checkout</h3>
              </Card.Header>
              <Card.Body>
                <Card.Title>Add Address</Card.Title>
                <div className="row">
                  <div className="col-md-8 col-12">
                    <div className="form-group">
                      <label htmlFor="inputAddress">Address</label>
                      <input
                        type="text"
                        onChange={handleChange("add1")}
                        value={addForm.add1}
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress2">Address 2</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChange("add2")}
                        value={addForm.add2}
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label htmlFor="inputCity">City</label>
                        <input
                          type="text"
                          onChange={handleChange("city")}
                          value={addForm.city}
                          className="form-control"
                          id="inputCity"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <input
                          type="text"
                          className="form-control"
                          value={addForm.state}
                          onChange={handleChange("state")}
                          id="state"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputZip">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleChange("zip")}
                          value={addForm.zip}
                          id="inputZip"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="col-md-4 col-12 shadow p-2">
                    <p>Order Detail</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{orderDetails?.images?.length} Tile</span>
                      <div className="">
                        <span>Rs.</span>
                        <span>
                          {orderDetails?.images?.length *
                            Number(orderDetails?.price)}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Shipping</span>
                      <div>
                        <span>Free</span>
                      </div>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <strong>Total</strong>
                      <div>
                        <span>
                          Rs.{" "}
                          {orderDetails?.images?.length *
                            Number(orderDetails?.price)}
                        </span>
                      </div>
                    </div>
                    <button
                      className="btn"
                      style={{ padding: 10, float: "right" }}
                      onClick={loadRazorpay}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default checkout;
