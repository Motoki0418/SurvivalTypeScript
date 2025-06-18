// このファイルは「猫の画像を画面に表示する部品（コンポーネント）」を作るためのものです

// CatImageコンポーネントが受け取るデータの形（型）を決めています
type CatImageProps = {
  url: string; // 猫の画像のURL
};

// 猫の画像を表示するコンポーネントです
// もらったurl（画像の住所）を使って、画像を画面に表示します
export function CatImage({ url }: CatImageProps) {
  return (
    <div>
      <img src={url} alt="猫の画像" />
    </div>
  );
}