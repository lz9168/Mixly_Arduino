import ujson as json
from simple import *

def get_data_dict(d):
    result = {"datastreams":[]}
    for x in d:
        result["datastreams"].append({"id":x,"datapoints":[{"value":d[x]}]})
    return result

def pubData(value):    
    value = get_data_dict(value)
    print(value)
    jdata = json.dumps(value)
    jlen = len(jdata)
    bdata = bytearray(jlen+3)
    bdata[0] = 1 # publish data in type of json
    bdata[1] = int(jlen / 256) # data lenght
    bdata[2] = jlen % 256      # data lenght
    bdata[3:jlen+4] = jdata.encode('ascii') # json data
    print(bdata)
    return bdata

def do_connect(id,password):
    import network
    sta_if = network.WLAN(network.STA_IF)
    ap_if = network.WLAN(network.AP_IF)
    if ap_if.active():
        ap_if.active(False)
    if not sta_if.isconnected():
        print('connecting to network...')
    sta_if.active(True)
    sta_if.connect(id, password)
    while not sta_if.isconnected():
        pass
    print('network config:', sta_if.ifconfig())

def init_MQTT_client(sid, address, cid, api, topic, callback):
    client = MQTTClient(sid, address, 6002, cid, api)
    client.set_callback(callback)
    client.connect()
    client.subscribe(bytes(topic, 'utf-8'))
    return client