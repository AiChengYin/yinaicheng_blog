# 装配Bean（xml方式）

## 实例化Bean的三种方式

用户服务业务逻辑层
```java
import java.text.MessageFormat;
/**
 * 用户服务业务逻辑层
 * @author: yinaicheng
 */
public class UserServiceImpl implements UserService{

    public UserServiceImpl(){
        System.out.println("构造方法调用了");
    }

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        System.out.println(MessageFormat.format("注入数据：{0}",name));
        this.name = name;
    }

    /**
     * 添加用户
     */
    @Override
    public void add() {
        System.out.println("添加用户");
    }

    public static void main(String[] args) {
        UserServiceImpl userService=new UserServiceImpl();
        userService.add();
    }
}
```

> 使用构造方法实例化

bean.xml配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!--配置一个bean对象-->
    <!--所谓的装配bean就是在xml写一个bean标签-->
    <!--第一种方式：new实现类-->
    <bean id="userService" class="top.yinaicheng.demo.UserServiceImpl"/>
</beans>
```

测试类
```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/**
 * 测试类
 * @author: yinaicheng
 */
public class Test {

    @org.junit.Test
    public void test(){
        /*第一种方式：new实现类*/
        ApplicationContext context =new ClassPathXmlApplicationContext("beans.xml");
        /*从Spring容器获取UserService对象，通过bean的id对象获取*/
        UserService userService=(UserService)context.getBean("userService");
        userService.add();
    }
}

```

```log
18:14:21.310 [main] DEBUG org.springframework.context.support.ClassPathXmlApplicationContext - Refreshing org.springframework.context.support.ClassPathXmlApplicationContext@59ec2012
18:14:21.571 [main] DEBUG org.springframework.beans.factory.xml.XmlBeanDefinitionReader - Loaded 1 bean definitions from class path resource [beans.xml]
18:14:21.647 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'userService'
构造方法调用了
添加用户
```

> 使用静态工厂方法实例化

用户服务工厂

```java
/**
 * 用户服务工厂
 * @author: yinaicheng
 */
public class UserServiceFactory {

    public static UserService createUserService(){
        return new UserServiceImpl();
    }

}

```

bean.xml配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!--配置一个bean对象-->
    <!--所谓的装配bean就是在xml写一个bean标签-->
    <!--第二种方式：通过静态工厂方法-->
    <bean id="userService" class="top.yinaicheng.demo.UserServiceFactory" factory-method="createUserService"/>
</beans>
```

测试类
```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/**
 * 测试类
 * @author: yinaicheng
 */
public class Test {

    @org.junit.Test
    public void test(){
        ApplicationContext context =new ClassPathXmlApplicationContext("beans.xml");
        /*从Spring容器获取UserService对象，通过bean的id对象获取*/
        UserService userService=(UserService)context.getBean("userService");
        userService.add();
    }
}

```

```log
18:35:49.228 [main] DEBUG org.springframework.context.support.ClassPathXmlApplicationContext - Refreshing org.springframework.context.support.ClassPathXmlApplicationContext@59ec2012
18:35:49.465 [main] DEBUG org.springframework.beans.factory.xml.XmlBeanDefinitionReader - Loaded 1 bean definitions from class path resource [beans.xml]
18:35:49.523 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'userService'
构造方法调用了
添加用户
```

> 使用实例工厂方法实例化

用户服务实例工厂
```java
/**
 * 用户服务实例工厂
 * @author: yinaicheng
 */
public class UserServiceInstanceFactory {

    public UserService createUserService(){
        return new UserServiceImpl();
    }

}
```

bean.xml配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
<!--配置一个bean对象-->
<!--所谓的装配bean就是在xml写一个bean标签-->
<!--通过实例工厂方法-->
<bean id="instanceFactory" class="top.yinaicheng.demo.UserServiceInstanceFactory"/>
<bean id="userService" factory-bean="instanceFactory" factory-method="createUserService"/>
</beans>
```

测试类
```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/**
 * 测试类
 * @author: yinaicheng
 */
public class Test {

    @org.junit.Test
    public void test(){
        ApplicationContext context =new ClassPathXmlApplicationContext("beans.xml");
        /*从Spring容器获取UserService对象，通过bean的id对象获取*/
        UserService userService=(UserService)context.getBean("userService");
        userService.add();
    }
}
```

```log
22:55:06.349 [main] DEBUG org.springframework.context.support.ClassPathXmlApplicationContext - Refreshing org.springframework.context.support.ClassPathXmlApplicationContext@59ec2012
22:55:06.698 [main] DEBUG org.springframework.beans.factory.xml.XmlBeanDefinitionReader - Loaded 2 bean definitions from class path resource [beans.xml]
22:55:06.747 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'instanceFactory'
22:55:06.766 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'userService'
构造方法调用了
添加用户
```

## bean的作用域

掌握singleton和prototype即可

| 类别          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| singleton     | 在Spring IOC容器中仅存在一个Bean实例，Bean以单例方式存在，默认值 |
| prototype     | 每次从容器中调用Bean时，都返回一个新的实例，即每次调用getBean()时，相当于执行new XxxBean() |
| request       | 每次HTTP请求都会创建一个新的Bean，该作用域仅适用于WebApplicationContext环境 |
| session       | 同一个HTTP Session共享一个Bean，不同Session使用不同Bean，仅仅适用于WebApplicationContext环境 |
| globalSession | 一般用于Portlet应用环境，该作用域仅适用于WebApplicationContext环境 |

> 配置scope为singleton

beans.xml配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
<!--配置一个bean对象-->
<!--所谓的装配bean就是在xml写一个bean标签-->
<!--scope配置为singleton(scope默认单例)-->
<bean id="userService" class="top.yinaicheng.demo.UserServiceImpl" scope="singleton"/>
</beans>
```

测试类
```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/**
 * 测试类
 * @author: yinaicheng
 */
public class Test {

    @org.junit.Test
    public void test(){
        /*第一种方式：new实现类*/
        ApplicationContext context =new ClassPathXmlApplicationContext("beans.xml");
        /*从Spring容器获取UserService对象，通过bean的id对象获取*/
        UserService userServiceAlpha=(UserService)context.getBean("userService");
        UserService userServiceBeta=(UserService)context.getBean("userService");
        /*判断对象所在内存地址是否一致*/
        System.out.println(userServiceAlpha==userServiceBeta?"bean一样":"bean不一样");
    }
}
```

输出结果
```log
13:57:11.790 [main] DEBUG org.springframework.context.support.ClassPathXmlApplicationContext - Refreshing org.springframework.context.support.ClassPathXmlApplicationContext@59ec2012
13:57:12.202 [main] DEBUG org.springframework.beans.factory.xml.XmlBeanDefinitionReader - Loaded 1 bean definitions from class path resource [beans.xml]
13:57:12.294 [main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'userService'
构造方法调用了
bean一样
```

> 配置scope为prototype

beans.xml配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
<!--配置一个bean对象-->
<!--所谓的装配bean就是在xml写一个bean标签-->
<!--scope配置为prototype(scope默认单例)-->
<bean id="userService" class="top.yinaicheng.demo.UserServiceImpl" scope="prototype"/>
</beans>
```

测试类
```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/**
 * 测试类
 * @author: yinaicheng
 */
public class Test {

    @org.junit.Test
    public void test(){
        /*第一种方式：new实现类*/
        ApplicationContext context =new ClassPathXmlApplicationContext("beans.xml");
        /*从Spring容器获取UserService对象，通过bean的id对象获取*/
        UserService userServiceAlpha=(UserService)context.getBean("userService");
        UserService userServiceBeta=(UserService)context.getBean("userService");
        /*判断对象所在内存地址是否一致*/
        System.out.println(userServiceAlpha==userServiceBeta?"bean一样":"bean不一样");
    }
}
```

输出结果
```log
00:38:07.944 [main] DEBUG org.springframework.context.support.ClassPathXmlApplicationContext - Refreshing org.springframework.context.support.ClassPathXmlApplicationContext@42dafa95
00:38:08.500 [main] DEBUG org.springframework.beans.factory.xml.XmlBeanDefinitionReader - Loaded 1 bean definitions from class path resource [beans.xml]
构造方法调用了
构造方法调用了
bean不一样
```

Spring的Bean默认是单例模式，主要原因是为了提高应用程序的性能和效率。单例模式可以避免重复创建对象，减少了内存占用和垃圾回收的开销，同时也可以保证对象的状态一致性，避免了多个实例之间的数据冲突。但是，如果某些Bean需要多个实例，可以通过配置Scope属性为prototype来实现。
