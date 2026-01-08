const line = async (text: string) => {
  const token = Deno.env.get("LINE_TOKEN");
  if (!token) {
    console.error("環境変数`LINE_TOKEN'をセットしてください。");
    return;
  }
  await fetch("https://api.line.me/v2/bot/message/broadcast", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [{ type: "text", text: text }],
    }),
  });
}

export default line;
