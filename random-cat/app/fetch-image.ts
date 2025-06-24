// 🌐 API通信：猫の画像を取得する関数
// The Cat APIというサービスから、ランダムな猫の画像情報をもらってくる

// 📋 画像情報の型定義（APIから返ってくるデータの形を決める）
type Image = {
  url: string; // 画像のURL（インターネット上の住所）
};

// 🐱 猫画像取得関数
// exportで他のファイルからも使えるようにする
// async/awaitで「時間のかかる処理を待つ」ことができる
export async function fetchImage(): Promise<Image> {
  // 🌍 The Cat APIにリクエストを送信
  // fetch = インターネットからデータを取ってくる命令
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  
  // 📦 取得したデータをJavaScriptで使える形に変換
  // .json() = 文字列データをオブジェクトに変換
  const data = await response.json();
  
  // 🎯 配列の最初の画像情報を返す
  // APIは配列で返してくるので、[0]で最初の1つを取得
  console.log("fetchImage: 画像情報を取得しました", data);
  return data[0];
}