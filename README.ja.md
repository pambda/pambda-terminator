# pambda-terminator

Lambda を終了させる Pambda.

この Pambda が実行されるということは、アプリケーションにバグがあることを意味する。

この Pambda は `event` とスタックトレースをログ出力してプロセスを終了させる。

`callback` を呼ぶこともないので、`callback` が渡されていなくても正しく動作する。

## Installation

```
npm i pambda-terminator -S
```

## terminator()

[lambda-terminator](https://github.com/pambda/lambda-terminator) を返す Pambda を返す。

## License

MIT
