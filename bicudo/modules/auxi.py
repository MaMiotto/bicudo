from gluon import current
#from gluon.dal import DAL, Field


from classes.usuario import Usuario
from classes.endereco import Endereco
from classes.servico import Servico

STATUS = {
    1:"Solicitacao",
    2:"Agendamento",
    3:"Confirmado",
    4:"Finalizado",
    5:"Recusado"
}

GENERO = {
    1:"Masculino",
    2:"Feminino",
    3:"Prefiro não responder",
    4:"Outros"
}

ESTADO = {
    1:"Acre (AC)",
    2:"Alagoas (AL)",
    3:"Amapá (AP)",
    4:"Amazonas (AM)",
    5:"Bahia (BA)",
    6:"Ceará (CE)",
    7:"Distrito Federal (DF)",
    8:"Espírito Santo (ES)",
    9:"Goiás (GO)",
    10:"Maranhão (MA)",
    11:"Mato Grosso (MT)",
    12:"Mato Grosso do Sul (MS)",
    13:"Minas Gerais (MG)",
    14:"Pará (PA)",
    15:"Paraíba (PB)",
    16:"Paraná (PR)",
    17:"Pernambuco (PE)",
    18:"Piauí (PI)",
    19:"Rio de Janeiro (RJ)",
    20:"Rio Grande do Norte (RN)",
    21:"Rio Grande do Sul (RS)",
    22:"Rondônia (RO)",
    23:"Roraima (RR)",
    24:"Santa Catarina (SC)",
    25:"São Paulo (SP)",
    26:"Sergipe (SE)",
    27:"Tocantins (TO)"
}

SERVICO={
    1:"Pintura",
    2:"Manutenção",
    3:"Reparos",
    4:"Elétrica"
    }

def dados_usuario(usuario_id=None):
    if not (usuario_id):
        usuario_id=current.auth.user.id
    db = current.db
    usuario_db = db.auth_user(usuario_id)
    
    endereco=Endereco(usuario_db['logradouro'],usuario_db['numero'], usuario_db['complemento'], usuario_db['bairro'], usuario_db['cidade'], ESTADO[usuario_db['estado']], usuario_db['cep'])
    
    usuario = Usuario(usuario_db['id'], usuario_db['first_name'], usuario_db['last_name'], usuario_db['cpf'], usuario_db['data_nascimento'], GENERO[usuario_db['genero']], usuario_db['telefone'], usuario_db['email'], endereco)
    
    return (usuario)

def dados_servico(usuario=None):
    db = current.db
    if not (usuario):
        usuario_id=current.auth.user.id
        usuario = dados_usuario(usuario_id)
    serv=""
    servico_db = db(db.servico.prestador == id_usuario).select().first()
    SERV={}
    if (servico_db):
        for ts in db().select(db.tipo_servico.ALL, orderby=db.tipo_servico.id):
            SERV[ts.id]=ts.nome
        for s in servico_db['tipos']:
            serv+=SERV[s]+", "
        servico=Servico(usuario, serv, servico_db['descricao'])
        return (servico)
    else:
        return(None)
    
def dados_todos_servicos():
    db = current.db
    servicos=db(db.servicos).select()
    todo_servicos=[]
    for servico in servicos:
        id_usuario = servico.prestador
        usuario=dados_usuario(id_usuario)
        servico=dados_servico(usuario)
        todo_servico·append(servico)

'''def dados_usuario(usuario_db):
    endereco=Endereco(usuario_db['logradouro'],usuario_db['numero'], usuario_db['complemento'], usuario_db['bairro'], usuario_db['cidade'], ESTADO[usuario_db['estado']], usuario_db['cep'])
    
    usuario = Usuario(usuario_db['id'], usuario_db['first_name'], usuario_db['last_name'], usuario_db['cpf'], usuario_db['data_nascimento'], GENERO[usuario_db['genero']], usuario_db['telefone'], usuario_db['email'], endereco)
    
    return (usuario)
    
    
    <Row {'id': 1, 'auth_membership': <Set ("auth_membership"."user_id" = 1)>, 'auth_event': <Set ("auth_event"."user_id" = 1)>, 'auth_cas': <Set ("auth_cas"."user_id" = 1)>, 'servico': <Set ("servico"."prestador" = 1)>, 'solicitacao': <Set ("solicitacao"."cliente" = 1)>, 'first_name': 'Administrador', 'last_name': 'do Sistema', 'email': 'admin@x.com', 'password': 'pbkdf2(1000,20,sha512)$9768611b443a5cfc$f1b00d8fef310776d141cabc8bb9595d65e2cd6b', 'registration_key': '', 'reset_password_key': '', 'registration_id': '', 'cpf': '999.999.999-99', 'data_nascimento': datetime.date(2021, 5, 28), 'genero': 4, 'telefone': '(99)99999-9999', 'logradouro': 'R.', 'numero': '0', 'complemento': '-', 'bairro': 'B.', 'cidade': 'C', 'estado': 1, 'cep': '00000-00'}>
    
def dados_servico(usuario,servico_db):
    serv=""
    #db = DAL("sqlite://mydb.sqlite")
    db = current.db
    SERV={}
    for ts in db().select(db.tipo_servico.ALL, orderby=db.tipo_servico.id):
        SERV[ts.id]=ts.nome
    for s in servico_db['tipos']:
        #serv+=SERVICO[s]+", "
        serv+=SERV[s]+", "
    servico=Servico(usuario, serv, servico_db['descricao'])
    return (servico)'''