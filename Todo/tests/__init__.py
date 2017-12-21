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
                'status': 0
            }
        ]
todo = Todo().todo_json()
todo.append({ 'id': 2,
                                        'content': 'DXM',
                                        'time': datetime.now(),
                                        'status': 0})
print(todo)