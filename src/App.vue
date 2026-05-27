<script setup>
const venueName = 'TKP千葉駅東口ビジネスセンター カンファレンスルーム3C'
const venueMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(venueName)}&output=embed`

const announcementItems = [
  { label: '開催日', value: '7月5日' },
  { label: '会場', value: venueName },
  { label: '形式', value: 'Classic Constructed' },
  { label: '受付状況', value: '準備中' },
]

const schedule = [
  ['10:00', '受付開始 / エントリー確認'],
  ['11:00', 'ラウンド開始'],
  ['15:30', '交流・フリー対戦'],
  ['17:30', '表彰 / クロージング'],
]

const socialLinks = [
  {
    label: '公式X',
    href: 'https://x.com/',
    description: '大会の告知・更新情報・参加案内を発信しています。',
  },
  {
    label: 'エントリー (Tonamel)',
    href: 'https://tonamel.com/',
    description: '大会への参加申し込みはこちらから。',
  },
]
</script>

<template>
  <div class="page-shell">
    <header class="hero">
      <nav class="topbar">
        <a href="#" class="brand-mark">FAB SEA LEGS CUP</a>
        <div class="topbar-links">
          <a class="ghost-link" href="#announcement">Announcement</a>
          <a class="ghost-link" href="#schedule">Schedule</a>
          <a class="ghost-link" href="#links">Links</a>
        </div>
      </nav>

      <div class="hero-copy">
        <p class="eyebrow">Community Event for Flesh and Blood Players</p>
        <h1>SEA LEGS CUP</h1>
        <p class="lead">
          フレッシュ＆ブラッドプレイヤー有志によるコミュニティイベント。<br />
          競技性と交流のどちらも楽しめる、密度の高いFABの場を目指します。
        </p>

        <div class="hero-actions">
          <a class="primary-button" href="https://tonamel.com/" target="_blank" rel="noopener noreferrer">
            申し込みページへ
          </a>
          <a class="secondary-button" href="#schedule">
            当日の流れを見る
          </a>
          <a class="secondary-button" href="https://x.com/" target="_blank" rel="noopener noreferrer">
            Xで告知を見る
          </a>
        </div>
      </div>
    </header>

    <main>
      <section id="announcement" class="section notice-section">
        <div class="section-heading">
          <p class="section-label">Announcement</p>
          <h2>大会情報</h2>
        </div>
        <div class="notice-grid">
          <article v-for="item in announcementItems" :key="item.label" class="notice-card">
            <span>{{ item.label }}</span>
            <strong>{{ item.value }}</strong>
          </article>
        </div>
      </section>

      <section id="schedule" class="section schedule-section">
        <div class="section-heading">
          <p class="section-label">Schedule</p>
          <h2>当日の流れ</h2>
        </div>
        <div class="timeline">
          <div v-for="entry in schedule" :key="entry[0]" class="timeline-row">
            <span>{{ entry[0] }}</span>
            <p>{{ entry[1] }}</p>
          </div>
        </div>
      </section>

      <section id="venue" class="section venue-section">
        <div class="section-heading">
          <p class="section-label">Access</p>
          <h2>会場マップ</h2>
        </div>
        <div class="map-card">
          <iframe
            class="venue-map"
            :src="venueMapUrl"
            :title="`${venueName} の地図`"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>
      </section>

      <section id="links" class="section links-section">
        <div class="section-heading">
          <p class="section-label">Links</p>
          <h2>SNSと申し込み先</h2>
        </div>
        <div class="link-grid">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            class="link-card"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{{ link.label }}</span>
            <p>{{ link.description }}</p>
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>© 2026 SEA LEGS CUP — FABプレイヤー有志コミュニティ</p>
    </footer>
  </div>
</template>
