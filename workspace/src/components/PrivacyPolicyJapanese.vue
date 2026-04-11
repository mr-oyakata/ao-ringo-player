<template>
  <article class="text-base-content py-10">
    <h1 class="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold">
      AO-ringo Player プライバシーポリシー
    </h1>
    <p class="mb-4 text-sm opacity-70">最終更新日: 2026年4月1日</p>
    <p class="mb-6 leading-relaxed">
      本プライバシーポリシー（以下「本ポリシー」といいます）は、開発者が提供するiOSアプリケーション「AO-ringo
      Player」（以下「本アプリ」といいます）における、利用者情報の取り扱いについて定めたものです。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">1. はじめに</h2>
    <p class="mb-4 leading-relaxed">
      本アプリは、お客様のApple
      Musicライブラリにアクセスし、アルバム単位での連続再生というユニークな音楽体験を提供することに特化しています。開発者は、お客様のプライバシーを尊重し、個人情報の保護に最大限の注意を払っています。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">2. 取得する情報</h2>
    <p class="mb-4 leading-relaxed">
      本アプリは、お客様の個人情報を収集することはありません。データはデバイス内でのみ利用され、外部サーバーへ送信されることはありません。
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.1. お客様のApple Musicライブラリ情報</h3>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li><strong>メタデータ</strong>: アルバム、アーティスト、楽曲タイトル、アートワーク等。</li>
      <li><strong>永続ID</strong>: ライブラリ内のアイテムを識別するための一意のID。</li>
      <li><strong>サブスクリプション状態</strong>: 再生可否の判定に使用。</li>
    </ul>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.2. アプリの利用状況に関する情報</h3>
    <p class="mb-2">
      以下の情報を<strong>デバイス内にのみ</strong>（UserDefaults および SwiftData
      を用いて）保存します：
    </p>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>再生状態（キュー、インデックス、再生位置など）</li>
      <li>お気に入り情報（アーティスト、プレイリスト、再生回数）</li>
      <li>外観・表示設定（テーマカラー、ソート順など）</li>
    </ul>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.3. キャッシュデータ</h3>
    <p class="bg-base-200 mb-4 rounded-lg p-3 text-sm leading-relaxed">
      高速化のため、<code>SwiftData</code>を用いてライブラリ情報のキャッシュをデバイス内に作成します。
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.4. 通知</h3>
    <p class="mb-4 leading-relaxed">
      ネットワーク状態の変化を知らせるローカル通知に使用されます。外部へのデータ送信は行いません。
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.5. アプリ内課金に関する情報</h3>
    <p class="mb-4 leading-relaxed">
      StoreKit 2を利用します。決済情報はAppleが管理し、開発者がアクセスすることはありません。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">3. 情報の利用目的</h2>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>コア機能の提供および改善</li>
      <li>再生状態の復元機能</li>
      <li>お気に入り機能の提供</li>
      <li>表示や動作の最適化</li>
    </ul>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      4. 情報の共有および第三者提供
    </h2>
    <p class="mb-4 leading-relaxed">
      情報はすべてデバイス内に保存されます。法令に基づく場合を除き、第三者への提供は行いません。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">5. お客様の権利</h2>
    <p class="mb-4 leading-relaxed">
      iOSの「設定」アプリからいつでもライブラリへのアクセス権限を変更できます。また、アプリ内設定からキャッシュデータを削除できます。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">6. セキュリティ</h2>
    <p class="mb-4 leading-relaxed">
      情報はユーザーの管理下にあるデバイスに保存され、適切な安全対策を講じています。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      7. プライバシーポリシーの変更
    </h2>
    <p class="mb-4 leading-relaxed">
      法令や機能変更に伴い改訂されることがあります。最新版は常にこのページで確認できます。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">8. お問い合わせ</h2>
    <p class="mb-4">
      <RouterLink
        to="/contact"
        class="link link-primary font-medium text-emerald-500 hover:text-emerald-600"
        >https://mr-oyakata.github.io/ao-ringo-player/contact</RouterLink
      >
    </p>
  </article>
</template>
