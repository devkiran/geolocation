import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <ul>
      <li>
        <a href="ecomapp://mobile-app-kiran.vercel.app/products">
          ecomapp://mobile-app-kiran.vercel.app/products
        </a>
      </li>

      <li>
        <a href="ecomapp://">ecomapp://</a>
      </li>

      <li>
        <a href="ecomapp://products">ecomapp://products</a>
      </li>

      <li>
        <a href="ecomapp://products/details?id=1">
          ecomapp://products/details?id=1
        </a>
      </li>
    </ul>
  );
}
