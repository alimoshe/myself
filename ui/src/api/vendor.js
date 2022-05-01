import { VENDOR_BASE_URL } from "../config/api-urls";
const vendorApi = {
  loadAllVendors: (laodCompletion) => {
    fetch(VENDOR_BASE_URL+'/true', { method: "GET" })
      .then((res) => res.json())
      .then((result) => {
        laodCompletion(result);
      });
  },
  createVendor: (vendor, createCompletion) => {
    fetch(VENDOR_BASE_URL, {
      method: "POST",
      body: JSON.stringify(vendor),
      headers: { "Content-Type": "application/json" },
    })
      .then((postResult) => postResult.json())
      .then((result) => {
        createCompletion(result);
      });
  },
  updateVendor: (oldVendor, newVendor, createCompletion) => {
    fetch(VENDOR_BASE_URL+'/ed', {
      method: "POST",
      body: JSON.stringify({oldVendor : oldVendor, newVendor : newVendor}),
      headers: { "Content-Type": "application/json" },
    })
        .then((postResult) => postResult.json())
        .then((result) => {
          createCompletion(result);
        });
  },
};

export default vendorApi;
