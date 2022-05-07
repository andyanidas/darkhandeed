import fb from "../images/icons/facebook_icon.png";
import ins from "../images/icons/instagram_icon.png";
import email from "../images/icons/email_icon.png";
import phone from "../images/icons/phone_icon.png";
import logo from "../images/icons/main_logo.png";
import image1 from "../images/slider/1.jpeg";
import image2 from "../images/slider/2.jpeg";
import image3 from "../images/slider/3.jpeg";
import slideLogo from "../images/slider/logo_name.png";
import { URL } from "../util/constants";

export const images = {
  logos: {
    fb: fb,
    inst: ins,
    email: email,
    phone: phone,
    logo: logo,
  },
  slide: {
    image1: image1,
    image2: image2,
    image3: image3,
  },
  other: {
    slideLogo: slideLogo,
  },
};

export const fetchService = async (path, method) => {
  return await fetch(URL + path, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  // }
};
export const contentFetch = async (url) => {
  return await fetchService(url, "GET");
};
