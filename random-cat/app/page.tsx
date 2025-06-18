// ①このファイルは、トップページ（最初に表示されるページ）を作るためのファイルです

// ②必要な部品（コンポーネント）を読み込みます
import { CatImage } from "./cat-image";
import { connection } from "next/server";
import { fetchImage } from "./fetch-image";

// ③ページのメイン部分を作る関数です
// asyncをつけることで、画像を取得するのを待ってから表示できます
export default async function Home() {
  // ④猫の画像を取得します
  // awaitをつけることで、画像を取得するまで待ちます
  await connection();

  const image = await fetchImage();

  console.log("Home: 画像情報を取得しました", image);

  // ⑤画面に表示する内容を返します
  return <CatImage url={image.url} />;
}