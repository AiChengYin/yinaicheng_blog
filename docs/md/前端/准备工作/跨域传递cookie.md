# 解决跨域请求传递Cookie问题

通过设置Access-Control-Allow-Credentials = true和xhr.withCredentials = true，可以实现跨域传递Cookie，达到保存用户登录态等目的。这种方案虽好，但是如果使用不当，会有CSRF的风险。所以，从Chrome 51开始，浏览器的Cookie新增加了一个SameSite属性，用来防止CSRF攻击和用户追踪。

## 处理SameSite验证
谷歌浏览器新版本下，SameSite属性的默认值Lax只允许get请求携带Cookie，这显然没法满足，所以我们将SameSite属性的值改为None，同时将secure属性设置为true。这也意味着你的后端服务域名必须使用https协议访问。

在后端服务域名使用https协议的情况下，将SameSite属性值改为None，同时将secure属性设置为true。
```java
import eu.bitwalker.useragentutils.Browser;
import eu.bitwalker.useragentutils.UserAgent;
class Demo{
    /**
     * chrome80以及以上版本SameSite默认是变化
     * 对未设置“SameSite”的Cookie默认其值为Lax，即三方网站如果使用了该资源，在请求中是不会带上相关的Cookie的；
     * 对SameSite设置为None的Cookie，要求必须同时设置Secure，否则拒绝此Cookie
     * @param request
     * @param response
     */
    public static void cookie4Chrome80(HttpServletRequest request, HttpServletResponse response) {

        String userAgent = request.getHeader("User-Agent");
        logger.info("userAgent={}", userAgent);

        if (StringUtils.hasText(userAgent)) {
            boolean isChrome =  StringUtils.hasText(userAgent) && new UserAgent(userAgent).getBrowser().getGroup().equals(Browser.CHROME);
            if (UserAgent.parseUserAgentString(userAgent) == null
                    || UserAgent.parseUserAgentString(userAgent).getBrowserVersion() == null
                    || UserAgent.parseUserAgentString(userAgent).getBrowserVersion().getMajorVersion() == null) {
                logger.info("return because cannot get mainVersion");
                return;
            }
            Integer mainVersion = Integer.parseInt(UserAgent.parseUserAgentString(userAgent).getBrowserVersion().getMajorVersion());
            if (isChrome && mainVersion.compareTo(80) >= 0) {

                List<String> cookiesHeaders = (List<String>) response.getHeaders("Set-Cookie");
                boolean firstHeader = true;
                for (String cookie : cookiesHeaders) {
                    if (firstHeader) {
                        response.setHeader("Set-Cookie", String.format("%s; %s", cookie, "SameSite=None; Secure"));
                        firstHeader = false;
                        continue;
                    }
                    response.addHeader("Set-Cookie", String.format("%s; %s", cookie, "SameSite=None; Secure"));
                }
            }

        }
    }
}
```