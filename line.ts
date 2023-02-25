import axios from "npm:axios@1.2.0";

const line = async (text: string) => {
  const token = Deno.env.get("LINE_TOKEN");
  if (!token) {
    console.error("環境変数`LINE_TOKEN'をセットしてください。");
    return
  }
  await axios.post(
    "https://api.line.me/v2/bot/message/broadcast",
    {
      messages:
        [
          {
            "type": "text",
            "text": text
          }
        ]
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }
  );
}

export default line;
