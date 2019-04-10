import sys
import os
import signal
import subprocess
import requests
import json

_author_ = "ochaplashkin"

DECODE_FORMAT = 'UTF-8'
TOKEN         = 'e08caa925c89e5' #for ipinfo
URL           = 'https://ipinfo.io/'


def _get_data_from(command):
    '''
    Starts a subprocess with a command, reads data from standard output
    and closes the process

    :param command: IP-address or URL-address
    :type command: list = [command, argument]

    :return: data of command from standart output
    :rtype: list of strings

    '''
    p = subprocess.Popen(command, stdout=subprocess.PIPE)
    out = p.stdout.readlines()
    try:
        os.killpg(os.getpgid(p.pid), signal.SIGTERM)
    except ProcessLookupError:
        pass
    return out


def whois(ip='8.8.8.8'):
    '''
    Executes the command 'whois' and analyzes the data

    :param ip: IP-address
    :type ip: string

    :return: default python dict
    :rtype: dict of strings
    '''

    console_info = _get_data_from(['whois', ip])

    result = {}
    for info in console_info:
        _str = info.decode(DECODE_FORMAT).split(':')
        _key = _str[0]

        if '%' in _key or '>' in _key or ' ' in _key:  # delete specific keys
            continue
        if len(_str) < 2:  # delete string as "\n"
            continue

        _value = _str[0:]  #TODO:
        result[_key] = _value[1].strip()  # TODO:fix!!!
    del result['whois']
    del result['refer']
    return result


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
	response = requests.get('%s%s?token=%s' % (URL,ip, TOKEN))
	r = response.json()
	geo = r['loc'].split(',')
	r['loc'] = {}
	r['loc']['latitude'] = geo[0]
	r['loc']['longitude'] = geo[1]
	return r

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
	return res

def main():
	print('module has been started')

if __name__ == "__main__":
    main()
