"use client";

import { useEffect } from "react";

export default function Page({ params }: { params: { shortKey: string } }) {
  const fallbackFunction = () => {
    if (document.hidden) {
      return;
    }

    window.location.replace("https://google.com");
  };

  const redirectFunction = () => {
    window.location.replace("ecomapp://products/details?id=1");
  };

  useEffect(() => {
    const fallbackTimer = setTimeout(fallbackFunction, 500);

    redirectFunction();

    return () => clearTimeout(fallbackTimer);
  }, []);

  return <>Redirecting to {params.shortKey}...</>;
}
