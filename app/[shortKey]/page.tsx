"use client";

import { useEffect } from "react";

const keysMap = {
  "1": "ecomapp://products/details?id=1",
  "2": "ecomapp://products/details?id=2",
  products: "ecomapp://products",
  home: "ecomapp://",
} as const;

const fallbackUrlAndroid =
  "https://play.google.com/store/apps/details?id=com.openai.chatgpt&hl=en_IN";

const fallbackUrlIOS = "https://apps.apple.com/us/app/chatgpt/id6448311069";

export default function Page({ params }: { params: { shortKey: string } }) {
  // const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  // const fallbackFunction = () => {
  //   if (document.hidden) {
  //     return;
  //   }

  //   if (isIOS) {
  //     window.location.replace(fallbackUrlIOS);
  //   } else {
  //     window.location.replace(fallbackUrlAndroid);
  //   }
  // };

  // const redirectFunction = () => {
  //   window.location.replace(keysMap[params.shortKey as keyof typeof keysMap]);
  // };

  // useEffect(() => {
  //   const fallbackTimer = setTimeout(fallbackFunction, 500);
  //   redirectFunction();
  //   return () => clearTimeout(fallbackTimer);
  // }, []);

  return <h1>{params.shortKey}</h1>;
}
