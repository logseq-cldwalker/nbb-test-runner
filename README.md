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

## CLI

This section describes a CLI for a [nbb-logseq](https://github.com/logseq/nbb-logseq) test runner.
This is handy for running tests on a {nbb,nbb-logseq} repository without having to add a `nbb.edn`.

To use this as a CLI locally, install it:

```sh
$ git clone https://github.com/logseq-cldwalker/nbb-test-runner
$ cd nbb-test-runner && yarn install
$ yarn global add $PWD
```

Then use it from a {nbb,nbb-logseq} repository with tests!

```sh
$ nbb-logseq-test-runner -H
```

Currently the test runner has the following limitations:
* Assumes a repository has code and tests at src/ and test/ dirs.
* Can't run on a repo with nbb.edn deps.
* Can't run on a repo with additional node deps. For this case, you should add nbb-test-runner as a dependency.

## Copyright and License

Copyright © 2018-2022 Cognitect

Licensed under the Eclipse Public License, Version 2.0
