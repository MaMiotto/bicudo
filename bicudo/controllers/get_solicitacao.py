import auxi
#from classes.usuario import Usuario
#from classes.endereco import Endereco
#from classes.servico import Servico
from gluon import current
from usuario import Usuario
from endereco import Endereco
from servico import Servico
from solicitacao import Solicitacao
from datetime import date

def cors_origin():
    origin = request.env.http_origin
    headers = {}
    headers['Access-Control-Allow-Origin'] = origin

    headers['Access-Control-Allow-Methods'] = '*'
    headers['Access-Control-Allow-Headers'] = '*'
    headers['Access-Control-Allow-Credentials'] = 'true';
    response.headers.update(headers)

    if request.env.request_method == 'OPTIONS':
        headers['Content-Type'] = None
        raise HTTP(200, '', **headers)

def cors_allow(action):

    def f(*args, **kwargs):
        cors_origin()
        return action(*args, **kwargs)

    f.__doc__ = action.__doc__
    f.__name__ = action.__name__
    f.__dict__.update(action.__dict__)

    return f

@cors_allow
@request.restful()
def dados():

    def GET(*args, **vars):
        
        id_usuario = 2
        # id_usuario = auth.user.id

        #busca os tipo aí
        tipos={
            0:"Nenhum",
            1:"Pintura",
            2:"Manutenção",
            3:"Reparos",
            4:"Elétrica"
            }

        dados = []


        usuario_db = db.auth_user(id_usuario)

        objetos_solicitacao_prestador=auxi.objetos_solicitacao_lista(id_usuario,"cliente")
        # dados_solicitacoes=[]
        
        #     dados_solicitacoes.append(solicitacao.pega_dados_solicitacao())
        

        # rows = db(db.solicitacao.cliente == id_usuario).select()

        for solicitacao in objetos_solicitacao_prestador:
            cliente, prestador, tipo, status, disponibilidade, agendamento = solicitacao.pega_item_solicitacao()
            nome_cliente = cliente.pega_nome_completo()
            nome_prestador = prestador.pega_nome_completo()

            dados.append({"cliente": nome_cliente, "prestador": nome_prestador, "tipo": tipos[tipo[0]], "status": status, "disponibilidade": disponibilidade, "agendamento": agendamento})


        return  response.json({"dados":dados});


    return locals()




##  ->  get_solicitacao/dados