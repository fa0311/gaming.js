# gaming.js

WEB サイトをゲーミング仕様にできるライブラリです<br>
[demo.html](https://fa0311.github.io/gaming.js/demo.html)
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

get_twitter_timeline is under MIT License
