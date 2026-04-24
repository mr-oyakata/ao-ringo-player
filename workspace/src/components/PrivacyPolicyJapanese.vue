<template>
  <article class="text-base-content py-10">
    <h1 class="mb-6 border-b-4 border-emerald-400 pb-2 text-3xl font-bold">
      AO-ringo Player プライバシーポリシー
    </h1>
    <p class="mb-4 text-sm opacity-70">最終更新日: 2026年4月25日</p>
    <p class="mb-6 leading-relaxed">
      本プライバシーポリシー（以下「本ポリシー」といいます）は、Mr.Oyakata（以下「開発者」といいます）が提供するiOSアプリケーション「AO-ringo
      Player」（以下「本アプリ」といいます）における、利用者情報の取り扱いについて定めたものです。本アプリをご利用いただく前に本ポリシーをよくお読みいただき、内容にご同意いただいた上でご利用ください。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">1. はじめに</h2>
    <p class="mb-4 leading-relaxed">
      本アプリは、お客様のApple
      Musicライブラリにアクセスし、アルバム単位での連続再生というユニークな音楽体験を提供することに特化しています。開発者は、お客様のプライバシーを尊重し、個人情報の保護に最大限の注意を払っています。
      本ポリシーでは、本アプリがどのような情報を取得し、どのように利用し、どのように保護するかについて透明性をもって説明します。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">2. 取得する情報</h2>
    <p class="mb-4 leading-relaxed">
      本アプリは、お客様の個人情報（氏名、メールアドレス、住所、電話番号など）を収集することはありません。本アプリの機能を提供するために、以下の情報をお客様のデバイス上で取得・利用しますが、これらの情報が開発者の管理するサーバー等に送信されることはありません。
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.1. お客様のApple Musicライブラリ情報</h3>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>
        <strong>メタデータ</strong>:
        アルバム、アーティスト、プレイリスト、楽曲のタイトル、アートワーク、再生時間などの情報。
      </li>
      <li>
        <strong>永続ID</strong>: Apple Musicライブラリ内の各アイテムを識別するための一意のID。
      </li>
      <li>
        <strong>アクセス認可状態</strong>: Apple
        Musicライブラリへのアクセス許可の有無（アクセス拒否・制限時の警告表示に使用）。
      </li>
    </ul>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.2. アプリの利用状況に関する情報</h3>
    <p class="mb-2">
      以下の情報を<strong>お客様のデバイス内にのみ</strong>（UserDefaults および SwiftData
      を用いて）保存します：
    </p>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>
        <strong>再生状態</strong>:
        アプリを再起動した際に再生を再開できるよう、再生キュー（アルバムのリスト）、再生中のアルバムと曲のインデックス、永続ID、再生位置（秒）、保存時のオフラインモード状態、および再生元の情報（アーティスト・プレイリスト・ジャンル名や内部識別子）を保存します。
      </li>
      <li>
        <strong>お気に入り情報</strong>:
        お客様が「お気に入り」として登録したアーティスト、プレイリスト、およびジャンルの情報（名前、登録日、再生回数）を保存します。再生回数はお気に入りリストの並び順の最適化に利用されます。
      </li>
      <li><strong>外観・表示設定</strong>: 外観モード（テーマカラー）を保存します。</li>
      <li>
        <strong>設定情報</strong>:
        シャッフルやリピート、オフラインモード、各画面でのソート順、モバイルデータ通信の利用許可、ネットワーク復帰時の自動復帰設定、バックグラウンドリフレッシュなどの設定状態を保存します。
      </li>
    </ul>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.3. キャッシュデータ</h3>
    <p class="bg-base-200 mb-4 rounded-lg p-3 text-sm leading-relaxed">
      アプリの動作を高速化し、快適な利用体験を提供するため、上記2.1で取得したライブラリ情報のキャッシュを
      <code>SwiftData</code> 技術を用いてお客様のデバイス内に作成します。
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.4. 通知</h3>
    <p class="mb-4 leading-relaxed">
      本アプリは初回起動時に通知の許可を求めることがあります。これはネットワーク状態の変化（オフラインモードへの自動切り替えや復帰）をお知らせするローカル通知の送信に使用されます。通知はすべてお客様のデバイス内で完結し、外部サーバーへのデータ送信は行いません。通知の許可はiOSの「設定」アプリからいつでも変更できます。許可を取り消した場合でも、本アプリの主要機能は引き続きご利用いただけます。
    </p>

    <h3 class="mt-6 mb-2 text-lg font-bold">2.5. アプリ内課金に関する情報</h3>
    <p class="mb-4 leading-relaxed">
      本アプリは Apple の提供する StoreKit 2
      を利用してアプリ内課金（開発サポート）を提供しています。購入済みかどうかのフラグのみをデバイス内に保持し、クレジットカード番号や口座情報などの決済情報はすべて
      Apple によって管理され、開発者がこれらの情報にアクセスすることはありません。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">3. 情報の利用目的</h2>
    <ul class="mb-4 ml-6 list-outside list-disc space-y-2">
      <li>本アプリのコア機能（アルバム連続再生、キュー管理など）の提供および改善のため</li>
      <li>再生状態の復元機能を提供するため</li>
      <li>お気に入り機能を提供するため</li>
      <li>アプリの表示や動作をユーザー設定に合わせて最適化するため</li>
      <li>開発サポート（アプリ内課金）の状態管理および特典（外観変更等）の提供のため</li>
    </ul>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      4. 情報の共有および第三者提供
    </h2>
    <p class="mb-4 leading-relaxed">
      本ポリシーにおいて取得する情報は、すべてお客様のデバイス内に保存されます。開発者は、法令に基づく場合や、お客様の同意を得た場合を除き、お客様の情報を第三者に提供または共有することはありません。本アプリの機能提供にあたり、Apple
      のサービス（MusicKit,
      StoreKit）を利用しています。これらのサービスの利用に伴う情報の取り扱いについては、Apple
      のプライバシーポリシーに従います。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">5. お客様の権利</h2>
    <p class="mb-4 leading-relaxed">
      お客様は、いつでもiOSの「設定」アプリから、本アプリによるApple
      Musicライブラリへのアクセス許可を無効にすることができます。ただし、その場合、本アプリの主要機能が利用できなくなります。また、本アプリの設定画面から、デバイス内に保存されているライブラリのキャッシュデータを任意に削除することができます。これにより、表示の不具合などが解消される場合があります。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">6. セキュリティ</h2>
    <p class="mb-4 leading-relaxed">
      開発者は、お客様の情報を保護するため、技術的・組織的に合理的な安全対策を講じています。情報はすべてお客様の管理下にあるデバイスに保存され、不正なアクセス、紛失、漏洩、改ざんを防ぐよう努めています。
    </p>

    <h2 class="border-base-300 mt-10 mb-4 border-b pb-1 text-xl font-bold">
      7. プライバシーポリシーの変更
    </h2>
    <p class="mb-4 leading-relaxed">
      開発者は、法令の変更や本アプリの機能変更に伴い、本ポリシーを改訂することがあります。重要な変更がある場合は、本アプリ内での通知や、App
      Storeのアップデート情報などを通じてお知らせします。本ポリシーの最新版は、常に本ページにてご確認いただけます。
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
