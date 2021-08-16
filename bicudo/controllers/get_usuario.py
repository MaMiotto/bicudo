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
def usuario():

    def GET(*args, **vars):

        id_user = ''
        if 'id_user' in vars:
            id_user = vars['id_user']
     
        db = current.db
        usuario_db = db.auth_user(id_user)

        return  response.json({"dados":usuario_db})
        
    return locals()




