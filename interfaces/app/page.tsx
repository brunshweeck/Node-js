"use client"

import Image from "next/image"
import Link from "next/link";
import logo from "../public/logo.jpg";
import {Typewriter, Cursor} from "react-simple-typewriter";
import ButtonsProvider from "./components/ButtonsProvider";
import { useSession } from "next-auth/react";


export default function Home() {

  const{data: session}= useSession()
  console.log(session);
  return (
    <>
      <section className="w-full h-screen flex items-center justify-center flex-col gap-2  ">
        <Image width={100} height={100} src={logo} alt="joli logo" className="mb-4 object-contain" />
        <h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center ">
          <Typewriter typeSpeed={50} words={["Bienvenue", "welcome", "willkommen"]} loop={0} />
          <span><Cursor/></span> 
        </h1>
        <p className="my-2 text-center">Rejoinez une aventure de codeur</p>
        <ButtonsProvider/>
      </section>
      
    </>
  );
}
