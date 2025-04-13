from database import *
from datetime import date

mysql_db.connect()

# 1) Inserção de algumas operações;
operacao = Operacao()
operacao.datahora = date.today()
operacao.periodo = 'semanalmente'
operacao.categoria = 'treta'
operacao.tipo = 'receita'
operacao.valor = 1000
operacao.usuario = "tkautzmann"
linhas_modificadas = operacao.save()

if(linhas_modificadas > 0):
    print('Operação inserida com susususucesso!')
else:
    print("Operação mal sucedida, meu jovem padawan!")

