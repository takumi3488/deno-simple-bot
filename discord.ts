import axios from "npm:axios@1.2.0";

const discord = async (webhookUrl: string, text: string) => {
  const token = Deno.env.get("LINE_TOKEN");
  if (!token) {
    console.error("環境変数`LINE_TOKEN'をセットしてください。");
    return
  }
  const res = await axios.post(
    webhookUrl,
    {
      content: text
    },
    {
      headers: {
        "Content-Type": "application/json"
      },
    }
  )
  console.log(res.statusText)
}

export default discord;
