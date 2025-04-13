from database import *

mysql_db.connect()

def obterOperacoes():
    resultado = Operacao.select().dicts()
    operacoes = list(resultado)
    return operacoes

def obterOperacoesUsuario(username):
    resultado = Operacao.select().where(Operacao.usuario == username).dicts()
    operacoes = list(resultado)
    return operacoes

def insereOperacao(operacao):
    op = Operacao()
    op.valor = operacao['valor']
    op.datahora = operacao['datahora']
    op.periodo = operacao['periodo']
    op.tipo = operacao['tipo']
    op.categoria = operacao['categoria']
    op.usuario = operacao['usuario']
    linhas_afetadas = op.save()
    return linhas_afetadas