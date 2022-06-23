<LoginLayout>
  <Column justifyContent={"between"} sx={{ width: "100%", height: "100%" }}>
    <Column>
      <Typography variant="big">
        안녕하세요!{" "}
        <Image src="/login/hand.png" width={32} height={32} alt="" />
      </Typography>
      <Typography variant="big" color="primary" component={"span"}>
        뭐샀지
        <Typography component={"span"} variant="big" color="black">
          입니다.
        </Typography>
      </Typography>
    </Column>
    <Column sx={{ width: "100%" }} alignItems={"center"}>
      <Button
        variant="contained"
        color="kakao"
        fullWidth
        sx={{ width: "100%", height: 56, gap: 1 }}
      >
        <Image src="/login/kakao.png" width={18} height={17} alt="" />
        카카오로 시작하기
      </Button>
      <Button
        variant="outlined"
        fullWidth
        sx={{ width: "100%", height: 56, mt: 1 }}
        onClick={() => setStep(step + 1)}
      >
        휴대전화로 시작하기
      </Button>
      <Typography variant="normal" color={"gray"} mt={"20px"}>
        휴대폰번호가 바뀌셨나요?
        <Link href="account">
          <a style={{ textDecoration: "underline", marginLeft: "8px" }}>
            계정찾기
          </a>
        </Link>
      </Typography>
    </Column>
  </Column>
</LoginLayout>;
