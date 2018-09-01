# -*- coding:utf-8 -*-
from urllib import request, parse
import ssl

def open_url(url):
    ssl._create_default_https_context = ssl._create_unverified_context
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
        'Authorization': 'Bearer 12341234123412341234123412341234'
    }
    dict = {
        'amount': 3,
        'currency': 'USD',
        'vendor': 'wechatpay',
        'reference':'84238473247832874238',
        'ipn_url':'http://52.87.248.227/ipn.php',
        'callback_url':'http://dev.citcon-inc.com',
        'allow_duplicate':'yes'
    }
    data = bytes(parse.urlencode(dict), encoding='utf8')
    req = request.Request(url=url, data=data, headers=headers)
    response = request.urlopen(req)
    html = response.read().decode('utf-8')
    return html

if __name__ == '__main__':
    url = 'https://dev.citconpay.com/payment/pay'
    html = open_url(url)
    print(html)
