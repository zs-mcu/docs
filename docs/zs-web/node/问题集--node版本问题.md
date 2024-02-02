# 问题集--node版本问题

## node-sass安装失败

https://stackoverflow.com/questions/66802037/npm-install-node-sass3-7-0-generates-wrange-loop-analysis-issues

```js
2 warnings generated.
./Release/.deps/Release/obj.target/libsass/src/libsass/src/sass_util.o.d.raw Stats {
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 502,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 30471085,
  size: 1472,
  blocks: 8,
  atimeMs: 1616683090000,
  mtimeMs: 1616683090000,
  ctimeMs: 1616683090200.791,
  birthtimeMs: 1616683090000,
  atime: 2021-03-25T14:38:10.000Z,
  mtime: 2021-03-25T14:38:10.000Z,
  ctime: 2021-03-25T14:38:10.201Z,
  birthtime: 2021-03-25T14:38:10.000Z }
  c++ '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DLIBSASS_VERSION="3.3.6"' -I/Users/wvn179/.node-gyp/8.15.0/include/node -I/Users/wvn179/.node-gyp/8.15.0/src -I/Users/wvn179/.node-gyp/8.15.0/deps/openssl/config -I/Users/wvn179/.node-gyp/8.15.0/deps/openssl/openssl/include -I/Users/wvn179/.node-gyp/8.15.0/deps/uv/include -I/Users/wvn179/.node-gyp/8.15.0/deps/zlib -I/Users/wvn179/.node-gyp/8.15.0/deps/v8/include -I../src/libsass/include  -Os -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -stdlib=libc++ -fno-threadsafe-statics -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/sass_values.o.d.raw   -c -o Release/obj.target/libsass/src/libsass/src/sass_values.o ../src/libsass/src/sass_values.cpp
In file included from ../src/libsass/src/sass_values.cpp:5:
In file included from ../src/libsass/src/eval.hpp:4:
../src/libsass/src/ast.hpp:1361:25: warning: loop variable 'numerator' of type 'const std::__1::basic_string<char>'
      creates a copy from type 'const std::__1::basic_string<char>' [-Wrange-loop-analysis]
        for (const auto numerator : numerator_units())
                        ^
../src/libsass/src/ast.hpp:1361:14: note: use reference type 'const std::__1::basic_string<char> &' to prevent
      copying
        for (const auto numerator : numerator_units())
             ^~~~~~~~~~~~~~~~~~~~~~
                        &
../src/libsass/src/ast.hpp:1363:25: warning: loop variable 'denominator' of type 'const std::__1::basic_string<char>'
      creates a copy from type 'const std::__1::basic_string<char>' [-Wrange-loop-analysis]
        for (const auto denominator : denominator_units())
                        ^
../src/libsass/src/ast.hpp:1363:14: note: use reference type 'const std::__1::basic_string<char> &' to prevent
      copying
        for (const auto denominator : denominator_units())
             ^~~~~~~~~~~~~~~~~~~~~~~~
                        &
```

降低node版本解决