(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1226:function(a,e,n){"use strict";n.r(e);var t=n(4),i=function(a){a.options.__data__block__={mermaid_382ee167:"classDiagram\ndirection BT\nclass AbstractAutowireCapableBeanFactory {\n  # createBean(String, BeanDefinition) Object\n  # doCreateBean(String, BeanDefinition) Object\n}\nclass AbstractBeanFactory {\n  + getBean(String) Object\n  # getBeanDefinition(String) BeanDefinition\n  # createBean(String, BeanDefinition) Object\n}\nclass BeanDefinition {\n  - Class beanClass\n  + setBeanClass(Class) void\n  + getBeanClass() Class\n}\nclass BeanDefinitionRegistry {\n<<Interface>>\n  + registerBeanDefinition(String, BeanDefinition) void\n}\nclass BeanFactory {\n<<Interface>>\n  + getBean(String) Object\n}\nclass DefaultListableBeanFactory {\n  - Map~String, BeanDefinition~ beanDefinitionMap\n  + registerBeanDefinition(String, BeanDefinition) void\n  # getBeanDefinition(String) BeanDefinition\n}\nclass DefaultSingletonBeanRegistry {\n  - Map~String, Object~ singletonObjects\n  # addSingleton(String, Object) void\n  + getSingleton(String) Object\n}\nclass SingletonBeanRegistry {\n<<Interface>>\n  + getSingleton(String) Object\n}\n\nAbstractAutowireCapableBeanFactory  --\x3e  AbstractBeanFactory \nAbstractBeanFactory  ..>  BeanFactory \nAbstractBeanFactory  --\x3e  DefaultSingletonBeanRegistry \nDefaultListableBeanFactory  --\x3e  AbstractAutowireCapableBeanFactory \nDefaultListableBeanFactory  ..>  BeanDefinitionRegistry \nDefaultSingletonBeanRegistry  ..>  SingletonBeanRegistry \n"}},r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"spring-6-2-ioc-定义池和单例池"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-6-2-ioc-定义池和单例池"}},[a._v("#")]),a._v(" spring--6.2.ioc-定义池和单例池")]),a._v(" "),e("p",[a._v("核心思想：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("bean的定义池中存放bean的 class信息用于反射创建bean")])]),a._v(" "),e("li",[e("p",[a._v("bean单例池中存放创建完成的对象，可直接获取使用")])]),a._v(" "),e("li",[e("p",[a._v("如果单例池中不存在，则通过反射创建，并放入单例池中")])])]),a._v(" "),e("Mermaid",{attrs:{id:"mermaid_382ee167",graph:a.$dataBlock.mermaid_382ee167}}),e("p",[e("img",{attrs:{src:n(506),alt:"image-20240117105035288"}})]),a._v(" "),e("h2",{attrs:{id:"设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计"}},[a._v("#")]),a._v(" 设计")]),a._v(" "),e("p",[a._v("鉴于本章节的案例目标，我们需要将 Spring Bean 容器完善起来，首先非常重要的一点是在 Bean 注册的时候只注册一个类信息，而不会直接把实例化信息注册到 Spring 容器中。那么就需要修改 BeanDefinition 中的属性 Object 为 Class，接下来在需要做的就是在获取 Bean 对象时需要处理 Bean 对象的实例化操作以及判断当前单例对象在容器中是否已经缓存起来了。")]),a._v(" "),e("p",[e("img",{attrs:{src:n(507),alt:"image-20240117112900564"}})]),a._v(" "),e("ul",[e("li",[a._v("首先我们需要定义 BeanFactory 这样一个 Bean 工厂，提供 Bean 的获取方法 "),e("code",[a._v("getBean(String name)")]),a._v("，之后这个 Bean 工厂接口由抽象类 AbstractBeanFactory 实现。这样使用"),e("a",{attrs:{href:"https://bugstack.cn/itstack-demo-design/2020/07/07/%E9%87%8D%E5%AD%A6-Java-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%AE%9E%E6%88%98%E6%A8%A1%E6%9D%BF%E6%A8%A1%E5%BC%8F.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("模板模式 (opens new window)"),e("OutboundLink")],1),a._v("的设计方式，可以统一收口通用核心方法的调用逻辑和标准定义，也就很好的控制了后续的实现者不用关心调用逻辑，按照统一方式执行。那么类的继承者只需要关心具体方法的逻辑实现即可。")]),a._v(" "),e("li",[a._v("那么在继承抽象类 AbstractBeanFactory 后的 AbstractAutowireCapableBeanFactory 就可以实现相应的抽象方法了，因为 AbstractAutowireCapableBeanFactory 本身也是一个抽象类，所以它只会实现属于自己的抽象方法，其他抽象方法由继承 AbstractAutowireCapableBeanFactory 的类实现。这里就体现了类实现过程中的各司其职，你只需要关心属于你的内容，不是你的内容，不要参与。"),e("em",[a._v("这一部分内容我们会在代码里有具体的体现")])]),a._v(" "),e("li",[a._v("另外这里还有块非常重要的知识点，就是关于单例 SingletonBeanRegistry 的接口定义实现，而 DefaultSingletonBeanRegistry 对接口实现后，会被抽象类 AbstractBeanFactory 继承。现在 AbstractBeanFactory 就是一个非常完整且强大的抽象类了，也能非常好的体现出它对模板模式的抽象定义。"),e("em",[a._v("接下来我们就带着这些设计层面的思考，去看代码的具体实现结果")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".\n├── pom.xml\n└── src\n    ├── main\n    │   ├── java\n    │   │   └── org\n    │   │       └── springframework\n    │   │           └── beans\n    │   │               ├── BeansException.java\n    │   │               └── factory\n    │   │                   ├── BeanFactory.java\n    │   │                   ├── config\n    │   │                   │   ├── BeanDefinition.java\n    │   │                   │   └── SingletonBeanRegistry.java\n    │   │                   └── support\n    │   │                       ├── AbstractAutowireCapableBeanFactory.java\n    │   │                       ├── AbstractBeanFactory.java\n    │   │                       ├── BeanDefinitionRegistry.java\n    │   │                       ├── DefaultListableBeanFactory.java\n    │   │                       └── DefaultSingletonBeanRegistry.java\n    │   └── resources\n    └── test\n        └── java\n            └── org\n                └── springframework\n                    └── test\n                        └── ioc\n                            ├── BeanDefinitionAndBeanDefinitionRegistryTest.java\n                            └── HelloService.java\n\n")])])]),e("p",[a._v("虽然这一章节关于 Spring Bean 容器的功能实现与 "),e("code",[a._v("Spring 源码")]),a._v("中还有不少的差距，但以目前实现结果的类关系图来看，其实已经具备了一定的设计复杂性，这些复杂的类关系设计在各个接口定义和实现以及在抽象类继承中都有所体现，例如：")]),a._v(" "),e("ul",[e("li",[a._v("BeanFactory 的定义由 AbstractBeanFactory 抽象类实现接口的 getBean 方法")]),a._v(" "),e("li",[a._v("而 AbstractBeanFactory 又继承了实现了 SingletonBeanRegistry 的DefaultSingletonBeanRegistry 类。这样 AbstractBeanFactory 抽象类就具备了单例 Bean 的注册功能。")]),a._v(" "),e("li",[a._v("AbstractBeanFactory 中又定义了两个抽象方法：getBeanDefinition(String beanName)、createBean(String beanName, BeanDefinition beanDefinition) ，而这两个抽象方法分别由 DefaultListableBeanFactory、AbstractAutowireCapableBeanFactory 实现。")]),a._v(" "),e("li",[a._v("最终 DefaultListableBeanFactory 还会继承抽象类 AbstractAutowireCapableBeanFactory 也就可以调用抽象类中的 createBean 方法了。")])]),a._v(" "),e("p",[a._v("综上这一部分的类关系和实现过程还是会有一些复杂的，因为所有的实现都以职责划分、共性分离以及调用关系定义为标准搭建的类关系。"),e("em",[a._v("这部分内容的学习，可能会丰富你在复杂业务系统开发中的设计思路。")])]),a._v(" "),e("h3",{attrs:{id:"beandefinition-定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beandefinition-定义"}},[a._v("#")]),a._v(" BeanDefinition 定义")]),a._v(" "),e("ul",[e("li",[a._v("在 Bean 定义类中已经把上一章节中的 Object bean 替换为 Class，这样就可以把 Bean 的实例化操作放到容器中处理了。"),e("em",[a._v("如果你有仔细阅读过上一章并做了相应的测试，那么你会发现 Bean 的实例化操作是放在初始化调用阶段传递给 BeanDefinition 构造函数的。")])])]),a._v(" "),e("h3",{attrs:{id:"单例注册接口定义和实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单例注册接口定义和实现"}},[a._v("#")]),a._v(" 单例注册接口定义和实现")]),a._v(" "),e("ul",[e("li",[a._v("这个类比较简单主要是定义了一个获取单例对象的接口。")]),a._v(" "),e("li",[a._v("在 DefaultSingletonBeanRegistry 中主要实现 getSingleton 方法，同时实现了一个受保护的 addSingleton 方法，这个方法可以被继承此类的其他类调用。包括：AbstractBeanFactory 以及继承的 DefaultListableBeanFactory 调用。")])]),a._v(" "),e("h3",{attrs:{id:"抽象类定义模板方法-abstractbeanfactory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抽象类定义模板方法-abstractbeanfactory"}},[a._v("#")]),a._v(" 抽象类定义模板方法(AbstractBeanFactory)")]),a._v(" "),e("ul",[e("li",[a._v("AbstractBeanFactory 首先继承了 DefaultSingletonBeanRegistry，也就具备了使用单例注册类方法。")]),a._v(" "),e("li",[a._v("接下来很重要的一点是关于接口 BeanFactory 的实现，在方法 getBean 的实现过程中可以看到，主要是对单例 Bean 对象的获取以及在获取不到时需要拿到 Bean 的定义做相应 Bean 实例化操作。那么 getBean 并没有自身的去实现这些方法，而是只定义了调用过程以及提供了抽象方法，由实现此抽象类的其他类做相应实现。")]),a._v(" "),e("li",[a._v("后续继承抽象类 AbstractBeanFactory 的类有两个，包括：AbstractAutowireCapableBeanFactory、DefaultListableBeanFactory，这两个类分别做了相应的实现处理，接着往下看。")])]),a._v(" "),e("h3",{attrs:{id:"实例化bean类-abstractautowirecapablebeanfactory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例化bean类-abstractautowirecapablebeanfactory"}},[a._v("#")]),a._v(" 实例化Bean类(AbstractAutowireCapableBeanFactory)")]),a._v(" "),e("ul",[e("li",[a._v("在 AbstractAutowireCapableBeanFactory 类中实现了 Bean 的实例化操作 "),e("code",[a._v("newInstance")]),a._v("，其实这块会埋下一个坑，有构造函数入参的对象怎么处理？"),e("em",[a._v("可以提前思考")])]),a._v(" "),e("li",[a._v("在处理完 Bean 对象的实例化后，直接调用 "),e("code",[a._v("addSingleton")]),a._v(" 方法存放到单例对象的缓存中去。")])]),a._v(" "),e("h3",{attrs:{id:"核心类实现-defaultlistablebeanfactory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现-defaultlistablebeanfactory"}},[a._v("#")]),a._v(" 核心类实现(DefaultListableBeanFactory)")]),a._v(" "),e("ul",[e("li",[a._v("DefaultListableBeanFactory 在 Spring 源码中也是一个非常核心的类，在我们目前的实现中也是逐步贴近于源码，与源码类名保持一致。")]),a._v(" "),e("li",[a._v("DefaultListableBeanFactory 继承了 AbstractAutowireCapableBeanFactory 类，也就具备了接口 BeanFactory 和 AbstractBeanFactory 等一连串的功能实现。"),e("em",[a._v("所以有时候你会看到一些类的强转，调用某些方法，也是因为你强转的类实现接口或继承了某些类。")])]),a._v(" "),e("li",[a._v("除此之外这个类还实现了接口 BeanDefinitionRegistry 中的 registerBeanDefinition(String beanName, BeanDefinition beanDefinition) 方法，当然你还会看到一个 getBeanDefinition 的实现，这个方法我们文中提到过它是抽象类 AbstractBeanFactory 中定义的抽象方法。"),e("em",[a._v("现在注册Bean定义与获取Bean定义就可以同时使用了，是不感觉这个套路还蛮深的。接口定义了注册，抽象类定义了获取，都集中在 DefaultListableBeanFactory 中的 beanDefinitionMap 里")])])]),a._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("ul",[e("li",[a._v("相对于前一章节对 Spring Bean 容器的简单概念实现，本章节中加强了功能的完善。在实现的过程中也可以看到类的关系变得越来越多了，如果没有做过一些稍微复杂的系统类系统，那么即使现在这样9个类搭出来的容器工厂也可以给你绕晕。")]),a._v(" "),e("li",[a._v("在 Spring Bean 容器的实现类中要重点关注类之间的职责和关系，几乎所有的程序功能设计都离不开接口、抽象类、实现、继承，而这些不同特性类的使用就可以非常好的隔离开类的功能职责和作用范围。而这样的知识点也是在学习手写 Spring Bean 容器框架过程非常重要的知识。")]),a._v(" "),e("li",[a._v("最后要强调一下关于整个系列内容的学习，可能在学习的过程中会遇到像第二章节那样非常简单的代码实现，但要做一个有成长的程序员要记住代码实现只是最后的落地结果，而那些设计上的思考才是最有价值的地方。"),e("em",[a._v("就像你是否遇到过，有人让你给一个内容做个描述、文档、说明，你总觉得太简单了没什么可写的，即使要动笔写了也不知道要从哪开始！其实这些知识内容都来源你对整体功能的理解，这就不只是代码开发还包括了需求目标、方案设计、技术实现、逻辑验证等等过程性的内容。所以，不要只是被看似简单的内容忽略了整体全局观，要学会放开视野，开放学习视角。")])])])],1)}),[],!1,null,null,null);"function"==typeof i&&i(r);e.default=r.exports},506:function(a,e,n){a.exports=n.p+"assets/img/image-20240117105035288.26a2b7b0.png"},507:function(a,e,n){a.exports=n.p+"assets/img/image-20240117112900564.cde6478f.png"}}]);