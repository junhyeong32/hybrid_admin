import Image from "next/image";
import { Container, Typography, Button, Divider } from "@mui/material";
import { useRouter } from "next/router";

export default function RouteButton({ text, route, el }) {
  const router = useRouter();
  return (
    <Button
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 0,
      }}
      onClick={() => !el && router.push(route)}
    >
      <Typography variant="basic" color="gray.scale9">
        {text}
      </Typography>
      {el ? (
        el
      ) : (
        <Image src="/my/>.png" width={5} height={12} alt="" layout="fixed" />
      )}
    </Button>
  );
}
