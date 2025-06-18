// コンポーネントの引数を定義する
type CatImageProps = {
  url: string;
};

// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
  return (
    <div>
      <img src={url} />
    </div>
  );
}