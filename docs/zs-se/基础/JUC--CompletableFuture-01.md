# JUC--CompletableFuture-01

## 简介

在Java8中，CompletableFuture提供了非常强大的Future的扩展功能，可以帮助我们简化异步编程的复杂性，并且提供了函数式编程的能力，可以通过回调的方式处理计算结果，也提供了转换和组合 CompletableFuture 的方法。

异步计算很难推理。通常，我们希望将任何计算都视为一系列步骤，但是在异步计算的情况下，以回调表示的动作往往分散在代码中或彼此深深地嵌套在一起。当我们需要处理其中一个步骤中可能发生的错误时，情况变得更加糟糕。Future是Java 5中添加作为异步计算的结果，但它没有任何方法处理计算可能出现的错误。

Java 8引入了CompletableFuture类。除Future接口外，它还实现了CompletionStage接口。该接口为异步计算步骤定义了合同，我们可以将其与其他步骤结合使用。

CompletableFuture类中fluentapi的大多数方法都有另外两个带有异步后缀的变体。这些方法通常用于在另一个线程中运行相应的执行步骤。

没有异步后缀的方法使用调用线程运行下一个执行阶段。相反，不带Executor参数的Async方法使用Executor的公共fork/join池实现运行一个步骤，该实现通过ForkJoinPool.commonPool（）方法访问。最后，带有Executor参数的Async方法使用传递的Executor运行步骤。

```java
CompletableFuture<String> completableFuture  
  = CompletableFuture.supplyAsync(() -> "Hello");

CompletableFuture<String> future = completableFuture
  .thenApplyAsync(s -> s + " World");

assertEquals("Hello World", future.get());
```



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
        String cfGet = cf1.get();//编译异常
        String cfJoin = cf1.join();//运行时异常

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

## 用作Future

首先，`CompletableFuture`类实现了`Future`接口，因此我们可以将其用作`Future`的实现，但需要附加完成逻辑。

例如，我们可以用一个无参数构造函数创建这个类的实例来表示`Future`的结果，将它分发给使用者，并在将来的某个时候使用`complete`方法完成它。

使用者可以使用`get`方法阻塞当前线程，直到提供此结果。

在下面的示例中，我们有一个方法，它创建一个CompletableFuture实例，然后在另一个线程中派生一些计算，并立即返回Future。计算完成后，该方法通过向完整方法提供结果来完成Future：

```java
public Future<String> calculateAsync() throws InterruptedException {
    CompletableFuture<String> completableFuture = new CompletableFuture<>();

    Executors.newCachedThreadPool().submit(() -> {
        Thread.sleep(500);
        completableFuture.complete("Hello");
        return null;
    });

    return completableFuture;
}
```

我们使用executor api。这种创建和完成CompletableFuture的方法可以与任何并发机制或API（包括原始线程）一起使用。

请注意，calculateAsync方法将返回一个`Future`的实例。
我们只需调用该方法，接收Future实例，并在准备阻塞结果时对其调用get方法。

还要注意get方法抛出一些已检查的异常，即ExecutionException（封装计算期间发生的异常）和interruptedeexception（表示执行方法的线程被中断的异常）

```java
Future<String> completableFuture = calculateAsync();

// ... 

String result = completableFuture.get();
assertEquals("Hello", result);
```

如果我们已经知道计算的结果，我们可以使用静态completedFuture方法，并使用一个参数，该参数表示此计算的结果。因此，将来的get方法永远不会阻塞，立即返回此结果，而不是：

```java
Future<String> completableFuture = 
  CompletableFuture.completedFuture("Hello");

// ...

String result = completableFuture.get();
assertEquals("Hello", result);
```



## 异步任务

静态方法`runAsync`和`supplyAsync`允许我们相应地使用`Runnable`和`Supplier`函数类型创建一个可完成的未来实例。

`Runnable`和`Supplier`都是函数接口，由于新的java8特性，它们允许将实例作为lambda表达式传递。

`Runnable`接口与线程中使用的旧接口相同，不允许返回值。

`Supplier`接口是一个通用函数接口，它有一个方法，该方法没有参数，并且返回一个参数化类型的值。

### 带返回值

使用Supplier接口

```java
//TODO 创建带返回值的异步任务
CompletableFuture<String> cf1 = CompletableFuture.supplyAsync(() -> this.getName("张三"), executorService);
String cfGet = cf1.get();
String cfJoin = cf1.join();
```



### 不带返回值

使用Runnable接口

```java
//TODO 创建不带返回值的异步任务
CompletableFuture.runAsync(() -> this.getName("张三"), executorService);
```

## 链式编排



### 任务A--结果-->任务B_无返回

如果我们不需要在Future中返回值，我们可以使用Consumer函数接口的实例。它的单个方法接受一个参数并返回void。

`thenAccept`方法接收使用者并将计算结果传递给它。最后一个`future.get()`调用返回Void类型的实例：

```java
CompletableFuture<String> completableFuture
  = CompletableFuture.supplyAsync(() -> "Hello");

CompletableFuture<Void> future = completableFuture
  .thenAccept(s -> System.out.println("Computation returned: " + s));

future.get();
```



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



处理计算结果的最通用的方法是将其提供给函数。`thenApply`方法正是这样做的；它接受一个函数实例，用它来处理结果，并返回一个包含函数返回值的Future：

```java
CompletableFuture<String> completableFuture
  = CompletableFuture.supplyAsync(() -> "Hello");

CompletableFuture<String> future = completableFuture
  .thenApply(s -> s + " World");

assertEquals("Hello World", future.get());
```

CompletableFuture API最好的部分是能够在一系列计算步骤中组合CompletableFuture实例。

这种链接的结果本身就是一个完整的Future，允许进一步的链接和组合。这种方法在函数语言中普遍存在，通常被称为享元模式。

在下面的示例中，我们使用thenCompose方法按顺序链接两个Future。

请注意，此方法接受一个返回CompletableFuture实例的函数。此函数的参数是上一计算步骤的结果。这允许我们在下一个CompletableFuture的lambda中使用此值：

```java
CompletableFuture<String> completableFuture 
  = CompletableFuture.supplyAsync(() -> "Hello")
    .thenCompose(s -> CompletableFuture.supplyAsync(() -> s + " World"));

assertEquals("Hello World", completableFuture.get());
```

thenCompose方法与thenApply一起实现了享元模式的基本构建块。它们与流的map和flatMap方法以及java8中的可选类密切相关。

两个方法都接收一个函数并将其应用于计算结果，但是thencomose（flatMap）方法接收一个返回另一个相同类型对象的函数。这种功能结构允许将这些类的实例组合为构建块。





### 任务A--void-->任务B_void

如果我们既不需要计算的值，也不想返回值，那么我们可以将一个可运行的lambda传递给`thenRun`方法。在下面的示例中，我们只需在调用`future.get()`后在控制台中打印一行：

```java
CompletableFuture<String> completableFuture 
  = CompletableFuture.supplyAsync(() -> "Hello");

CompletableFuture<Void> future = completableFuture
  .thenRun(() -> System.out.println("Computation finished."));

future.get();
```



### 任务A--结果,异常-->主线程

```java
//TODO 异步任务执行成功后，自动回调（主线程）
CompletableFuture.supplyAsync(() -> this.getName("张三")).whenComplete((result, exception) -> System.out.println(result));
CompletableFuture.supplyAsync(() -> this.getName("张三")).whenCompleteAsync((result, exception) -> System.out.println(result));

```

### A,B--结果-->处理

一个简单的例子是，当我们想处理两个CompletableFuture的结果时，但不需要将任何结果值传递给CompletableFuture的链。thenAcceptBoth方法可以帮助：

```java
//TODO 两个异步任务同时执行，获取执行结果
CompletableFuture.supplyAsync(() -> this.getName("张三"))
    .thenAcceptBoth(CompletableFuture.supplyAsync(() -> this.getName("李四")),
                    (resultA, resultB) -> System.out.println(resultA + resultB));

```

如果我们想执行两个独立的Future，并对它们的结果进行处理，我们可以使用`thenCombine`方法，该方法接受一个Future和一个具有两个参数的函数来处理这两个结果：

```java
CompletableFuture<String> completableFuture 
  = CompletableFuture.supplyAsync(() -> "Hello")
    .thenCombine(CompletableFuture.supplyAsync(
      () -> " World"), (s1, s2) -> s1 + s2));

assertEquals("Hello World", completableFuture.get());
```

### thenApply()和thenCompose()的区别

> thenApply()

我们可以使用此方法处理上一次调用的结果。但是，需要记住的一点是，返回类型将由所有调用组合而成。

因此，当我们要转换CompletableFuture调用的结果时，此方法非常有用：

```java
CompletableFuture<Integer> finalResult = compute().thenApply(s-> s + 1);
```

> thenCompose()

thenCompose（）方法与thenApply（）类似，因为两者都返回一个新的完成阶段。但是，thencose（）使用前一阶段作为参数。它将展平并直接返回一个带有结果的CompletableFuture，而不是我们在thenApply（）中观察到的嵌套CompletableFuture：

```java
CompletableFuture<Integer> computeAnother(Integer i){
    return CompletableFuture.supplyAsync(() -> 10 + i);
}
CompletableFuture<Integer> finalResult = compute().thenCompose(this::computeAnother);
```

因此，如果要链接可完成的CompletableFuture方法，那么最好使用thenCompose（）。

另外，请注意，这两个方法之间的差异类似于map（）和flatMap（）之间的差异。

## 多线程同时执行

当我们需要并行执行多个期货时，我们通常希望等待所有Supplier执行，然后处理它们的组合结果。

### 方式一_单对象处理

```java
//TODO 方式一：多线程同时执行，及其处理  *****常用
CompletableFuture<String> cf3 = CompletableFuture.supplyAsync(() -> this.getName("张三"));
CompletableFuture<String> cf4 = CompletableFuture.supplyAsync(() -> this.getName("李四"));
CompletableFuture.allOf(cf3, cf4).join();//同时执行
String val1 = cf3.get();
String val2 = cf4.get();
```

CompletableFuture.allOf静态方法允许等待的所有Supplier的完成：

```java
CompletableFuture<String> future1  
  = CompletableFuture.supplyAsync(() -> "Hello");
CompletableFuture<String> future2  
  = CompletableFuture.supplyAsync(() -> "Beautiful");
CompletableFuture<String> future3  
  = CompletableFuture.supplyAsync(() -> "World");

CompletableFuture<Void> combinedFuture 
  = CompletableFuture.allOf(future1, future2, future3);

// ...

combinedFuture.get();

assertTrue(future1.isDone());
assertTrue(future2.isDone());
assertTrue(future3.isDone());
```

注意CompletableFuture.allOf（）的返回类型是CompletableFuture。这种方法的局限性在于它不能返回所有Supplier的组合结果。相反，我们必须从Future手动获取结果。幸运的是，CompletableFuture.join（）方法和Java 8 Streams API使它变得简单：

```java
String combined = Stream.of(future1, future2, future3)
  .map(CompletableFuture::join)
  .collect(Collectors.joining(" "));

assertEquals("Hello Beautiful World", combined);
```

join（）方法类似于get方法，但是如果Future不能正常完成，它会抛出一个未检查的异常。这样就可以将其用作Stream.map（）方法中的方法引用。







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

