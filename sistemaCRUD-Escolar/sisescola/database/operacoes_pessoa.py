def inserePessoa(conexao, pessoa):
    cursor = conexao.cursor()
    sql = "INSERT INTO pessoa (id, nome, nascimento) "
    sql += "VALUES (%s, %s, %s)"
    cursor.execute(sql, [pessoa["id"], pessoa["nome"], pessoa["nascimento"]])
    conexao.commit()
    print()    
    print("Pessoa inserida com sucesso!")
    print()

def excluiPessoa(conexao, id):
    cursor = conexao.cursor()
    sql = "DELETE FROM pessoa WHERE id = %s"
    cursor.execute(sql, [id])
    conexao.commit()
    print()
    print("Pessoa excluída com sucesso!")
    print()

def atualizaPessoa(conexao, pessoa):
    cursor = conexao.cursor()
    sql = "UPDATE pessoa SET nome = %s, nascimento = %s WHERE id = %s"
    cursor.execute(sql, [pessoa["nome"], pessoa["nascimento"], pessoa["id"]])
    conexao.commit()
    print()
    print("Pessoa atualizada com sucesso!")
    print()

def selecionaTodasAsPessoas(conexao):
    cursor = conexao.cursor(dictionary=True)
    sql = "SELECT * FROM pessoa"
    cursor.execute(sql)
    pessoas = cursor.fetchall()
    return pessoas

def selecionaPessoaPorId(conexao, id):
    cursor = conexao.cursor(dictionary=True)
    sql = "SELECT * FROM pessoa WHERE id = %s"
    cursor.execute(sql, [id])
    pessoas = cursor.fetchall()
    if(len(pessoas) > 0):
        return pessoas[0]
    else:
        return None

def selecionaPessoaPorNome(conexao, nome):
    cursor = conexao.cursor(dictionary=True)
    sql = "SELECT * FROM pessoa WHERE nome LIKE '%{0}'"
    sql = sql.format[nome]
    cursor.execute(sql, [nome])
    pessoas = cursor.fetchall()
    return None