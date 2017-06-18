# pambda-terminator

Pambda to terminate Lambda.

Running this Pambda means that there is a bug in your application.

This Pambda logs `event` and stack trace, and terminates the process.

Since it does not call `callback`, it works correctly even if `callback` is not passed.

## Installation

```
npm i pambda-terminator -S
```

## terminator()

Return Pambda returning [lambda-terminator](https://github.com/pambda/lambda-terminator).

## License

MIT
