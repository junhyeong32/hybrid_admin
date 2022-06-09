import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isAndroid,
  isIOS,
} from "react-device-detect";
import IosLogin from "./login/IosLogin";
import AndroidLogin from "./login/AndroidLogin";

export default function Home() {
  return <>{isIOS ? <IosLogin /> : <AndroidLogin />}</>;
}
