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
    headers['Access-Control-Allow-Credentials'] = 'true'
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
def api_edita():

    def PUT(*args, **vars):

        # id_usuario = session.auth.user.id
        id_usuario = 3
        erro = ""

        # Dados pessoais
        primeiro_nome = ''
        if 'primeiro_nome' in vars:
            primeiro_nome = vars['primeiro_nome']

        segundo_nome = ''
        if 'segundo_nome' in vars:
            segundo_nome = vars['segundo_nome']
    
        cpf = ''
        if 'cpf' in vars:
            cpf = vars['cpf']

        email = ''
        if 'email' in vars:
            email = vars['email']

        senha = ''
        if 'senha' in vars:
            senha = vars['senha']

        genero = 0
        if 'genero' in vars:
            genero = int(vars['genero'])


        telefone = ''
        if 'telefone' in vars:
            telefone = vars['telefone']

        logradouro = ''
        if 'logradouro' in vars:
            logradouro = vars['logradouro']

        numero = ''
        if 'numero' in vars:
            numero = vars['numero']

        complemento = ''
        if 'complemento' in vars:
            complemento = vars['complemento']

        bairro = ''
        if 'bairro' in vars:
            bairro = vars['bairro']

        cidade = ''
        if 'cidade' in vars:
            cidade = vars['cidade']

        # estado = ''
        # if 'estado' in vars:
        #     estado = int(vars['estado'])

        cep = ''
        if 'cep' in vars:
            cep = vars['cep']

        
        db (db.auth_user.id == id_usuario).update(
            first_name=primeiro_nome,
            last_name=segundo_nome,
            cpf=cpf,
            genero=genero,
            telefone = telefone,
            email=email,
            logradouro=logradouro,
            numero=numero,
            complemento=complemento,
            bairro=bairro,
            cidade=cidade,
            cep=cep)
            
        return  response.json({"msg":"Cadastro Atualizado Com Sucesso!"})
        
    return locals()


@auth.requires_membership('USUARIO')    
def oferecer_servico():
    query=db.servico.prestador==session.auth.user.id
    grid = SQLFORM.grid(query, maxtextlength=200,showbuttontext=False)
    return dict(grid=grid)
