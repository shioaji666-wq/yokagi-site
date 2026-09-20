# Yokagi site

夜鍵工房 / YOKAGI-KOBO の公式ハブサイト用ソースです。

## ファイル
- `index.html` : トップページ
- `style.css` : 現行デザインをベースにしたスタイル
- `news.js` : Yokagi共通最新情報データ
- `site.js` : `news.js` の最新1件をトップへ表示
- `games/chiikawa-siren-battle/` : セイレーンバトル作品ページ
- `tools/ff14-crafting-notebook/` : FF14制作手帳ナビ作品ページ
- `tools/pokemon-sleep-checker/` : ポケスリ厳選チェッカー作品ページ
- `robots.txt` / `sitemap.xml` : 検索エンジン向け基本設定

## サイト方針
夜鍵工房を母艦とし、ゲーム・Webツールなど各制作物を個別に検索可能なページとして持ちます。
特定作品だけをSEO集客用の商品として扱わず、各作品がそれぞれの検索需要に対する入口になる構成です。

## 最新情報の更新
`news.js` の先頭に新しい1件を追加します。

```js
window.YOKAGI_NEWS = [
  {
    date: "2026-10-20",
    category: "game",
    title: "新作ゲームを公開しました",
    body: "紹介文",
    url: "https://example.yokagi.jp/"
  }
];
```

`money.yokagi.jp` 側も `https://yokagi.jp/news.js` を参照するため、Yokagi本体の `news.js` を更新すると各ツールにも同じ最新情報を出せます。

## Cloudflare
GitHubリポジトリへ置き、Cloudflare Workers & Pages の Git接続でデプロイします。
