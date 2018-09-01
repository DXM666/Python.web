import urllib.request as req
import urllib
import re


def open_url(url):
    user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'

    # 设置代理 IP，http 不行，使用 https
    proxy = req.ProxyHandler({'https': 's1firewall:8080'})

    auth = req.HTTPBasicAuthHandler()
    # 构造 opener
    opener = req.build_opener(proxy, auth, req.HTTPHandler)
    # 添加 header
    opener.addheaders = [('User-Agent', user_agent),('Accept-Encoding','gzip'),('Authorization','Bearer 12341234123412341234123412341234')]
    # 安装 opener
    req.install_opener(opener)

    postdata = urllib.parse.urlencode({'amount': 3, 'currency': 'USD', 'vendor': 'wechatpay','reference':'84238473247832874238','ipn_url':'http://52.87.248.227/ipn.php','callback_url':'http://dev.citcon-inc.com','allow_duplicate':'yes'}).encode("utf-8")
    # 打开链接
    conn = req.urlopen(url,postdata)
    # 以 utf-8 编码获取网页内容
    content = conn.read().decode('utf-8')
    return content


def save(text):
    for each in text:
        if '<br />' in each:
            new_each = re.sub(r'<br />','\n',each)
            print(new_each)

if __name__ == "__main__":
    url = "https://dev.citconpay.com/payment/pay"
    html = open_url(url)
    print(html)
    # result = re.findall(r'<div id="content">(.*?)</div>',html,re.S)
    # save(result)