import sys
import os
import signal
import subprocess
import requests
import json

_author_ = "ochaplashkin"

DECODE_FORMAT = 'UTF-8'
'''
Data for IPINFO.io service
'''
TOKEN_IPINFO = 'e08caa925c89e5'
URL_IPINFO   = 'https://ipinfo.io/'

'''
Data for whois service
'''
TOKEN_WHOIS = 'at_6lVSjRTxwIHYVADBAnW8dT03Yvana'
URL_WHOIS   = 'https://www.whoisxmlapi.com/whoisserver/WhoisService'

# https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_6lVSjRTxwIHYVADBAnW8dT03Yvana&domainName=google.com


def whois(ip='8.8.8.8'):
    '''
    Makes a request to the whoisapi.whoisxmlapi.com/docs with token of _author_
    API of service return full whois data
    and then parse response

    :param ip: IP-address
    :type ip: string

    :return: default python dict
    :rtype: dict of strings
    '''
    response_balance = requests.get(
        'https://www.whoisxmlapi.com/accountServices.php?servicetype=accountbalance&apiKey=at_6lVSjRTxwIHYVADBAnW8dT03Yvana&output_format=JSON')
    balance = response_balance.json()
    if balance['balance'] > 0:
        response = requests.get(
            '%s?apiKey=%s&domainName=%s&outputFormat=JSON' % (URL_WHOIS, TOKEN_WHOIS, ip))
        r = response.json()
        return json.dumps(r['WhoisRecord'], ensure_ascii=False)
    else:
        return json.dumps('balance=0', ensure_ascii=False)


def geolocation(ip='8.8.8.8'):
    '''
Makes a request to the ipinfo.io with token of _author_
API of ipinfo.io return gelocation data

:param ip: IP-address 
:type ip: string

:return: data of geolocation IP
:rtype: dict
    "latitude": 41.01,
    "accuracy_radius": 100,
    "metro_code": null,
    "longitude": 17.0056,
'''
    response = requests.get('%s%s?token=%s' % (URL_IPINFO, ip, TOKEN_IPINFO))
    r = response.json()
    geo = r['loc'].split(',')
    r['loc'] = {}
    r['loc']['latitude']  = geo[0]
    r['loc']['longitude'] = geo[1]
    return json.dumps(r, ensure_ascii=False)


def full(ip='8.8.8.8'):
    '''
Collects full information about the ip

:param ip: IP-address 
:type ip: string

:return: data about IP(whois + geo)
:rtype: dict
'''
    res = {}
    res['whois'] = whois(ip)
    res['geo']   = geolocation(ip)
    return json.dumps(res, ensure_ascii=False)


def main():
    print('module has been started')

if __name__ == "__main__":
    main()
