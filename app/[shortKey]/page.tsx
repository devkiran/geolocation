"use client";

import { useEffect } from "react";

const keysMap = {
  "1": "ecomapp://products/details?id=1",
  "2": "ecomapp://products/details?id=2",
  products: "ecomapp://products",
  home: "ecomapp://",
} as const;

export default function Page({ params }: { params: { shortKey: string } }) {
  const fallbackFunction = () => {
    if (document.hidden) {
      return;
    }

    window.location.replace("https://google.com");
  };

  const redirectFunction = () => {
    window.location.replace(keysMap[params.shortKey as keyof typeof keysMap]);
  };

  useEffect(() => {
    const fallbackTimer = setTimeout(fallbackFunction, 500);

    redirectFunction();

    return () => clearTimeout(fallbackTimer);
  }, []);

  return <></>;
}
