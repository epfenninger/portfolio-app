import React, { Component, useState } from "react";
import Grid from "@mui/material/Grid";

const REACT_APP_HA_WEBHOOK = process.env.REACT_APP_HA_WEBHOOK;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.ContactForm = this.ContactForm.bind(this);
  }

  ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };

    if (submitted) {
      return (
        <>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">I'll be in touch soon.</div>
        </>
      );
    }
  };

  render() {
    return (
      <div>
        <Grid
          container
          direction="column"
          alignItems="center"
          marginTop="5vh"
          justifyContent="center"
        >
          <form
            action={REACT_APP_HA_WEBHOOK}
            onSubmit={this.ContactForm}
            method="post"
            target=""
          >
            <div className="mb-3 pt-0">
              <Grid item xs={12} p={3}>
                <h3>Contact Me!</h3>
              </Grid>
              <Grid item xs={12} p={0}>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="px-4 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                />
              </Grid>
            </div>
            <div className="mb-3 pt-0">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="px-4 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <textarea
                placeholder="Your message"
                name="message"
                className="px-4 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-2 pt-0">
              <Grid item xs={12} p={4}>
                <button
                  className="bg-blue-500 text-black active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Send a message
                </button>
              </Grid>
            </div>
          </form>
        </Grid>
      </div>
    );
  }
}

export default Contact;
