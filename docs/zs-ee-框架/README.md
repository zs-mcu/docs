# 版本关系


### SpringBoot版本

https://spring.io/projects/spring-boot/#support

> springboot

| 分支  | 初始发行       | 支持结束       | 结束商业支持 | jdk        | Maven  | tomcat |
| :---- | :------------- | :------------- | :----------- | ---------- | ------ | ------ |
| 3.2.x | 2023-11-23     | 2024-11-23     | 2026-02-23   | Java 17-21 | 3.6.3+ | 10.1   |
| 3.1.x | 2023-05-18     | 2024-05-18     | 2025-08-18   | Java 17-21 | 3.6.3+ | 10.1   |
| 3.0.x | 2022年11月24日 | 2023-11-24     | 2025-02-24   | Java 17-21 | 3.5+   | 10.1   |
| 2.7.x | 2022-05-19     | 2023-11-24     | 2025-08-24   | Java 8-21  | 3.5+   | 9.0    |
| 2.6.x | 2021-11-17     | 2022年11月24日 | 2024-02-24   | Java 8-19  | 3.5+   | 9.0    |
| 2.5.x | 2021-05-20     | 2022-05-19     | 2023-08-24   | Java 8-18  | 3.5+   | 9.0    |
| 2.4.x | 2020-11-12     | 2021-11-18     | 2023-02-23   | Java 8-16  | 3.5+   | 9.0    |
| 2.3.x | 2020-05-15     | 2021-05-20     | 2022-08-20   | Java 8-14  | 3.3+   | 9.0    |



### SpringCloud版本

SpringCloud之前的版本名称是伦敦地铁站的站名命名，且首字母顺序与版本时间顺序一致

**A**ngel
**B**rixton
**C**amden
**D**alston
**E**dgware
**F**inchley
**G**reenwich
**H**oxton

当SpringCloud的发布内容积累到临界点或者一个重大Bug被解决后，会发布一个"Service Releases"版本，简称"SR"版本。

> Spring cloud

| Release Train                                                | Spring Boot Generation                |
| ------------------------------------------------------------ | ------------------------------------- |
| [2023.0.x](https://github.com/spring-cloud/spring-cloud-release/wiki/Spring-Cloud-2023.0-Release-Notes) aka Leyton | 3.2.x                                 |
| [2022.0.x](https://github.com/spring-cloud/spring-cloud-release/wiki/Spring-Cloud-2022.0-Release-Notes) aka Kilburn | 3.0.x, 3.1.x (Starting with 2022.0.3) |
| [2021.0.x](https://github.com/spring-cloud/spring-cloud-release/wiki/Spring-Cloud-2021.0-Release-Notes) aka Jubilee | 2.6.x, 2.7.x (Starting with 2021.0.3) |
| [2020.0.x](https://github.com/spring-cloud/spring-cloud-release/wiki/Spring-Cloud-2020.0-Release-Notes) aka Ilford | 2.4.x, 2.5.x (Starting with 2020.0.3) |
| [Hoxton](https://github.com/spring-cloud/spring-cloud-release/wiki/Spring-Cloud-Hoxton-Release-Notes) | 2.2.x, 2.3.x (Starting with SR5)      |



| springcloud版本 | springboot版本       |
| --------------- | -------------------- |
| 2023.0.0        | 3.2.0                |
| 2022.0.4        | 3.0.9                |
| 2021.0.9        | 2.6.15               |
| 2020.0.5        | 2.4.13               |
| 2020.0.4        | 2.4.13               |
| Hoxton.SR12     | 推荐：2.3.12.RELEASE |
| Hoxton.SR8      | 推荐：2.3.3.RELEASE  |



### Spring Cloud Alibaba版本

 [https://github.com/alibaba/spring-cloud-alibaba/wiki/版本说明](https://github.com/alibaba/spring-cloud-alibaba/wiki/_E7_89_88_E6_9C_AC_E8_AF_B4_E6_98_8E)

由于 Spring Boot 3.0，Spring Boot 2.7~2.4 和 2.4 以下版本之间变化较大，目前企业级客户老项目相关 Spring Boot 版本仍停留在 Spring Boot 2.4 以下，为了同时满足存量用户和新用户不同需求，社区以 Spring Boot 3.0 和 2.4 分别为分界线，同时维护 2022.x、2021.x、2.2.x 三个分支迭代。如果不想跨分支升级，如需使用新特性，请升级为对应分支的新版本。 为了规避相关构建过程中的依赖冲突问题，我们建议可以通过 [云原生应用脚手架](https://start.aliyun.com/) 进行项目创建。

> 2021.x 分支

| Spring Cloud Alibaba Version | Spring Cloud Version  | Spring Boot Version |
| ---------------------------- | --------------------- | ------------------- |
| 2021.0.5.0*                  | Spring Cloud 2021.0.5 | 2.6.13              |
| 2021.0.4.0                   | Spring Cloud 2021.0.4 | 2.6.11              |
| 2021.0.1.0                   | Spring Cloud 2021.0.1 | 2.6.3               |
| 2021.1                       | Spring Cloud 2020.0.1 | 2.4.2               |

> 2.2.x 分支

| Spring Cloud Alibaba Version | Spring Cloud Version     | Spring Boot Version |
| ---------------------------- | ------------------------ | ------------------- |
| 2.2.10-RC1*                  | Spring Cloud Hoxton.SR12 | 2.3.12.RELEASE      |
| 2.2.9.RELEASE                | Spring Cloud Hoxton.SR12 | 2.3.12.RELEASE      |
| 2.2.8.RELEASE                | Spring Cloud Hoxton.SR12 | 2.3.12.RELEASE      |
| 2.2.7.RELEASE                | Spring Cloud Hoxton.SR12 | 2.3.12.RELEASE      |
| 2.2.6.RELEASE                | Spring Cloud Hoxton.SR9  | 2.3.2.RELEASE       |

### 版本选择

| 依赖                              | 版本           |
| --------------------------------- | -------------- |
| Jdk                               | 8              |
| spring-boot-dependencies          | 2.3.12.RELEASE |
| spring-cloud-dependencies         | Hoxton.SR12    |
| spring-cloud-alibaba-dependencies | 2.2.10-RC1     |
| mybatis-spring-boot-starter       | 2.1.4          |

| 依赖                              | 版本     |
| --------------------------------- | -------- |
| Jdk                               | 8        |
| spring-boot-dependencies          | 2.4.2    |
| spring-cloud-dependencies         | 2020.0.6 |
| spring-cloud-alibaba-dependencies | 2021.1   |
| mybatis-spring-boot-starter       | 2.1.4    |

| 依赖                              | 版本       |
| --------------------------------- | ---------- |
| Jdk                               | 8          |
| spring-boot-dependencies          | 2.7.6      |
| spring-cloud-dependencies         | 2021.0.5   |
| spring-cloud-alibaba-dependencies | 2021.0.5.0 |
| mybatis-spring-boot-starter       | 2.3.0      |

| 依赖                              | 版本           |
| --------------------------------- | -------------- |
| Jdk                               | 17             |
| spring-boot-dependencies          | 3.0.2          |
| spring-cloud-dependencies         | 2022.0.0-RC2   |
| spring-cloud-alibaba-dependencies | 2022.0.0.0-RC2 |
| mybatis-spring-boot-starter       | 3.0.0          |





