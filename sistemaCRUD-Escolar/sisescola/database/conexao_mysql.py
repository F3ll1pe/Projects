import mysql.connector

def criaConexaoMySQL(host, user, password, database):
    conexao = None
    try:
        conexao = mysql.connector.connect(
            host = host,
            user = user,
            password = password,
            database = database
        )
        print("Conexão com o banco de dados realizada com sucesso!")
    except Exception as erro:
        print("Ocorreu algum erro na conexao")
    return conexao

def fechaConexaoMySQL(conexao):
    try:
        conexao.close()
        print("Conexão com o banco de dados encerrada com sucesso!")
    except Exception as erro:
        print("Ocorreu algum erro ao encerrar a conexão com o banco de dados")