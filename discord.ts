import axios from "npm:axios@1.2.0";

const discord = async (webhookUrl: string, text: string) => {
  await axios.post(
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
}

export default discord;
