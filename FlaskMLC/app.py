from flask import Flask, render_template
import requests, urllib.request, json, random, time
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def index():
    rest = [ 5, 10, 15 ]
    status = [ 1, 2, 3 ]
    orderId = getLastOrder()
    goodUnits = 0
    scrap = 0
    while True:
        orderId += 1
        datetimer = datetime.now()
        datetime_formatted = datetimer.strftime("%Y-%m-%d %H:%M:%S")
        randQuantity = random.randint(250,500)
        
        postInsertOrder(datetime_formatted, randQuantity, goodUnits, scrap, status[0])

        while not getQuantityOrderById(orderId) == (goodUnits + scrap):
            situation = random.randint(1,10)
            match situation:
                case 1:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[1])
                    #print('Good')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 2:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[1])
                    #print('Bad')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 3:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[2])
                    #print('Good')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 4:
                    scrap += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[2])
                    #print('Bad')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 5:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[1])
                    #print('Good')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 6:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[1])
                    #print('Bad')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 7:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[2])
                    #print('Good')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 8:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[2])
                    #print('Bad')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 9:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[1])
                    #print('Good')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 10:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[1])
                    #print('Bad')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 11:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[2])
                    #print('Good')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 12:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[2])
                    #print('Bad')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 13:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[1])
                    #print('Bad')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 14:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[2])
                    #print('Good')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case 15:
                    goodUnits += 1
                    postUpdateOrder(goodUnits, scrap, status[1], orderId)
                    time.sleep(rest[2])
                    #print('Bad')
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))
                case _:
                    #print('Nothing')
                    time.sleep(rest[0])
                    print("Good Pieces =" + str(goodUnits) + ", Scrap = " + str(scrap))

        postUpdateOrder(goodUnits, scrap, status[2], orderId)
        print("stop")
        time.sleep(rest[2])
        goodUnits = 0
        scrap = 0
        
    #return "<H1>Simulator Running"
    #return render_template('index.html', movies=dict["data"])

def getQuantityOrderById(orderId):
    url = "http://127.0.0.1:8000/api/order/" + str(orderId)
    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)
    dict = dict[0]
    dict = dict['quantity']
    print(dict)
    return dict

def getLastOrder():
    url = "http://127.0.0.1:8000/api/order"
    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)
    dict = len(dict)
    print(dict)
    return dict

def postInsertOrder(initialDate, quantity, goodUnits, scrap, status):
    res = requests.post('http://127.0.0.1:8000/api/InsertOrder', 
    json={"initialDate": initialDate, "quantity": quantity, 
    "goodUnits": goodUnits, "scrap": scrap, "status": status})
    if res.ok:
        print(res.json())
    return "<div>End"

def postUpdateOrder(goodUnits, scrap, status, orderId):
    res = requests.post('http://127.0.0.1:8000/api/UpdateOrder/' + str(orderId), 
    json={"goodUnits": goodUnits, "scrap": scrap, "status": status, "orderId" : orderId})
    if res.ok:
        print(res.json())
    return "<div>End"

if __name__ == "__main__":
    app.run(debug=True)
