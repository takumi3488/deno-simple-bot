import { parseArgs } from "@std/cli/parse-args";
import discord from "./discord.ts";

const VERSION = "0.0.1";

function printHelp() {
  console.log(`discord v${VERSION}

Discord Webhookにメッセージを送信するCLIツール

使用方法:
  discord -u <url> -m <message>

オプション:
  -u, --url      Webhook URL (必須)
  -m, --message  送信するメッセージ (必須)
  -h, --help     ヘルプを表示
  -v, --version  バージョンを表示

例:
  discord -u https://discord.com/api/webhooks/xxx -m "Hello, Discord!"
`);
}

async function main() {
  const args = parseArgs(Deno.args, {
    alias: {
      h: "help",
      v: "version",
      u: "url",
      m: "message",
    },
    boolean: ["help", "version"],
    string: ["url", "message"],
  });

  if (args.version) {
    console.log(`discord v${VERSION}`);
    Deno.exit(0);
  }

  if (args.help) {
    printHelp();
    Deno.exit(0);
  }

  if (!args.url) {
    console.error("エラー: --url オプションは必須です");
    printHelp();
    Deno.exit(1);
  }

  if (!args.message) {
    console.error("エラー: --message オプションは必須です");
    printHelp();
    Deno.exit(1);
  }

  try {
    await discord(args.url, args.message);
    console.log("Discord にメッセージを送信しました");
  } catch (error) {
    console.error("エラー: メッセージの送信に失敗しました");
    console.error(error instanceof Error ? error.message : String(error));
    Deno.exit(1);
  }
}

main().catch((error) => {
  console.error(
    `予期しないエラー: ${
      error instanceof Error ? error.message : String(error)
    }`,
  );
  Deno.exit(1);
});
