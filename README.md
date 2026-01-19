> [!NOTE]
> 注意：これは過去の学習記録です。
> 本リポジトリは、私が学習初期（小学生〜中学生）に作成した成果物を、成長の記録として保存・公開しているアーカイブです。
> 当時の環境や理解の範囲で書かれており、現在の私の設計方針・開発プロセス・品質基準を示すものではありません。
> このリポジトリは「当時の状態そのもの」を残すことに意味があるため、修正・改修・削除は行いません。
> 本リポジトリ単体のコードベースから定量的・網羅的な評価を行うことは推奨しません。
> 必要な場合は、GitHubプロフィールの pinned リポジトリ、直近のコミット履歴、OSS貢献など、複数リポジトリを横断して総合的に参照してください。

# gaming.js

WEB サイトをゲーミング仕様にできるライブラリです<br>
[demo.html](https://fa0311.github.io/gaming.js/demo.html)<br>
[web](https://blog.yuki0311.com/gaming_js/)

<br>

## import

gaming.js をロードします

```html
<script src="js/gaming.js" type="text/javascript"></script>
```

jQuery をでロードします(任意)<br>
jQuery と互換性があります<br>
ロードしなくても動きます

```html
<script src="js/jquery-3.4.1.min.js" type="text/javascript"></script>
```

## use

第 1 引数に関数もしくは jQuery の object<br>
第 2 引数に速度(任意)<br>
第 3 引数に 1 フレームの表示時間 ms(任意)<br><br><br>
引数には R G B の 3 つが与えられます<br>
いずれも int 型の 0-254 までです

```js
var instance = new gaming(function (R, G, B) {}, 1, 10);
```

jQueryを使用した例<br>
以下の場合指定した要素の background-color がゲーミング仕様になります

```js
var instance = new gaming($("*"), 1, 10);
```

動かす

```js
instance.start();
```

一時停止

```js
instance.stop();
```

現在の色を取得もしくは変更

```js
console.log(instance.color);
instance.color = [100, 100, 100];
```

# License

gaming.js is under MIT License
