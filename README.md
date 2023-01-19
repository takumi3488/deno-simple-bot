# Deno Simple Bot for LINE and Discord

This is a simple wrapper library for Deno to call the LINE Bot and Discord Webhook.

## USAGE

```ts
import line from "https://raw.githubusercontent.com/takumi3488/deno-simple-bot/main/line.ts";
import discord from "https://raw.githubusercontent.com/takumi3488/deno-simple-bot/main/discord.ts";

await line("some text");
await discord("<Webhook URL>", "some text");
```
