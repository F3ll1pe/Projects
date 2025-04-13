from peewee import *

mysql_db = MySQLDatabase('dindinteens', user='root', password='', host='localhost', port=3306)

class BaseModel(Model):
    class Meta:
        database = mysql_db

class Operacao(BaseModel):
    periodo = CharField()
    tipo = TextField()
    datahora = DateField()
    categoria = CharField()
    usuario = CharField()
    valor = FloatField()

    class Meta:
        table_name = 'operacoes'
        database = mysql_db
