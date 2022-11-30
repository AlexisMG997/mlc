# How to install Simulator?

Follow these command inside the proyect. You must use command prompt, not Powershell

> mkdir FlaskMLC

> cd FlaskMLC

> py -3 -m mlc mlc

## Activate environment *

> mlc\Scripts\activate

Or using this sequence:

> cd mlc

> cd Scripts

> activate

## And finally, execute this command

> pip install Flask

# Run proyect?

## create app.py in root ( /flaskMLC )

In app.py, paste this code (or download app.py and paste it):

from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
   
#Where app.py resides, execute:

flask run

# P.S: you must repeat the step with * in it everytime you need to run the simulator
