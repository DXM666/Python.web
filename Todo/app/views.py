# from app import app
from flask import render_template,request, jsonify,Flask
# from app.models import Todo
from datetime import datetime


class Todo():
    time = datetime.now()
    def todo_json(self):
        return [
            {
                'id': 1,
                'content': 'study python',
                'time': self.time,
                'status': 0
            },
            {
                'id': 2,
                'content': 'study react',
                'time': self.time,
                'status': 1
            },
            {
                'id': 3,
                'content': 'study react',
                'time': self.time,
                'status': 1
            }
        ]

app = Flask(__name__)

todo = Todo().todo_json()

@app.route('/')
def index():
    return render_template("index.html")


# add delete update list

@app.route('/add', methods=['POST',])
def add():
    form = request.form
    content = form.get('content')
    todo.append({ 'id': 4,
                'content': content,
                'time': datetime.now(),
                'status': 0})
    # todo.save()
    print(content)
    print(todo)
    return jsonify(status="success",todos=todo)


@app.route('/delete/<string:todo_id>')
def delete(todo_id):
    for i in todo:
        if i['id'] == int(todo_id):
            todo.pop(todo.index(i))
    return jsonify(status="success",todos=todo)


@app.route('/update', methods=['POST',])
def update():
    form = request.form
    todo_id = form.get('id')
    status = form.get('status')
    for i in todo:
        if i['id'] == int(todo_id):
            i['status'] = int(status) | 1
    return jsonify(status="success", todos=todo)

@app.route('/list')
def list():
    return jsonify(status="success", todos=todo)


if __name__ == '__main__':
    app.run(port=5400)