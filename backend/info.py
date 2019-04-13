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
TOKEN_WHOIS_RESERVE = 'at_A7teft1bgqgi0siL8X5afgRLcxWCg'
URL_WHOIS = 'https://www.whoisxmlapi.com/whoisserver/WhoisService'


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
        'https://www.whoisxmlapi.com/accountServices.php?servicetype=accountbalance&apiKey=%s&output_format=JSON' % TOKEN_WHOIS)
    balance = response_balance.json()
    if balance['balance'] > 0:
        r = requests.get(
            '%s?apiKey=%s&domainName=%s&outputFormat=JSON' % (URL_WHOIS, TOKEN_WHOIS, ip)).json()
    else:
        r = requests.get(
            '%s?apiKey=%s&domainName=%s&outputFormat=JSON' % (URL_WHOIS, TOKEN_WHOIS_RESERVE, ip)).json()
    important_fields = ['createdDate','updatedDate','registrant','administrativeContact','domainName','registrarName','registrarIANAID']
    fields_for_delete = []
    for i in r['WhoisRecord']:
        if not (i in important_fields):
            fields_for_delete.append(i)
    for i in fields_for_delete:
        r['WhoisRecord'].pop(i,None)

    return json.dumps(r['WhoisRecord'], ensure_ascii=False)


def geolocation(ip='8.8.8.8'):
    '''
    Makes a request to the ipinfo.io with token of _author_
    API of ipinfo.io return gelocation data

    :param ip: IP-address 
    :type ip: string

    :return: data of geolocation IP
    :rtype: dict
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
