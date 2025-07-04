---
next: false
---

## 2003 Blasterワーム
- インターネットの個人利用が広まってきた時期の代表的インシデント
- ワームなので、いわゆる増殖型でPCをクラッシュさせるような効果を持つ
- ワームというもの自体は20世紀にも出現していたが、インターネットを介してユーザの操作なしに感染・拡散した点で大きな特徴を持つと言える

##  2010 オーロラ作戦
- 中国によるGoogleなど20社ほどを標的としたAPT攻撃
- APT攻撃とは、標的型かつ継続的に行われる攻撃を指し、スパイによる攻撃の文脈で出てくることが多い
- IEの未知の脆弱性(ゼロデイ脆弱性)をついた攻撃
- 攻撃者が特別に細工したWebページを通じて、ターゲットPC上で任意のコードを実行できるもの
- 影響として、Googleの中国撤退、IEからのChrome移行の流れを後押し

## 2015 年金機構情報漏洩
- これも標的型のAPT攻撃で、職員がマルウェア付きのファイルを開封し、感染が発生
- 感染端末を通じて外部サーバと通信し、約125万人分の個人情報（氏名、生年月日、基礎年金番号等）が漏洩
- オーロラ作戦が未知の技術的脆弱性を突いたのに対し、本件は人間の行動（社会工学）を突いた攻撃だった
- 国会でも問題となり、厚生労働省が年金機構に改善命令を出すなど、日本のサイバーセキュリティ政策に影響を与えた

## 2017 WannaCry
- WindowsのSMB脆弱性(EternalBlue)を突いた自己拡散型ランサム攻撃
- 世界150か国・30万台以上が感染、英国の医療機関などに深刻な影響
- 感染後はファイルを暗号化し、復号のためにビットコインでの身代金を要求
- 2ヶ月前に公開されていたMSのパッチが未適用だったことが被害拡大の要因
- 匿名性の高い暗号通貨の普及で攻撃の目的が金銭へと移行していった象徴的なイベント
- 身代金は感染端末ごとに300〜600ドルで攻撃者にとっては感染端末の数がそのまま収益の規模になるモデル

## 2021 米インフラ企業攻撃
- 米国最大の燃料供給パイプライン企業がランサム攻撃を受け、一時的に全運用を停止
- 感染原因は2段階認証のないVPNアカウントからの侵入
- 社会インフラに影響が波及し、国家非常事態宣言が発令
- 支払った身代金は約440万ドル、後に一部がFBIにより回収された
- ランサムウェアがインフラ・企業に対する本格的ビジネスリスクになったと同時に企業として支払いを決断し、公表した点で歴史的ターニングポイント
- 犯罪グループDarkSideはRaaSモデルを採用したグループであるところも特徴的
