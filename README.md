# SEA LEGS CUP

SEA LEGS CUPの大会サイトです。Vue 3 + Viteで構成しています。

## セットアップ

```bash
npm install
```

## 開発サーバー

```bash
npm run dev
```

## 本番ビルド

```bash
npm run build
```

`canonical` や OGP の URL を本番ドメインに合わせる場合は、ビルド前に `VITE_SITE_URL` を設定します。

```bash
VITE_SITE_URL=https://example.com/ npm run build
```


## GitHub Pages

このプロジェクトは GitHub Pages 向けに設定済みです。

1. GitHub に push する
2. リポジトリの Settings > Pages を開く
3. Build and deployment の Source を GitHub Actions にする
4. main ブランチへ push すると自動で公開される

Vite の base パスは GitHub Actions 上で自動判定します。

- `username.github.io` 形式のリポジトリでは `/`
- それ以外のリポジトリでは `/<repo-name>/`

注意:

- `vite.config.js` の開発用ヘッダー設定は GitHub Pages 本番では適用されません
- favicon は GitHub Pages の配信パスに合わせて `%BASE_URL%logo.jpg` を参照しています
- `VITE_SITE_URL` を設定すると `canonical`、`og:url`、`og:image`、`twitter:image` がそのURL基準で出力されます

