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
        if 'segundo_nome' in vars:
            senha = vars['senha']

        genero = 0
        if 'genero' in vars:
            genero = vars['genero']

        
        if 'data_nascimento' in vars:
            data_nascimento = vars['data_nascimento']
        else:
            erro+= "A Data de nascimento é obrigatória"
            return response.json({"erro":erro});

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

        estado = ''
        if 'estado' in vars:
            estado = vars['estado']

        cep = ''
        if 'cep' in vars:
            cep = vars['cep']
        

        

        usuario_existe = db((db.auth_user.email==email)and(db.auth_user.cpf==cpf)).select().first()
        if (usuario_existe):
            if (usuario_existe.email == email):
                erro+= "E-mail ja cadastrado "
            if (usuario_existe.cpf == cpf):
                erro+= "CPF ja cadastrado "
            return response.json({"erro":erro});


        
        novo_usuario = db.auth_user.insert( #verifica se o email ja esta cadastrado, caso positivo atualiza
        first_name=primeiro_nome,
        last_name=segundo_nome,
        cpf=cpf,
        email=email,
        genero=genero,
        dta_nascimento=data_nascimento,
        telefone = telefone,
        logradouro=logradouro,
        numero=numero,
        complemento=complemento,
        bairro=bairro,
        cidade=cidade,
        estado=estado,
        cep=cep,
        password=senha);

        return  response.json({"msg":"Cadastro Realizado Com Sucesso!"});
        # return  response.json({"msg":segundo_nome});
        
    return locals()