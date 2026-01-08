const line = async (text: string): Promise<void> => {
  const token = Deno.env.get("LINE_TOKEN");
  if (!token) {
    console.error("環境変数`LINE_TOKEN'をセットしてください。");
    return;
  }
  const response = await fetch("https://api.line.me/v2/bot/message/broadcast", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [{ type: "text", text: text }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `LINE API failed: ${response.status} ${response.statusText} - ${errorText}`,
    );
  }
};

export default line;
