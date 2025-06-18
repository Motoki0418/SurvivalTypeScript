// CSSファイルを読み込む（ボタンのスタイルを適用するため）
// ボタンをきれいに見せるためのスタイルファイルを読み込む
import "./App.css";
// ReactのuseStateフックを読み込む（状態管理のため）
// 数字を保存して変更できるようにする機能を読み込む
import { useState } from "react";

// メインのアプリケーションコンポーネント
// アプリのメイン部分（ここにボタンを置く）
function App() {
  return (
    <>
      {/* いいねボタンコンポーネントを表示 */}
      {/* いいねボタンをここに表示する */}
      <LikeButton />
    </>
  );
}

// いいねボタンのコンポーネント
// いいねボタンを作る部分
function LikeButton() {
  // いいねの数を管理する状態
  // useState(999) = 初期値を999に設定
  // count = 現在の値、setCount = 値を変更する関数
  // いいねの数を覚えておく（最初は999からスタート）
  // count = 今の数、setCount = 数を変えるための道具
  const [count, setCount] = useState(999);

  // ボタンがクリックされた時に実行される関数
  // ボタンを押した時に何をするか決める
  const handleClick = () => {
    // 現在のcountの値に1を足して、新しい値に更新
    // 今の数に1を足して、新しい数にする
    setCount(count + 1);
  };

  // ボタンのUIを返す
  // ボタンの見た目を作る
  return (
    <span 
      className="likeButton"  // CSSクラスを適用 / ボタンをきれいにするための名前
      onClick={handleClick}   // クリック時にhandleClick関数を実行 / クリックした時にhandleClickを実行
    >
      ♥ {count}  {/* ハートマークと現在のcountの値を表示 / ハートマークと今の数を表示 */}
    </span>
  );
}

// このコンポーネントを他のファイルで使えるようにする
// このファイルを他の場所でも使えるようにする
export default App;