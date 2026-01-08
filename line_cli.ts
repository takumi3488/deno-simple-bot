import { parseArgs } from "@std/cli/parse-args";
import line from "./line.ts";

const VERSION = "0.0.1";

function printHelp() {
  console.log(`line v${VERSION}

LINE Botでメッセージをブロードキャストするするツール

使用方法:
  line -m <message>

オプション:
  -m, --message  送信するメッセージ (必須)
  -h, --help     ヘルプを表示
  -v, --version  バージョンを表示

環境変数:
  LINE_TOKEN     LINE Bot のアクセストークン (必須)

例:
  LINE_TOKEN=xxx line -m "Hello, LINE!"
`);
}

async function main() {
  const args = parseArgs(Deno.args, {
    alias: {
      h: "help",
      v: "version",
      m: "message",
    },
    boolean: ["help", "version"],
    string: ["message"],
  });

  if (args.version) {
    console.log(`line v${VERSION}`);
    Deno.exit(0);
  }

  if (args.help) {
    printHelp();
    Deno.exit(0);
  }

  if (!args.message) {
    console.error("エラー: --message オプションは必須です");
    printHelp();
    Deno.exit(1);
  }

  try {
    await line(args.message);
    console.log("LINE にメッセージを送信しました");
  } catch (error) {
    console.error(
      `エラー: ${error instanceof Error ? error.message : String(error)}`,
    );
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
