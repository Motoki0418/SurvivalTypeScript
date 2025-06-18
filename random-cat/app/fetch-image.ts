// ①このファイルは、猫の画像を取得するための関数を定義するファイルです

// 画像情報の型定義
type Image = {
  url: string;
};

// ②画像を取得する関数を定義します
// exportをつけることで、他のファイルからこの関数を使えるようになります
// asyncをつけることで、時間のかかる処理（画像の取得）を待つことができます
export async function fetchImage(): Promise<Image> {
  // ③The Cat APIというサービスから猫の画像情報を取得します
  // fetchは、インターネットから情報を取ってくる命令です
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  
  // ④取得した情報をJavaScriptで使える形（オブジェクト）に変換します
  const data = await response.json();
  
  // ⑤最初の画像の情報（URLなど）を返します
  // data[0]は、配列の最初の要素を取得する方法です
  console.log("fetchImage: 画像情報を取得しました", data);
  return data[0];
}