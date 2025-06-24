// 🏠 トップページ（最初に表示されるページ）
// ⚠️ 重要：このファイルには "use client" を書かない！
// → サーバーコンポーネントとして動作させるため

// ②必要な部品（コンポーネント）を読み込みます
import { CatImage } from "./cat-image";
import { connection } from "next/server";
import { fetchImage } from "./fetch-image";

// 🖥️ サーバーコンポーネント（サーバー側で実行される）
// ページが表示される前に、サーバーで猫の画像を取得してから表示
export default async function Home() {
  // 🐱 サーバー側で猫の画像を取得
  // ユーザーがページにアクセスした時、まずサーバーでAPIを呼び出す
  await connection();

  const image = await fetchImage();

  console.log("Home: 画像情報を取得しました", image);

  // 🎯 取得した画像URLをクライアントコンポーネントに渡す
  // CatImageコンポーネント（ブラウザ側）で表示とボタン操作を担当
  return <CatImage url={image.url} />;
}