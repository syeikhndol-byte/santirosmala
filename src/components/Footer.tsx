import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <Container className="p-10 bg-black text-gray-100 flex items-center justify-between">
      <Logo title="Santi Rosmala" className="text-white" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link href={"https://www.facebook.com"} target="blank">
          <BsFacebook className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
        <Link href={"https://www.instagram.com"} target="blank">
          <BsInstagram className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
      </div>
      <p className="text-sm text-gray-300">
        © All rights reserved{" "}
        <Link
          href={"/"}
          target="blank"
          className="hover:text-white font-semibold duration-200"
        >
          @cso
        </Link>
      </p>
    </Container>
  );
};

export default Footer;
