import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Row from "../../src/components/Box/Row";
import Column from "../../src/components/Box/Column";
import { Typography, Button, Divider } from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isAndroid,
  isIOS,
} from "react-device-detect";
import { useRouter } from "next/router";
import HomeLayout from "../../src/components/Layout/HomeLayout";
import OrderBox from "../../src/components/Box/OrderBox";
import { numberFormat } from "../../src/utility/math";
import ShoppingmallBox from "../../src/components/Box/ShoppingmallBox";
import BackgroundImage from "../../src/components/Box/BackgroundImage";
import StatusBox from "../../src/components/Box/Status";
import TradeTable from "../../src/components/Table/Trade";

const monthList = [
  { text: "1달", value: 1 },
  { text: "3달", value: 3 },
  { text: "6달", value: 6 },
  { text: "1년", value: 12 },
];
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Chart } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
const data = {
  // labels 사용 안 함
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      tension: 0.1,
      showLine: false,
    },
  ],
};

const options = [
  {
    responsive: true,
    interaction: { mode: "index", intersect: false },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
];

export default function Detail() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [order_list, setOrderList] = useState([]);
  const [month, setMonth] = useState(1);

  return (
    <Column sx={{ overflowY: "scroll", p: "0 20px 80px 20px" }}>
      <BackgroundImage w="100vw" h={304} url="x.png" sx={{ ml: "-20px" }} />
      <Row
        alignItems={"center"}
        justifyContent={"between"}
        sx={{
          width: "100vw",
          background: "#F6F8FA",
          p: "11px 20px 11px 20px",
          ml: "-20px",
        }}
      >
        <Row alignItems={"center"}>
          <BackgroundImage w={45} h={45} url="x.png" />
          <Column>
            <Typography variant="normal" color="gray.scale8">
              스토어 | 로에
            </Typography>
            <Typography variant="normal" color="gray.scale8">
              02-1234-5678
            </Typography>
          </Column>
        </Row>
        <Image src="/phone.png" width={23} height={23} alt="phone" />
      </Row>
      <StatusBox />
      <Typography variant="h5" color="gray.scale10">
        스토어 | 로에
      </Typography>
      <Typography variant="normal" color="gray.scale8">
        02-1234-5678
      </Typography>
      <Typography variant="normal" color="primary">
        1개 구매
      </Typography>
      <Typography variant="ㅗ2" color="gray.scale8">
        {numberFormat(10000)}원
      </Typography>
      <Divider />
      <Row justifyContent={"between"} sx={{ width: "100%" }}>
        <Typography variant="normal" color="gray.scale6">
          주문번호
        </Typography>
        <Typography variant="normal" color="gray.scale10">
          주문번호
        </Typography>
      </Row>
      <Row justifyContent={"between"} sx={{ width: "100%", mt: 1 }}>
        <Typography variant="normal" color="gray.scale6">
          주문일자
        </Typography>
        <Typography variant="normal" color="gray.scale10">
          주문일자
        </Typography>
      </Row>
      <Typography variant="h2" color="gray.scale10">
        시세
      </Typography>
      <Row justifyContent={"between"} sx={{ width: "100%" }}>
        <Column alignItems={"center"} justifyContent={"center"}>
          <Image
            src="/order/deliver.png"
            width={30}
            height={30}
            alt=""
            layout="fixed"
          />
          <Typography variant="small" color="gray.scale6">
            배송현황
          </Typography>
        </Column>
        <Row
          alignItems={"center"}
          justifyContent={"between"}
          sx={{
            width: "40%",
            height: 56,
            background: "#F1F3F4",
            borderRadius: "6px",
            p: "16px 14px 16px 14px",
          }}
        >
          <Image
            src="/order/review.png"
            width={24}
            height={24}
            alt=""
            layout="fixed"
          />
          <Divider orientation="vertical" />
          <Column alignItems={"center"}>
            <Typography variant="h7">리뷰작성</Typography>
            <Typography variant="small" color="gray.scale6">
              최대 10,000원
            </Typography>
          </Column>
        </Row>
        <Row
          alignItems={"center"}
          justifyContent={"between"}
          sx={{
            width: "40%",
            height: 56,
            background: "#F1F3F4",
            borderRadius: "6px",
            p: "16px 14px 16px 14px",
          }}
        >
          <Image
            src="/order/coin.png"
            width={24}
            height={24}
            alt=""
            layout="fixed"
          />
          <Divider orientation="vertical" />
          <Column alignItems={"center"}>
            <Typography variant="h7">구매확정</Typography>
            <Typography variant="small" color="gray.scale6">
              최대 10,000원
            </Typography>
          </Column>
        </Row>
      </Row>
      {/* <Line data={data} /> */}
      {/* <Bar data={data} options={options} /> */}
      <Line data={data} options={options} />

      <Row
        justifyContent={"between"}
        alignItems={"center"}
        sx={{ width: "100%", height: 34, background: "#F1F3F4", gap: 1 }}
      >
        {monthList.map((list, key) => (
          <Button
            key={key}
            variant={month === list.value ? "outlined" : "text"}
            color="primary"
            sx={{ width: "20%" }}
            onClick={() => setMonth(list.value)}
          >
            <Typography
              variant="small"
              color={month === list.value ? "primary" : "gray.scale7"}
            >
              {list.text}
            </Typography>
          </Button>
        ))}
      </Row>
      <Column sx={{ width: "100%" }}>
        <Typography variant="h4" color="gray.scale10">
          실거래정보
        </Typography>
        <TradeTable />
        <Button
          sx={{ height: 52, mt: 3 }}
          variant="outlined"
          color="button_gray"
        >
          <Typography variant="basic" color="gray.scale8">
            실거래 내역 더보기
          </Typography>
        </Button>
      </Column>
    </Column>
  );
}
