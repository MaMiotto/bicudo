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
def api():

    def POST(*args, **vars):

        email = vars["email"];
        senha = vars["senha"];

        usuario_existe = db(db.auth_user.email==email).select().first()

        if(usuario_existe):
            #senha_correta = usuario_existe["password"] == senha
            #if(senha_correta):
                #return  response.json({"msg":"Login Válido!"})
            
            #TESTE
            senha_crypt=db.auth_user.password.validate(senha)[0]
            #TEM QUE TESTAR: NÂO SEI SE TEM QUE USAR senha_crypt no lugar de senha
            valida = auth.login_bare(email, senha) #Valida e loga
            if(valida):
                return  response.json({"msg":"Login Válido!"})
            
            else:
                return response.json({"erro":"Credenciais Inválidas!"})
        return response.json({"erro":"Credenciais Inválidas!"})
        
    return locals();
