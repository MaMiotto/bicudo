import auxi
#from classes.usuario import Usuario
#from classes.endereco import Endereco
#from classes.servico import Servico
from usuario import Usuario
from endereco import Endereco
from servico import Servico
from solicitacao import Solicitacao
from datetime import date

#----------------------------------------------------------------
#aux
#funcoes que retornam objetos
#----------------------------------------------------------------

def dados_usuario(id_usuario=None):
    if not (id_usuario):
        id_usuario=session.auth.user.id 
    usuario=auxi.dados_usuario(id_usuario)
    print(usuario)
    return (usuario)


def dados_prestador(id_usuario=None):
    if not (id_usuario):
        id_usuario=session.auth.user.id
    usuario=dados_usuario(id_usuario)
    servico=auxi.dados_servico(usuario)
    if (servico):
        return (servico)
    else:
        msg="O usuario logando nao presta servico"
        return (msg)

#----------------------------------------------------------------
#Views functios
#implementar api retornando json
#----------------------------------------------------------------

def dados_servicos():
    todo_servico = auxi.dados_todos_servicos
    return dict(todo_serviso=todo_servico)

def usuario():
    usuario = dados_usuario()
    txt_usuario = usuario.pega_dados()
    return dict(usuario=usuario,txt_usuario=txt_usuario)

def prestador_servico():
    servico=dados_prestador()
    if (servico == "O usuario logando nao presta servico"):
        return dict(txt_servico=servico,servico="")
    else:
        txt_servico=servico.pega_dados_servico()
        return dict(txt_servico=servico,servico=servico)
    
#----------------------------------------------------------------
#login
#----------------------------------------------------------------
def login_usuario():
    email, password = request.post_vars['email'], request.post_vars['password']
    '''if not auth.login_bare(email, password):
        redirect(URL('<form_parap_registro>'))
        '''
    auth.login_bare(email, password)
    #redirect(URL('index'))
    return("OK")
    
#----------------------------------------------------------------
#insert db
#----------------------------------------------------------------
#adicionar um novo usurio (novo registro)

def insert_usuario():
    # Dados pessoais
    primeiro_nome = request.post_vars['primeiro_nome']
    segundo_nome = request.post_vars['segundo_nome']
    cpf = request.post_vars['cpf']
    senha = request.post_vars['senha']
    
    #deve ser passado o id do genero conforme indicado no db (GENERO)
    genero = int(request.post_vars['genero'])
    
    #converte data
    str_data = request.post_vars['data_nascimento']
    str_data_split = str_data.split("/")
    dia=int(str_data_split[0])
    mes=int(str_data_split[1])
    ano=int(str_data_split[2])
    data_nascimento = date(ano,mes,dia)
    
    telefone = request.post_vars['telefone']
    email = request.post_vars['email']
    logradouro = request.post_vars['logradouro']
    numero = request.post_vars['numero']
    complemento = request.post_vars['complemento']
    bairro = request.post_vars['bairro']
    cidade = request.post_vars['cidade']
    
    #deve ser passado o id do estado conforme db (ESTADO)
    estado = int(request.post_vars['estado'])
    
    cep = request.post_vars['cep']
    
    erro=""
    usuario_existe = db((db.auth_user.email==email)or(db.auth_user.cpf==cpf)).select().first()
    if (usuario_existe):
        if (usuario_existe.email == email):
            erro+= "E-mail ja cadastrado "
        if (usuario_existe.cpf == cpf):
            erro+= "CPF ja cadastrado "
        return (erro)
    
    novo_usuario = db.auth_user.insert( #verifica se o email ja esta cadastrado, caso positivo atualiza
        first_name=primeiro_nome,
        last_name=segundo_nome,
        cpf=cpf,
        genero=genero,
        dta_nascimento=data_nascimento,
        telefone = telefone,
        email=email,
        logradouro=logradouro,
        numero=numero,
        complemento=complemento,
        bairro=bairro,
        cidade=cidade,
        estado=estado,
        cep=cep,
        password=senha)
        
    id_grupo_usuario=int(db(db.auth_group.role == "USUARIO").select(db.auth_group.id).first())
    auth.add_membership(id_grupo_usuario, novo_usuario)
        
    return("OK")

@auth.requires_login()
def update_usuario():
    id_usuario = session.auth.user.id
    # Dados pessoais
    primeiro_nome = request.post_vars['primeiro_nome']
    segundo_nome = request.post_vars['segundo_nome']
    cpf = request.post_vars['cpf']
    senha = request.post_vars['senha']
    
    #deve ser passado o id do genero conforme indicado no db (GENERO)
    genero = int(request.post_vars['genero'])
    
    #converte data
    str_data = request.post_vars['data_nascimento']
    str_data_split = str_data.split("/")
    dia=int(str_data_split[0])
    mes=int(str_data_split[1])
    ano=int(str_data_split[2])
    data_nascimento = date(ano,mes,dia)
    
    telefone = request.post_vars['telefone']
    email = request.post_vars['email']
    logradouro = request.post_vars['logradouro']
    numero = request.post_vars['numero']
    complemento = request.post_vars['complemento']
    bairro = request.post_vars['bairro']
    cidade = request.post_vars['cidade']
    
    #deve ser passado o id do estado conforme db (ESTADO)
    estado = int(request.post_vars['estado'])
    
    cep = request.post_vars['cep']
    
    db.auth_user.update(db.auth_user.id == id_usuario,
        first_name=primeiro_nome,
        last_name=segundo_nome,
        cpf=cpf,
        genero=genero,
        dta_nascimento=data_nascimento,
        telefone = telefone,
        email=email,
        logradouro=logradouro,
        numero=numero,
        complemento=complemento,
        bairro=bairro,
        cidade=cidade,
        estado=estado,
        cep=cep,
        password=senha)
        
    return("OK")

@auth.requires_login()
def insert_servico():
    id_usuario = request.post_vars['id_usuario']
    if not id_usuario:
        id_usuario = auth.user.id
    
    tipos = request.post_vars['tipos'] #lista de inteiros com os tipos (exemplo: "[1,3,5]")
    descricao = request.post_vars['tipos']
    
    db.servico.update_or_insert(db.servico.prestador==id_usuario,
                                prestador=id_usuario,
                                tipos=tipos,
                                descricao=descricao)
    return("OK")
    
#----------------------------------------------------------------
#TESTE
#----------------------------------------------------------------

def dados_prestador_teste():
    usuario = dados_usuario(2)
    txt_usuario = usuario.pega_dados()
    nome = usuario.pega_nome_completo()
    return dict(nome=nome,txt=txt_usuario)

def teste_insert_usuario():
    txt = "TESTE REGISTRA USUARIO"
    return dict(txt=txt)

#----------------------------------------------------------------
#TESTE-API
#----------------------------------------------------------------

def api_usuario():    
    usuarios={} 
    for usuario in db(db.auth_user).select():
        usuarios[usuario.id]=usuario.first_name
        
    names=['Sunday', 'Monday', 'Tuesday', 'Wednesday',
           'Thursday', 'Friday', 'Saturday']
    import gluon.contrib.simplejson

    return gluon.contrib.simplejson.dumps(usuarios)

#---------------------------------------------------------------
#API 
#http://web2py.com/books/default/chapter/29/10/services#Low-level-API-and-other-recipes
#---------------------------------------------------------------
#-Exemplo-#http://127.0.0.1:8000/myapp/default/api/person
#-----------
#GET
#-----------
#http://127.0.0.1:8000/myapp/default/api/persons.json
#indicates a request for a list of persons (records from the data person) in json format.

#http://127.0.0.1:8000/myapp/default/api/person/1.json
#it calls and returns GET('person','1') where GET is the function defined inside the action.

#-----------
#POST
#-----------
#http://127.0.0.1:8000/myapp/default/api/person
#means that you want to create a new person.


#http://127.0.0.1:8000/bicudo/dados_bicudo/api/insert_usuario

@request.restful()
def api():
    response.view = 'generic.' + request.extension
    # Acredito que 'table_name' pode ser o nome d uma tabela ou qualquer outra funcao
    def GET(table_name == 'auth_user':,user_id):
        if table_name == 'info_usuario':
            usuario = dados_usuario()
            #return dict(usuario=usuario) #retiorna um objeto usuario
        
            #TESTE RETORNA JSON
            import gluon.contrib.simplejson
            usuario_info = {
                'primeiro_nome':usuario[1],
                'segundo_nome':usuario[2]
                }
            return gluon.contrib.simplejson.dumps(usuarios_info)
            
    
    def POST(table_name, **vars):
        if table_name == 'auth_user':
            msg = insert_usuario(**vars)
            return(msg)
            #reurn dict(msg=msg) #Não sei qual return vai funcionar, tem que testar
        elif table_name == 'servico':
            msg = insert_servico(**vars)
            return(msg)
        elif table_name == 'servico':
            msg = insert_servico(**vars)
            return(msg)
        elif tabel_name == 'login':
            masg = login_usuario(**vars)
            return(msg)
        else:
            raise HTTP(400)
    return locals()
