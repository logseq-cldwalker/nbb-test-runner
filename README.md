# nbb-test-runner

`nbb-test-runner` is a fork of [cognitect-labs/test-runner](https://github.com/cognitect-labs/test-runner)
for use with [nbb](http://github.com/babashka/nbb).

## Usage

Add the following dependency to your `nbb.edn`:

```edn
{:deps
 {io.github.nextjournal/nbb-test-runner {:git/sha "<GIT-SHA>"}}}
```

Then run tests with:

```bash
# If nbb is installed locally and tests are in test/
$ yarn nbb -cp test -m nextjournal.test-runner
# If nbb is installed globally and tests are in test/
$ nbb -cp test -m nextjournal.test-runner
```

## Copyright and License

Copyright © 2018-2022 Cognitect

Licensed under the Eclipse Public License, Version 2.0
