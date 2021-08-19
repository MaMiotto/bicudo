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
def cadastrar():

    def POST(*args, **vars):

        id_usuario = auth.user.id
        #id_usuario = 3
        erro = ""

        tipos = ''
        if 'tipos' in vars:
            tipos = vars['tipos']

        descricao = ''
        if 'descricao' in vars:
            descricao = vars['descricao']
    
        
        # db.servico.update_or_insert(db.servico.prestador==id_usuario,
        novo_prestador = db.servico.insert(
            prestador=prestador,
            tipos=tipos,
            descricao=descricao
        )

        return  response.json({"msg":"Serviço Cadastrado Com Sucesso!"});
        
    return locals()



