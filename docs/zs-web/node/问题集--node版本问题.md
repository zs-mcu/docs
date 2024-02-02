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

## npm i 报错

```js
Windows PowerShell
版权所有 (C) 2015 Microsoft Corporation。保留所有权利。

PS C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500> npm install
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: vue-template@0.1.0
npm ERR! Found: webpack@4.46.0
npm ERR! node_modules/webpack
npm ERR!   webpack@"^4.0.0" from @vue/cli-plugin-babel@4.5.19
npm ERR!   node_modules/@vue/cli-plugin-babel
npm ERR!     dev @vue/cli-plugin-babel@"~4.5.0" from the root project
npm ERR!   webpack@"^4.0.0" from @vue/cli-service@4.5.19
npm ERR!   node_modules/@vue/cli-service
npm ERR!     dev @vue/cli-service@"~4.5.0" from the root project
npm ERR!     peer @vue/cli-service@"^3.0.0 || ^4.0.0-0" from @vue/cli-plugin-babel@4.5.19
npm ERR!     node_modules/@vue/cli-plugin-babel
npm ERR!       dev @vue/cli-plugin-babel@"~4.5.0" from the root project
npm ERR!     2 more (@vue/cli-plugin-router, @vue/cli-plugin-vuex)
npm ERR!   2 more (compression-webpack-plugin, less-loader)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! dev postcss-loader@"^5.0.0" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: webpack@5.77.0
npm ERR! node_modules/webpack
npm ERR!   peer webpack@"^5.0.0" from postcss-loader@5.3.0
npm ERR!   node_modules/postcss-loader
npm ERR!     dev postcss-loader@"^5.0.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See C:\Users\miyufeng\AppData\Local\npm-cache\eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\miyufeng\AppData\Local\npm-cache\_logs\2023-04-04T07_38_30_950Z-debug-0.log
```

### 方式一：安装低版本的npm

```js
PS C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500> npm install npm@6.14.10 -g

added 1 package in 22s

3 packages are looking for funding
  run `npm fund` for details
```

```js
PS C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500> npm i
npm WARN deprecated vuex-persistedstate@4.1.0: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated html-webpack-plugin@3.2.0: 3.x is no longer supported
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection
 in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual v
ersion of core-js.
npm WARN deprecated shvl@2.0.3: older versions vulnerable to prototype pollution
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
npm WARN deprecated @hapi/joi@15.1.1: Switch to 'npm install joi'
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs
npm WARN deprecated chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozil
la.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated @hapi/address@2.1.4: Moved to 'npm install @sideway/address'
npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v
8.dev/blog/math-random for details.
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm ERR! cb() never called!

npm ERR! This is an error with npm itself. Please report this error at:
npm ERR!     <https://npm.community>

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\miyufeng\AppData\Roaming\npm-cache\_logs\2023-04-04T07_59_42_558Z-debug.log
```

第二次尝试

```js
C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500> npm i
npm WARN deprecated vuex-persistedstate@4.1.0: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated html-webpack-plugin@3.2.0: 3.x is no longer supported
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection
 in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual v
ersion of core-js.
npm WARN deprecated shvl@2.0.3: older versions vulnerable to prototype pollution
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
npm WARN deprecated @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated @hapi/joi@15.1.1: Switch to 'npm install joi'
npm WARN deprecated chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozil
la.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v
8.dev/blog/math-random for details.
npm WARN deprecated @hapi/address@2.1.4: Moved to 'npm install @sideway/address'
npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated

> core-js@2.6.12 postinstall C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\babel-polyfill\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js@2.6.12 postinstall C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\babel-runtime\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js@3.30.0 postinstall C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js:
> https://opencollective.com/core-js 
> https://patreon.com/zloirock 
> https://boosty.to/zloirock 
> bitcoin: bc1qlea7544qtsmj2rayg0lthvza9fau63ux0fstcz 

I highly recommend reading this: https://github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md 


> ejs@2.7.4 postinstall C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\ejs
> node ./postinstall.js

Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)


> cwebp-bin@6.1.2 postinstall C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\cwebp-bin
> node lib/install.js

cwebp pre-build test passed successfully

> gifsicle@5.3.0 postinstall C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\gifsicle
> node lib/install.js

gifsicle pre-build test passed successfully

> mozjpeg@7.1.1 postinstall C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\mozjpeg
> node lib/install.js

mozjpeg pre-build test passed successfully

> optipng-bin@7.0.1 postinstall C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\optipng-bin
> node lib/install.js

optipng pre-build test passed successfully

> pngquant-bin@6.0.1 postinstall C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\pngquant-bin
> node lib/install.js

pngquant pre-build test passed successfully

> swiper@6.8.4 postinstall C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\swiper
> node -e "try{require('./postinstall')}catch(e){}"

Love Swiper? Support Vladimir's work by donating or pledging: 
> On Patreon https://patreon.com/vladimirkharlampidi 
> On Open Collective https://opencollective.com/swiper
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules\watchpack-chokidar2\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules\webpack-dev-server\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN postcss-loader@5.3.0 requires a peer of webpack@^5.0.0 but none is installed. You must install peer dependencies yourself.

added 1789 packages from 909 contributors in 1031.226s

141 packages are looking for funding
  run `npm fund` for details

PS C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500> 
```

测试启动

```sh
 DONE  Compiled successfully in 302030ms                                                                                                                                        16:17:57



  App running at:
  - Local:   http://localhost:8080
  - Network: unavailable

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

测试打包

```sh
Windows PowerShell
版权所有 (C) 2015 Microsoft Corporation。保留所有权利。

PS C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500> npm run build

> vue-template@0.1.0 build C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500
> vue-cli-service build


\  Building for production...node:events:491
      throw er; // Unhandled 'error' event
      ^

Error: write UNKNOWN
    at ChildProcess.target._send (node:internal/child_process:874:20)
    at ChildProcess.target.send (node:internal/child_process:747:19)
    at ChildProcessWorker.send (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\workers\ChildProcessWorker.js:291:17)
    at WorkerPool.send (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\WorkerPool.js:32:34)
    at Farm._process (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\Farm.js:129:10)
    at Farm._enqueue (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\Farm.js:152:10)
    at Farm._push (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\Farm.js:159:12)
    at C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\Farm.js:90:14
    at new Promise (<anonymous>)
    at Farm.doWork (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\Farm.js:56:12)
    at JestWorker._callFunctionWithArgs (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\index.js:143:23)
    at TaskRunner.runTask (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\terser-webpack-plugin\dist\TaskRunner.js:41:26)
    at enqueue (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\terser-webpack-plugin\dist\TaskRunner.js:89:35)
    at C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\terser-webpack-plugin\dist\TaskRunner.js:113:86
Emitted 'error' event on ChildProcess instance at:
    at node:internal/child_process:878:39
    at processTicksAndRejections (node:internal/process/task_queues:78:11) {
  errno: -4094,
  code: 'UNKNOWN',
  syscall: 'write'
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! vue-template@0.1.0 build: `vue-cli-service build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the vue-template@0.1.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\miyufeng\AppData\Roaming\npm-cache\_logs\2023-04-04T08_22_56_309Z-debug.log
```

```sh
PS C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500> npm run build

> vue-template@0.1.0 build C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500
> vue-cli-service build


/  Building for production...node:events:491
      throw er; // Unhandled 'error' event
      ^

Error: write UNKNOWN
    at ChildProcess.target._send (node:internal/child_process:874:20)
    at ChildProcess.target.send (node:internal/child_process:747:19)
    at ChildProcessWorker.send (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\workers\ChildProcessWorker.js:291:17)
    at WorkerPool.send (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\WorkerPool.js:32:34)
    at Farm._process (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\Farm.js:129:10)
    at Farm._enqueue (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\Farm.js:152:10)
    at Farm._push (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\Farm.js:159:12)
    at C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\Farm.js:90:14
    at new Promise (<anonymous>)
    at Farm.doWork (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\Farm.js:56:12)
    at JestWorker._callFunctionWithArgs (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\jest-worker\build\index.js:143:23)
    at TaskRunner.runTask (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\terser-webpack-plugin\dist\TaskRunner.js:41:26)
    at enqueue (C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\terser-webpack-plugin\dist\TaskRunner.js:89:35)
    at C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500\node_modules\terser-webpack-plugin\dist\TaskRunner.js:113:86
Emitted 'error' event on ChildProcess instance at:
    at node:internal/child_process:878:39
    at processTicksAndRejections (node:internal/process/task_queues:78:11) {
  errno: -4094,
  code: 'UNKNOWN',
  syscall: 'write'
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! vue-template@0.1.0 build: `vue-cli-service build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the vue-template@0.1.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\miyufeng\AppData\Roaming\npm-cache\_logs\2023-04-04T08_26_04_001Z-debug.log
```

```sh
Windows PowerShell
版权所有 (C) 2015 Microsoft Corporation。保留所有权利。

PS C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500> npm run build

> vue-template@0.1.0 build C:\Users\miyufeng\IdeaProjects\sz-web\jysp3500
> vue-cli-service build


\  Building for production...

 WARNING  Compiled with 2 warnings                                                                                                                                              16:31:46


 warning 

asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  img/loginImg.f4f2c330.png (249 KiB)
  img/n-mask.8c57ce87.png (1.37 MiB)
  fonts/JLinXin.7937e17a.woff2 (754 KiB)
  fonts/JLinXin.60c54414.woff (1.02 MiB)
  fonts/JLinXin.2935d582.eot (1.56 MiB)
  img/bgNw.b5712b2e.png (287 KiB)
  css/manifest.f9e2073c.css (760 KiB)
  js/manifest.c2046af7.js (5.22 MiB)
  css/styles.562ce7e1.css (259 KiB)
  js/vendor.735b7568.js (3.08 MiB)
  js/vendor.735b7568.js.gz (983 KiB)
  js/manifest.c2046af7.js.gz (1.56 MiB)

 warning 

entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  app (3.5 MiB)
      css/vendor.041965f6.css
      js/vendor.735b7568.js
      css/styles.562ce7e1.css
      js/styles.9b65da65.js
      css/app.f669a8dd.css
      js/app.34252ec6.js
  main (3.11 MiB)
      css/vendor.041965f6.css
      js/vendor.735b7568.js
      js/main.3f84b76a.js


  File                              Size                                                                     Gzipped

  dist\js\manifest.c2046af7.js      5349.49 KiB                                                              1603.41 KiB
  dist\js\vendor.735b7568.js        3157.72 KiB                                                              985.98 KiB
  dist\js\app.34252ec6.js           125.60 KiB                                                               38.57 KiB
  dist\js\main.3f84b76a.js          1.52 KiB                                                                 0.73 KiB
  dist\server.js                    1.07 KiB                                                                 0.62 KiB
  dist\js\styles.9b65da65.js        0.18 KiB                                                                 0.12 KiB
  dist\css\manifest.f9e2073c.css    759.95 KiB                                                               172.30 KiB
  dist\css\styles.562ce7e1.css      258.59 KiB                                                               42.60 KiB
  dist\css\vendor.041965f6.css      24.05 KiB                                                                6.19 KiB
  dist\css\app.f669a8dd.css         18.79 KiB                                                                4.04 KiB

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
```

### 方式二：`npm install --legacy-peer-deps`

使用 npm install --legacy-peer-deps