// このファイルは「猫の画像を画面に表示する部品（コンポーネント）」を作るためのものです
"use client"; // 

import { useState } from "react";
import { fetchImage } from "./fetch-image";

// CatImageコンポーネントが受け取るデータの形（型）を決めています
type CatImageProps = {
  url: string; // 猫の画像のURL
};

// 猫の画像を表示するコンポーネントです
// もらったurl（画像の住所）を使って、画像を画面に表示します
// imageUrlは状態変数で、現在の猫画像のURLを保持します。
// setImageUrlは状態を更新するための関数です。この関数を呼び出すことでimageUrlの値を変更できます。
// useStateには初期値としてurlを渡しています。
export function CatImage({ url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState(url);

  const refreshImage = async () => {
    setImageUrl("");
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div>
      {}
      <button onClick={refreshImage}>他のニャンコもみる</button>
      {}
      {imageUrl && <img src ={imageUrl}/>}
    </div>
  );
}