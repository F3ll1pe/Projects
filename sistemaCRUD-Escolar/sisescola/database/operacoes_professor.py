def insereProfessor(conexao, professor):
    cursor = conexao.cursor()
    sql = "INSERT INTO professor (id, nome, nascimento, especialidade, campus) "
    sql += "VALUES (%s, %s, %s, %s, %s)"
    cursor.execute(sql, [professor["id"], professor["nome"], professor["nascimento"], professor["especialidade"], professor["campus"]])
    conexao.commit()
    print()    
    print("Pessoa inserida com sucesso!")
    print()

def excluiProfessor(conexao, id):
    cursor = conexao.cursor()
    sql = "DELETE FROM professor WHERE id = %s"
    cursor.execute(sql, [id])
    conexao.commit()
    print()
    print("Professor excluído com sucesso!")
    print()

def atualizaProfessor(conexao, professor):
    cursor = conexao.cursor()
    sql = "UPDATE professor SET nome = %s, nascimento = %s, especialidade = %s, campus = %s WHERE id = %s"
    cursor.execute(sql, [professor["nome"], professor["nascimento"], professor["id"], professor["especialidade"], professor["campus"]])
    conexao.commit()
    print()
    print("Pessoa atualizada com sucesso!")
    print()

def selecionaTodasOsProfessores(conexao):
    cursor = conexao.cursor(dictionary=True)
    sql = "SELECT * FROM professor"
    cursor.execute(sql)
    professor = cursor.fetchall()
    return professor