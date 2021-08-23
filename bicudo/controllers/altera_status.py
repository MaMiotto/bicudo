import auxi
#from classes.usuario import Usuario
#from classes.endereco import Endereco
#from classes.servico import Servico
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
def alterar():

    def PUT(*args, **vars):

        # id_usuario = auth.user.id
        # id_solicitacao = 2
        erro = ""

        id_solicitacao = ''
        if 'id_solicitacao' in vars:
            id_solicitacao = vars['id_solicitacao']


        novo_status = ''
        if 'novo_status' in vars:
            novo_status = vars['novo_status']

        # auxi.edita_solicitacao(id_solicitacao,"status",novo_status)

        db(db.solicitacao.id==id_solicitacao).update(status=novo_status)
              

        return  response.json({"msg":"Status da Solicitacao Alterado"});
        
    return locals()



## servico/cadastrar