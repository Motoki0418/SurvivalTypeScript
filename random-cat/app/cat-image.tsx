// 🖼️ 猫画像表示コンポーネント（ブラウザ側で動作）
"use client"; // ← これでクライアントコンポーネントになる

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

// 📝 このコンポーネントが受け取るデータの型定義
type CatImageProps = {
  url: string; // サーバーから渡された猫画像のURL
};

// 🌐 クライアントコンポーネント（ユーザーとのやりとりを担当）
// ボタンクリック、画像の更新など、ブラウザ上でのインタラクションを処理
export function CatImage({ url }: CatImageProps) {
  // 📱 状態管理：現在表示している画像のURLを保存
  // useState = 「値が変わったら画面を更新してね」という仕組み
  const [imageUrl, setImageUrl] = useState<string>(url);

  // 🔄 新しい猫画像を取得する関数（ボタンを押した時に実行）
  const refreshImage = async () => {
    setImageUrl(""); // 一旦画像を消す（ローディング表示のため）
    const image = await fetchImage(); // 新しい画像をAPIから取得
    setImageUrl(image.url); // 新しい画像URLをセット → 画面が更新される
  };

  // 🎨 画面に表示する内容
  return (
    <div className={styles.page}>
      {/* 🔘 ボタン：クリックすると新しい猫画像を取得 */}
      <button onClick={refreshImage} className={styles.button}>
feature/update-button-text
        🐱 新しい猫ちゃんを見る
      </button>
      
      {/* 🖼️ 画像表示エリア */}
      <div className={styles.frame}>
        {/* imageUrlがある時だけ画像を表示（&&は条件付き表示） */}
        {imageUrl && <img src={imageUrl} className={styles.img} alt="猫の画像" />}
      </div>
    </div>
  );
}