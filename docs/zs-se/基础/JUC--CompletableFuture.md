# JUC--CompletableFuture

> 不多哔哔，完整案例

```java
package com.zs.comple;

import org.assertj.core.util.Lists;
import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

/**
 * Create by 张邵
 * 2024/1/30 17:24
 */
@SpringBootTest
public class CompletableFutureTest {
    private static ExecutorService executorService;

    @Before
    public void pool() {
        //CPU密集型（CPU核心数 | CPU核心数+1）
        //IO密集型（CPU核心数*2）
        //核心线程数，线程工厂
        executorService = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors(), r -> {
            Thread thread = new Thread(r);
            thread.setName("thread pool .........");
            return thread;
        });
    }


    String getName(String name) {
        System.out.println("=========" + Thread.currentThread().getName());
        return name;
    }

    @Test
    public void demo() throws ExecutionException, InterruptedException {
        //TODO 当不传线程池的情况下，会用ForkJoinPool中公共线程池CommonPool(线程池大小是CPU核心数 - 1)

        //TODO 创建不带返回值的异步任务
        CompletableFuture.runAsync(() -> this.getName("张三"), executorService);

        //TODO 创建带返回值的异步任务
        CompletableFuture<String> cf1 = CompletableFuture.supplyAsync(() -> this.getName("张三"), executorService);
        String cfGet = cf1.get();
        String cfJoin = cf1.join();

        //TODO 异步编排的链式写法
        //TODO 第一个任务完成后，继续执行新任务，且无法返回。
        // 区别 thenAccept 将使用主线程继续执行, thenAcceptAsync 使用异步线程执行
        CompletableFuture.supplyAsync(() -> this.getName("张三"))
                .thenAccept(/*a是第一个线程返回的结果*/(a) -> this.getName("666"))
                .thenAcceptAsync(/*null*/(a) -> System.out.println(a));
        CompletableFuture.supplyAsync(() -> this.getName("张三")).thenAcceptAsync(/*a是第一个线程返回的结果*/(a) -> System.out.println("aaa"));


        //TODO 第一个任务完成后，继续执行新任务，且可以返回结果。
        CompletableFuture.supplyAsync(() -> this.getName("张三")).thenApply((a) -> {
            System.out.println("aaa");
            return a;
        });
        CompletableFuture.supplyAsync(() -> this.getName("张三")).thenApplyAsync((a) -> {
            System.out.println("aaa");
            return a;
        });

        //TODO 第一个任务完成后，继续执行新任务，且可以返回结果。
        //thenCompose 会再次创建一个CompletableFuture对象
        CompletableFuture.supplyAsync(() -> this.getName("张三"))
                .thenCompose(res -> CompletableFuture.supplyAsync(() -> {
                    this.getName("666");
                    return res;
                }));


        //TODO 异步任务执行成功后，自动回调（主线程）
        CompletableFuture.supplyAsync(() -> this.getName("张三")).whenComplete((result, exception) -> System.out.println(result));
        CompletableFuture.supplyAsync(() -> this.getName("张三")).whenCompleteAsync((result, exception) -> System.out.println(result));


        //TODO 两个异步任务同时执行，获取执行结果
        CompletableFuture.supplyAsync(() -> this.getName("张三"))
                .thenAcceptBoth(CompletableFuture.supplyAsync(() -> this.getName("李四")),
                        (resultA, resultB) -> System.out.println(resultA + resultB));


        //TODO 方式一：多线程同时执行，及其处理  *****常用
        CompletableFuture<String> cf3 = CompletableFuture.supplyAsync(() -> this.getName("张三"));
        CompletableFuture<String> cf4 = CompletableFuture.supplyAsync(() -> this.getName("李四"));
        CompletableFuture.allOf(cf3, cf4).join();//同时执行
        String val1 = cf3.get();
        String val2 = cf4.get();

        //TODO 方式二:集合对象，批量处理 *****常用
        ArrayList<String> list = Lists.newArrayList("张三", "李四", "王五", "赵六");
        List<CompletableFuture<String>> completableFutureList = list.stream()
                //将集合数据转 CompletableFuture对象
                .map(name -> CompletableFuture.supplyAsync(() -> this.getName(name)))
                //收集为集合
                .collect(Collectors.toList());
        //多任务并发执行
        CompletableFuture.allOf(completableFutureList.toArray(new CompletableFuture[completableFutureList.size()])).join();//同时执行
        //获取执行结果,过滤空结果
        List<String> resultList2 = completableFutureList.stream().map(this::tryGetString).filter(Objects::nonNull).collect(Collectors.toList());


        //TODO 方式3 将list转为CompletableFuture<String>[] 数组，收集执行结果
        //将list列表 --->转为 CompletableFuture[] 数组
        CompletableFuture<String>[] completableFutures = list.stream()
                .map(name -> CompletableFuture.supplyAsync(() -> this.getName(name)))
                .toArray(CompletableFuture[]::new);
        //同时执行
        CompletableFuture.allOf(completableFutures).join();//同时执行
        //stream获取集合中的结果，过滤空结果，收集为集合
        List<String> resultList3 = Arrays.stream(completableFutures).map(this::tryGetString).filter(Objects::nonNull).collect(Collectors.toList());


        //TODO 方式4: 将list转为CompletableFuture对象，在完成时获取结果存入集合
        ArrayList<String> resultList = new ArrayList<>();
        CompletableFuture.allOf(list.stream()
                .map(name ->
                        CompletableFuture.supplyAsync(() -> this.getName(name))
                                .whenCompleteAsync((result, exception) -> {
                                    resultList.add(result);
                                })).toArray(CompletableFuture[]::new)).join();
        System.out.println(resultList);
    }

    private String tryGetString(CompletableFuture<String> completableFuture) {
        try {
            return completableFuture.get();
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        return null;
    }
}

```



## 异步任务

### 带返回值

```java
//TODO 创建带返回值的异步任务
CompletableFuture<String> cf1 = CompletableFuture.supplyAsync(() -> this.getName("张三"), executorService);
String cfGet = cf1.get();
String cfJoin = cf1.join();
```



### 不带返回值

```java
//TODO 创建不带返回值的异步任务
CompletableFuture.runAsync(() -> this.getName("张三"), executorService);
```

## 链式编排

### 任务A--结果-->任务B_无返回

```java
//TODO 第一个任务完成后，继续执行新任务，且无法返回。
// 区别 thenAccept 将使用主线程继续执行, thenAcceptAsync 使用异步线程执行
CompletableFuture.supplyAsync(() -> this.getName("张三"))
    .thenAccept(/*a是第一个线程返回的结果*/(a) -> this.getName("666"))
    .thenAcceptAsync(/*null*/(a) -> System.out.println(a));
CompletableFuture.supplyAsync(() -> this.getName("张三")).thenAcceptAsync(/*a是第一个线程返回的结果*/(a) -> System.out.println("aaa"));

```

### 任务A--结果-->任务B_有返回

```java
//TODO 第一个任务完成后，继续执行新任务，且可以返回结果。
CompletableFuture.supplyAsync(() -> this.getName("张三")).thenApply((a) -> {
    System.out.println("aaa");
    return a;
});
CompletableFuture.supplyAsync(() -> this.getName("张三")).thenApplyAsync((a) -> {
    System.out.println("aaa");
    return a;
});
```



```java
//TODO 第一个任务完成后，继续执行新任务，且可以返回结果。
//thenCompose 会再次创建一个CompletableFuture对象
CompletableFuture.supplyAsync(() -> this.getName("张三"))
    .thenCompose(res -> CompletableFuture.supplyAsync(() -> {
        this.getName("666");
        return res;
    }));

```

### 任务A--结果,异常-->主线程

```java
//TODO 异步任务执行成功后，自动回调（主线程）
CompletableFuture.supplyAsync(() -> this.getName("张三")).whenComplete((result, exception) -> System.out.println(result));
CompletableFuture.supplyAsync(() -> this.getName("张三")).whenCompleteAsync((result, exception) -> System.out.println(result));

```

### 同时执行A，B

```java
//TODO 两个异步任务同时执行，获取执行结果
CompletableFuture.supplyAsync(() -> this.getName("张三"))
    .thenAcceptBoth(CompletableFuture.supplyAsync(() -> this.getName("李四")),
                    (resultA, resultB) -> System.out.println(resultA + resultB));

```



## 多线程同时执行

### 方式一_单对象处理

```java
//TODO 方式一：多线程同时执行，及其处理  *****常用
CompletableFuture<String> cf3 = CompletableFuture.supplyAsync(() -> this.getName("张三"));
CompletableFuture<String> cf4 = CompletableFuture.supplyAsync(() -> this.getName("李四"));
CompletableFuture.allOf(cf3, cf4).join();//同时执行
String val1 = cf3.get();
String val2 = cf4.get();
```

### 方式二_集合对象

```java
//TODO 方式二:集合对象，批量处理 *****常用
ArrayList<String> list = Lists.newArrayList("张三", "李四", "王五", "赵六");
List<CompletableFuture<String>> completableFutureList = list.stream()
    //将集合数据转 CompletableFuture对象
    .map(name -> CompletableFuture.supplyAsync(() -> this.getName(name)))
    //收集为集合
    .collect(Collectors.toList());
//多任务并发执行
CompletableFuture.allOf(completableFutureList.toArray(new CompletableFuture[completableFutureList.size()])).join();//同时执行
//获取执行结果,过滤空结果
List<String> resultList2 = completableFutureList.stream().map(this::tryGetString).filter(Objects::nonNull).collect(Collectors.toList());
```

### 方式三_集合对象

```java

//TODO 方式3 将list转为CompletableFuture<String>[] 数组，收集执行结果
//将list列表 --->转为 CompletableFuture[] 数组
CompletableFuture<String>[] completableFutures = list.stream()
    .map(name -> CompletableFuture.supplyAsync(() -> this.getName(name)))
    .toArray(CompletableFuture[]::new);
//同时执行
CompletableFuture.allOf(completableFutures).join();//同时执行
//stream获取集合中的结果，过滤空结果，收集为集合
List<String> resultList3 = Arrays.stream(completableFutures).map(this::tryGetString).filter(Objects::nonNull).collect(Collectors.toList());

```

### 方式四_集合对象

```java
//TODO 方式4: 将list转为CompletableFuture对象，在完成时获取结果存入集合
ArrayList<String> resultList = new ArrayList<>();
CompletableFuture.allOf(list.stream()
                        .map(name ->
                             CompletableFuture.supplyAsync(() -> this.getName(name))
                             .whenCompleteAsync((result, exception) -> {
                                 resultList.add(result);
                             })).toArray(CompletableFuture[]::new)).join();
System.out.println(resultList);
```

