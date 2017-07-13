from flask import Flask
#导入模块
from flask import render_template

from flask import redirect
from flask import url_for
#用request从前台拿到数据
from flask import request

app=Flask(__name__)

@app.route('/')
def index():
	#返回渲染后的结果
	return redirect(url_for('add'))

@app.route('/add',methods=['GET','POST'])
def add():
	if request.method =="POST":
		#获取表单中的数据
		a=request.form['adder1']
		b=request.form['adder2']
		a=int(a)
		b=int(b)
		sum=a+b
		#{{}}在html中表示从后台取得的数据
		return render_template('index.html',adder1=str(a),adder2=str(b),message=str(sum))
	return render_template('index.html')

if __name__=='__main__':
	app.run()