from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()
    item_id = data.get("item_id")
    return jsonify({
        "status": "success",
        "item_id_received": item_id
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
