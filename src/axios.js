import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/clone-36b01/us-central1/api", // THE API (cloud function) URL

  //firebase deploy --only functions
  //if blaze plan not active it will not work
  // copy that url to here in the place of local host
  //after npm run build
  //don't run firebase deploy it will deploy functions and hosting both
  //instead run firebase deploy --only hosting
});

export default instance;
