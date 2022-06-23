import { useState } from "react";

import { useSnackbar } from "notistack";
import { useCookies } from "react-cookie";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isAndroid,
  isIOS,
} from "react-device-detect";
import SignupForm from "../src/components/signup";

export default function Login() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [step, setStep] = useState(1);

  return <SignupForm />;
}
