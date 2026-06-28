from flask import Flask, render_template

from scanner.hardware import get_system_info

app = Flask(__name__)


@app.route("/")
def home():

    info=get_system_info()

    return render_template(

        "index.html",

        info=info

    )


if __name__=="__main__":

    app.run(debug=True)
