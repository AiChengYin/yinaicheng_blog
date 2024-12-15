# lombok

## @SneakyThrows

@SneakyThrows 是 Lombok 注解之一，它可以将 checked exceptions 转换为 unchecked exceptions，从而使代码变得更加简洁。  
要使用 @SneakyThrows，只需在可能抛出 checked exceptions 的方法上添加此注解即可。例如：
```java
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import java.nio.file.Files;
import java.nio.file.Path;
@Slf4j
public class Temp {

    public static void main(String[] args) {
        try{
            new Temp().getContent(null);
        }
        catch (Exception e){
            log.error("error");
        }
    }

    @SneakyThrows
    private String getContent(Path targetFile) {
        byte[] content = Files.readAllBytes(targetFile);//compile error: "Unhandled IOException"
        return new String(content);
    }
}

```

在上面的示例中，如果 myMethod() 方法中的代码抛出了 checked exceptions，那么 @SneakyThrows 注解会将其转换为 unchecked exceptions，从而避免了在方法中显式地处理 checked exceptions 的需要。请注意，使用 @SneakyThrows 会使代码更加简洁，但也可能会隐藏潜在的异常。
需要注意的是，@SneakyThrows 注解只能用于方法上，不能用于字段或构造函数上。此外，如果方法本身已经声明了 unchecked exceptions（如 RuntimeException 或其子类），则不需要使用 @SneakyThrows 注解。
