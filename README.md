# Yokagi site

夜鍵工房 / YOKAGI-KOBO の公式ハブサイト用ソースです。

## ファイル
- `index.html` : トップページ
- `style.css` : 現行デザインをベースにしたスタイル
- `news.js` : Yokagi共通最新情報データ
- `site.js` : `news.js` の最新1件をトップへ表示

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

Git接続確認用更新: 2026-09-05 18:10 JST
