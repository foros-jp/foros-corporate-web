# FOROS株式会社 Corporate Website

> お客様の競争力を最大化し、お客様と共に成長する — Accelerating Competitiveness.

FOROS株式会社のコーポレートサイトです。

## Tech Stack

- [Astro](https://astro.build/) 5.x — Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) 4.x — Utility-first CSS (CSS-first `@theme` config)
- GitHub Pages — Hosting
- GitHub Actions — CI/CD (push to main → auto deploy)

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build    # → dist/
npm run preview  # Preview locally
```

`main` ブランチへの push で GitHub Actions が自動ビルド・デプロイします。
ブランチ保護により、`main` への直接 push は不可。PR + 管理者レビューが必要です。

## Structure

| Section | Component | Description |
|---------|-----------|-------------|
| Header | `Header.astro` | スクロール対応ヘッダー (glassmorphism) |
| Hero | `Hero.astro` | ロゴ + ミッション + SVGコンステレーション |
| Services | `Services.astro` | Analysis / Planning / Execution |
| Product | `Product.astro` | Sitrom-CC 紹介 |
| Achievements | `Stories.astro` | 実績紹介 (5カード) |
| About | `About.astro` | ミッション + 会社概要 |
| Contact | `Contact.astro` | お問い合わせフォーム |
| Footer | `Footer.astro` | ナビゲーション + 会社情報 |

## License

Copyright © 2026 FOROS株式会社
