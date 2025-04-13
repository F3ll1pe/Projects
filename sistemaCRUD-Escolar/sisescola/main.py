from database.conexao_mysql import criaConexaoMySQL
from database.conexao_mysql import fechaConexaoMySQL
from database.operacoes_pessoa import inserePessoa
from database.operacoes_pessoa import excluiPessoa
from database.operacoes_pessoa import atualizaPessoa
from database.operacoes_pessoa import selecionaTodasAsPessoas
from database.operacoes_pessoa import selecionaPessoaPorId
from database.operacoes_pessoa import selecionaPessoaPorNome
from database.operacoes_professor import insereProfessor
from database.operacoes_professor import excluiProfessor
from database.operacoes_professor import atualizaProfessor
from database.operacoes_professor import selecionaTodasOsProfessores

print()
print("*******************************")
print("SISTEMA DE CADASTRO DE PESSOAS")
print("*******************************")
print()
print(" / \\__")
print("(    @\\_______")
print(" /              O")
print("/        (_____/")
print("/_____/  U")
print()

conexao = criaConexaoMySQL("localhost", "root", "", "ifsul")

while True:
    
    print()
    print("MENU PESSOAS")
    print("1. Inserir pessoa")
    print("2. Atualizar pessoa")
    print("3. Deletar pessoa")
    print("4. Listar todas as pessoas")
    print("5. Listar pessoas por id")
    print("6. Listar pessoas por nome")
    print()
    print("********************************")
    print()
    print("MENU PROFESSORES")
    print("7. Inserir professor")
    print("8. Atualizar professor")
    print("9. Deletar professor")
    print("10. Listar todos os professores")
    print("11. Sair")
    
    escolha = int(input("Entre com sua opção: "))
    
    if escolha == 1:
        print()
        print("INSERINDO UMA NOVA PESSOA")
        print()
        id = int(input("Id: "))
        nome = input("Nome: ")
        nascimento = input("Data de nascimento (yyyy-mm-dd): ")
        novaPessoa = {
            "id": id,
            "nome": nome,
            "nascimento": nascimento
        }
        inserePessoa(conexao, novaPessoa)
    elif escolha == 2:
        print()
        print("ATUALIZANDO UMA PESSOA")
        print()
        id = int(input("Id da pessoa que deseja atualizar: "))
        nome = input("Novo nome: ")
        nascimento = input("Nova data de nascimento (yyyy-mm-dd): ")
        pessoaAtualizada = {
            "id": id,
            "nome": nome,
            "nascimento": nascimento
        }
        atualizaPessoa(conexao, pessoaAtualizada)
    elif escolha == 3:
        print()
        print("EXCLUIR UMA PESSOA")
        print()
        id = int(input("Id da pessoa que deseja apagar: "))
        excluiPessoa(conexao, id)
    elif escolha == 4:
        print()
        print("LISTANDO TODAS AS PESSOAS")
        print()
        pessoas = selecionaTodasAsPessoas(conexao)
        for pessoa in pessoas:
            print("*******************************")
            print("Id: " + str(pessoa["id"]))
            print("Nome: " + pessoa["nome"])
            print("Data de nascimento: " + str(pessoa["nascimento"]))
    elif escolha == 5:
        print()
        print("LISTANDO PESSOA POR ID")
        print()
        id =int(input("Informe o ID da pessoa: "))
        selecionaPessoaPorId(conexao, id)
        if(pessoa == None):
            print("Pessoa não encontrada")
    elif escolha == 6:
        print()
        print("LISTANDO PESSOA POR Nome")
        print()
        nome =input("Informe o Nome da pessoa: ")
        selecionaPessoaPorNome(conexao, nome)
        if(nome == None):
            print("Pessoa não encontrada")
        else:
            print("*******************************")
            print("Id: " + str(pessoa["id"]))
            print("Nome: " + pessoa["nome"])
            print("Data de nascimento: " + str(pessoa["nascimento"]))
    elif escolha == 11:
        fechaConexaoMySQL(conexao)
        break

    if escolha == 7:
        print()
        print("INSERINDO UM NOVO PROFESSOR")
        print()
        id = int(input("Id: "))
        nome = input("Nome: ")
        nascimento = input("Data de nascimento (yyyy-mm-dd): ")
        especialidade = input("Especialidade: ")
        campus = input("Campus: ")
        novoProfessor = {
            "id": id,
            "nome": nome,
            "nascimento": nascimento,
            "especialidade": especialidade,
            "campus": campus
        }
        insereProfessor(conexao, novoProfessor)
    elif escolha == 8:
        print()
        print("ATUALIZANDO UM PROFESSOR")
        print()
        id = int(input("Id do professor que deseja atualizar: "))
        nome = input("Novo nome: ")
        nascimento = input("Nova data de nascimento (yyyy-mm-dd): ")
        especialidade = input("Especialidade: ")
        campus = input("Campus: ")
        professorAtualizado = {
            "id": id,
            "nome": nome,
            "nascimento": nascimento,
            "especidade": especialidade,
            "campus": campus
        }
        atualizaProfessor(conexao, professorAtualizado)
    elif escolha == 9:
        print()
        print("EXCLUIR UMA PESSOA")
        print()
        id = int(input("Id da pessoa que deseja apagar: "))
        excluiProfessor(conexao, id)
    elif escolha == 10:
        print()
        print("LISTANDO TODAS AS PESSOAS")
        print()
        professor = selecionaTodasOsProfessores(conexao)
        for professor in professor:
            print("*******************************")
            print("Id: " + str(professor["id"]))
            print("Nome: " + professor["nome"])
            print("Data de nascimento: " + str(professor["nascimento"]))

print()
print("Fechando o programa!")
print("Bye!")
print()