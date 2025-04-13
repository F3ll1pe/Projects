from flask import Flask, jsonify, request
from operacoes import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/operacao", methods=['GET'])
def get_operacoes():
    operacoes = obterOperacoes()
    return jsonify(operacoes)

@app.route("/operacao/<string:username>", methods=['GET'])
def get_operacoes_usuario(username):
    operacoes = obterOperacoesUsuario(username)
    return jsonify(operacoes)

@app.route("/operacao", methods=['POST'])
def post_operacoes():
    operacao = request.json
    linhas_afetadas = insereOperacao(operacao)
    if(linhas_afetadas > 0):
        return jsonify({'message': 'Operação inserida!'}), 201
    else:
        return jsonify({'message': 'Operacao não inserida!'}), 201


app.run()