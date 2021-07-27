from gluon import current
#from gluon.dal import DAL, Field


#from classes.usuario import Usuario
#from classes.endereco import Endereco
#from classes.servico import Servico
#from classes.solicitacao import Solicitacao

from usuario import Usuario
from endereco import Endereco
from servico import Servico
from solicitacao import Solicitacao



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
    else:
        usuario_id=usuario.id_usuario
    serv=""
    servico_db = db(db.servico.prestador == usuario_id).select().first()
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
        servico_detalhe=dados_servico(usuario)
        todo_servico.append(servico_detalhe)
        
def objetos_solicitacao(solicitacao):
    cliente = dados_usuario(solicitacao['cliente'])
    prestador = dados_usuario(solicitacao['prestador'])
    #return Solicitacao(solicitacao.cliente,solicitacao.prestador,solicitacao.tipo,solicitacao.status,solicitacao.disponibilidade,solicitacao.agendamento)
    return Solicitacao(cliente,prestador,solicitacao['tipo'],solicitacao['status'],solicitacao['disponibilidade'],solicitacao['agendamento'])
        
def objetos_solicitacao_lista(usuario_id,usuario):
    db = current.db
    if usuario == "cliente":
        solicitacoes=db(db.solicitacao.cliente==usuario_id).select()
    elif usuario == "prestador":
        solicitacoes=db(db.solicitacao.prestador==usuario_id).select()
    toda_solicitacao=[]
    for solicitacao in solicitacoes:
        solicitacao_object=objetos_solicitacao(solicitacao)
        toda_solicitacao.append(solicitacao_object)
    return toda_solicitacao
        
def dados_solicitacao_cliente(usuario_id):
    objetos_solicitacao_cliente=objetos_solicitacao_lista(usuario_id,"cliente")
    dados_solicitacoes=[]
    for solicitacao in objetos_solicitacao_cliente:
        dados_solicitacoes.append(solicitacao.pega_dados_solicitacao())
    return dados_solicitacoes

def dados_solicitacao_prestador(usuario_id):
    objetos_solicitacao_prestador=objetos_solicitacao_lista(usuario_id,"prestador")
    dados_solicitacoes=[]
    for solicitacao in objetos_solicitacao_prestador:
        dados_solicitacoes.append(solicitacao.pega_dados_solicitacao())
    return dados_solicitacoes

def edita_solicitacao(servico_id,campo,valor):
    db = current.db
    if campo == "status":
        db(db.solicitacao.id==solicitacao_id).update(status=valor)
    elif campo == "disponibilidade":
        db(db.solicitacao.id==solicitacao_id).update(disponibilidade=valor)
    elif campo == "agendamento":
        db(db.solicitacao.id==solicitacao_id).update(agendamento=valor)

        
def seleciona_tipo_sevico(id_servico):
    db = current.db
    servicos=db(db.servico.tipos.contains(int(id_servico))).select()
    todo_servico_busca=[]
    
    SERV={}
    for ts in db().select(db.tipo_servico.ALL, orderby=db.tipo_servico.id):
        SERV[ts.id]=ts.nome
        
    for servico in servicos:
        usuario_obj = dados_usuario(int(servico['prestador']))
        serv=""
        
        for s in servico['tipos']:
            serv+=SERV[s]+", "
            
        servico_obj=Servico(usuario_obj, serv, servico['descricao'])
    
        todo_servico_busca.append(servico_obj)
        
    return (todo_servico_busca)

    #NO CONTROLLER:
    
    #Função que recebe o id do tipo e retorna array de array (par[usuario,servico])
    #def busca_servico(id_tipo):
        #busca=auxi.seleciona_tipo_sevico(id_tipo)
        #return(busca)

    #Obs.: O controler não retorna função que recebe parametro
    #Função que chama a busca e recebe objtos usuario e servico
    #def teste():
    #busca=busca_servico(3)
    #for item in busca:
        #usuario=item.prestador
        #print(usuario.pega_item_usuario()) #objeto usuario
        #print(item.pega_item_servico()) #objeto servico
    

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
