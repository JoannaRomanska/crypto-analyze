crypto_analyze
==============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/crypto_analyze.svg)](https://npmjs.org/package/crypto_analyze)
[![Downloads/week](https://img.shields.io/npm/dw/crypto_analyze.svg)](https://npmjs.org/package/crypto_analyze)
[![License](https://img.shields.io/npm/l/crypto_analyze.svg)](https://github.com/MDyrcz5/crypto_analyze/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g crypto_analyze
$ crypto_analyze COMMAND
running command...
$ crypto_analyze (-v|--version|version)
crypto_analyze/1.0.0 win32-x64 node-v12.18.2
$ crypto_analyze --help [COMMAND]
USAGE
  $ crypto_analyze COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`crypto_analyze analyze [FILE]`](#crypto_analyze-analyze-file)
* [`crypto_analyze decode [FILE]`](#crypto_analyze-decode-file)
* [`crypto_analyze help [COMMAND]`](#crypto_analyze-help-command)

## `crypto_analyze analyze [FILE]`

analyze file - pass whole path to file

```
USAGE
  $ crypto_analyze analyze [FILE]

OPTIONS
  -h, --help       show CLI help
  -p, --path=path  file path
```

_See code: [src\commands\analyze.ts](https://github.com/MDyrcz5/crypto_analyze/blob/v1.0.0/src\commands\analyze.ts)_

## `crypto_analyze decode [FILE]`

docode file - pass file path

```
USAGE
  $ crypto_analyze decode [FILE]

OPTIONS
  -h, --help       show CLI help
  -p, --path=path  file path
```

_See code: [src\commands\decode.ts](https://github.com/MDyrcz5/crypto_analyze/blob/v1.0.0/src\commands\decode.ts)_

## `crypto_analyze help [COMMAND]`

display help for crypto_analyze

```
USAGE
  $ crypto_analyze help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src\commands\help.ts)_
<!-- commandsstop -->
