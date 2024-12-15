# 加载Spring容器的三种方式

## 类路径获得配置文件

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
        /*类路径获得配置文件，ClassPathXmlApplicationContext指的就是class路径*/
        ApplicationContext context=new ClassPathXmlApplicationContext("beans.xml");
        /*从Spring容器获取UserService对象，通过bean的id对象获取*/
        UserService userService=(UserService)context.getBean("userService");
        userService.add();
    }
}
```

## 文件系统路径获得配置文件

```java
import cn.hutool.core.io.resource.ClassPathResource;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;
import java.util.function.Function;
/**
 * 测试类
 * @author: yinaicheng
 */
public class Test {

    /**
     * 获取资源绝对路径
     */
    Function<String,String> GET_RESOURCE_PATH=(resourceName)->{
        ClassPathResource resource = new ClassPathResource(resourceName);
        return resource.getAbsolutePath();
    };

    @org.junit.Test
    public void test(){
        /*文件系统路径获得配置文件，idea自动加\\转义*/
        ApplicationContext context=new FileSystemXmlApplicationContext(GET_RESOURCE_PATH.apply("beans.xml"));
        /*从Spring容器获取UserService对象，通过bean的id对象获取*/
        UserService userService=(UserService)context.getBean("userService");
        userService.add();
    }
}
```

## 使用BeanFactory

```java
import cn.hutool.core.io.resource.ClassPathResource;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.FileSystemResource;
import java.util.function.Function;
/**
 * 测试类
 * @author: yinaicheng
 */
public class Test {

    /**
     * 获取资源绝对路径
     */
    Function<String,String> GET_RESOURCE_PATH=(resourceName)->{
        ClassPathResource resource = new ClassPathResource(resourceName);
        return resource.getAbsolutePath();
    };

    @org.junit.Test
    public void test(){
        /*使用BeanFactory*/
        BeanFactory factory =new XmlBeanFactory(new FileSystemResource(GET_RESOURCE_PATH.apply("beans.xml")));
        /*从Spring容器获取UserService对象，通过bean的id对象获取*/
        UserService userService=(UserService)factory.getBean("userService");
        userService.add();
    }
}
```

其中，类路径获得配置文件的方式最常用

## Spring内部创建对象的原理

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!-- 配置一个bean对象-->
    <bean id="userService" class="top.yinaicheng.demo.UserServiceImpl">
        <!--依赖注入数据，调用属性的set方法-->
        <property name="name" value="印爱成"/>
    </bean>
</beans>
```

1. 解析XML文件，获取类名、id、属性。

2. 通过反射，用类名创建对象。

3. 给创建的对象赋值。

## BeanFactory和ApplicationContext对比

* BeanFactory采用延迟加载，第一次getBean时才会初始化Bean，而对于ApplicationContext容器，当容器启动结束后，便实例化所有的bean。

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

执行BeanFactory测试
```java
import cn.hutool.core.io.resource.ClassPathResource;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.FileSystemResource;
import java.util.function.Function;
/**
 * 测试类
 * @author: yinaicheng
 */
public class Test {

    /**
     * 获取资源绝对路径
     */
    Function<String,String> GET_RESOURCE_PATH=(resourceName)->{
        ClassPathResource resource = new ClassPathResource(resourceName);
        return resource.getAbsolutePath();
    };

    @org.junit.Test
    public void test(){
        /*使用BeanFactory*/
        BeanFactory factory =new XmlBeanFactory(new FileSystemResource(GET_RESOURCE_PATH.apply("beans.xml")));
        System.out.println("---------------------------------------------");
        /*从Spring容器获取UserService对象，通过bean的id对象获取*/
        UserService userService=(UserService)factory.getBean("userService");
        userService.add();
    }
}
```

运行结果
```log
[main] DEBUG org.springframework.beans.factory.xml.XmlBeanDefinitionReader - Loaded 1 bean definitions from file [F:\code\my\self_data_governance\data_governance_server\target\classes\beans.xml]
---------------------------------------------
[main] DEBUG org.springframework.beans.factory.xml.XmlBeanFactory - Creating shared instance of singleton bean 'userService'
构造方法调用了
注入数据：印爱成
添加用户
```

执行ApplicationContext测试
```java
import cn.hutool.core.io.resource.ClassPathResource;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;
import java.util.function.Function;
/**
 * 测试类
 * @author: yinaicheng
 */
public class Test {

    /**
     * 获取资源绝对路径
     */
    Function<String,String> GET_RESOURCE_PATH=(resourceName)->{
        ClassPathResource resource = new ClassPathResource(resourceName);
        return resource.getAbsolutePath();
    };

    @org.junit.Test
    public void test(){
        /*使用BeanFactory*/
        ApplicationContext context =new FileSystemXmlApplicationContext(GET_RESOURCE_PATH.apply("beans.xml"));
        System.out.println("---------------------------------------------");
        /*从Spring容器获取UserService对象，通过bean的id对象获取*/
        UserService userService=(UserService)context.getBean("userService");
        userService.add();
    }
}
```

```log
[main] DEBUG org.springframework.context.support.FileSystemXmlApplicationContext - Refreshing org.springframework.context.support.FileSystemXmlApplicationContext@1f36e637
[main] DEBUG org.springframework.beans.factory.xml.XmlBeanDefinitionReader - Loaded 1 bean definitions from file [F:\code\my\self_data_governance\data_governance_server\target\classes\beans.xml]
[main] DEBUG org.springframework.beans.factory.support.DefaultListableBeanFactory - Creating shared instance of singleton bean 'userService'
构造方法调用了
注入数据：印爱成
---------------------------------------------
添加用户
```

* ApplicationContext是对BeanFactory扩展，提供更多功能：
    * 国际化处理
    * 事件传递
    * Bean自动装配
    * 各种不同应用层的Context实现

































