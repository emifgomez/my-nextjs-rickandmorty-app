import Navigator from "@/components/Navigator/Navigator";
import { Routes } from "@/models/routes.model";
import Image from "next/image";
import Mustachy from "../public/images/mustachy_.jpg";
import { mustachyBlur } from "./models";
import Script from "next/script";
import { lazy, Suspense } from "react";

 const Card = lazy(() => import("../components/Card/Card"));
/* const Card = dynamic(() => import("../components/Card/Card"), {ssr: false}); */

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <>
      <div style={{ position: "relative" }}>
        <h1>Welcome to Rick and Morty App</h1>
        <h2>What do you want to see?</h2>
        <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
        <Image
          alt="Mustachy"
          src={Mustachy}
          blurDataURL={mustachyBlur}
          placeholder="blur"
          priority
        />
      </div>
    </>
    </Suspense>
  );
}
