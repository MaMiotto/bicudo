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
def prestadores():

    def GET(*args, **vars):

        id_servico = ''
        if 'id_servico' in vars:
            id_servico = vars['id_servico']
       

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
        
           
        return  response.json({"msg":todo_servico_busca});
        
    return locals()


