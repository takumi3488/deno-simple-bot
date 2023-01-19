import axios from "npm:axios@1.2.0";

const discord = async (webhookUrl: string, text: string) => {
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
