import auxi
#from classes.usuario import Usuario
#from classes.endereco import Endereco
#from classes.servico import Servico
#from classes.solicitacao import Solicitacao
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

def teste_registra_usuario():
    total_testes = 0
    total_falhas = 0
    relatorio_txt = "TESTE: REGISTRA USUARIO\n"
        
    #print("ID ÚLTIMO USUÁRIO = %d"%(id_usuario['id']))
    
    email = 'teste@teste.com',
    primeiro_nome = 'texte_integracao'
    segundo_nome = 'segundo_nome'
    cpf = '899.999.999-99'
    data_nascimento = request.now
    genero = 4
    telefone = '(88)99999-9999'
    logradouro = 'R.'
    numero = '0'
    complemento = '-'
    bairro = 'B.'
    cidade = 'C'
    estado = 1
    cep = '80000-00'
    
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
        password=db.auth_user.password.validate('123456')[0])
    
    if (novo_usuario):
        total_testes+=1
        relatorio_txt+="    > TESTE USUARIO - db registra usuario - OK\n"
    else:
        total_testes+=1
        total_falhas+=1
        relatorio_txt+="    > TESTE USUARIO - db registra usuario - FALHA\n"

    #print("ID novo usuario %s"%(novo_usuario))
    
    #id_usuario_novo = db(db.auth_user).select(db.auth_user.id, orderby=~db.auth_user.id).first()
    #print(novo_usuario)
    
    return (int(novo_usuario),total_testes,total_falhas,relatorio_txt)

def teste_registra_servico(id_add_usuario):
    total_testes = 0
    total_falhas = 0
    relatorio_txt = "TESTE: REGISTRA SERVICO\n"
    
    db.servico.prestador.default=int(id_add_usuario)
    query_tipos=db(db.tipo_servico).select(db.tipo_servico.id, orderby=~db.tipo_servico.id).first()
    tipo=query_tipos['id']
    descricao="TESTE"
    
    novo_servico=db.servico.insert(
        tipos=tipo,
        descricao=descricao
        )
    
    if (novo_servico):
        total_testes+=1
        relatorio_txt+="    > TESTE SERICO - db registra servico - OK\n"
    else:
        total_testes+=1
        total_falhas+=1
        relatorio_txt+="    > TESTE SERICO - db registra servico - FALHA\n"
        
    #db.servico.prestador.default=session.auth.user.id
    
    #id_servico_novo = db(db.servico).select(db.servico.id, orderby=~db.servico.id).first()
    
    return (int(novo_servico),total_testes,total_falhas,relatorio_txt)

def teste_remove_servico(id_add_servico):
    total_testes = 0
    total_falhas = 0
    relatorio_txt = "TESTE: REMOVE SERVICO\n"
    
    servico = db(db.servico.id == id_add_servico).select().first()
    
    if (servico):
        db(db.servico.id == id_add_servico).delete()
        total_testes+=1
        relatorio_txt+="    > TESTE SERICO - db remove servico - OK\n"
    else:
        total_testes+=1
        total_falhas+=1
        relatorio_txt+="    > TESTE SERICO - db remove servico - FALHA\n"
        
    return (total_testes,total_falhas,relatorio_txt)
        
def teste_remove_usuario(id_add_usuario):
    total_testes = 0
    total_falhas = 0
    relatorio_txt = "TESTE: REMOVE USUARIO\n"
    
    usuario = db(db.auth_user.id == id_add_usuario).select().first()
    
    if (usuario):
        db(db.auth_user.id == id_add_usuario).delete()
        total_testes+=1
        relatorio_txt+="    > TESTE USUARIO - db remove usuario - OK\n"
    else:
        total_testes+=1
        total_falhas+=1
        relatorio_txt+="    > TESTE USUARIO - db remove usuario - FALHA\n"
        
    return (total_testes,total_falhas,relatorio_txt)
        
def teste_recupera_dados_usuario():
    total_testes = 0
    total_falhas = 0
    relatorio_txt = "TESTE: RECUPERA DADOS USUARIO\n"
    
    usuario_id = db(db.auth_user).select(db.auth_user.id, orderby=~db.auth_user.id).first()
    objeto_usuario = auxi.dados_usuario(int(usuario_id))
    itens_usuario=objeto_usuario.pega_item_usuario()
    
    if(itens_usuario):
        total_testes+=1
        relatorio_txt+="    > TESTE USUARIO - retorna informacoes usuario - OK\n"
        relatorio_txt+="        ---"+str(itens_usuario)+"   ---\n"
    else:
        total_testes+=1
        total_falhas+=1
        relatorio_txt+="    > TESTE USUARIO - retorna informacoes usuario - FALHA\n"
        
    return (total_testes,total_falhas,relatorio_txt)

def teste_recupera_dados_servico():
    total_testes = 0
    total_falhas = 0
    relatorio_txt = "TESTE: RECUPERA DADOS SERVICO\n"
    
    servico_pretador_id = db(db.servico).select(db.servico.prestador, orderby=~db.servico.id).first()
    #print(servico_pretador_id['prestador'])
    objeto_usuario = auxi.dados_usuario(int(servico_pretador_id['prestador']))
    objeto_servico=auxi.dados_servico(objeto_usuario)
    itens_servico=objeto_servico.pega_item_servico()
    
    if(itens_servico):
        total_testes+=1
        relatorio_txt+="    > TESTE SERVICO - retorna informacoes servico - OK\n"
        relatorio_txt+="        ---"+str(itens_servico)+"   ---\n"
    else:
        total_testes+=1
        total_falhas+=1
        relatorio_txt+="    > TESTE SERVICO - retorna informacoes servico - FALHA\n"
        
    return (total_testes,total_falhas,relatorio_txt)

def teste_registra_solicitacao():
    total_testes = 0
    total_falhas = 0
    relatorio_txt = "TESTE: REGISTRA SOLICITACAO\n"
    
    cliente_id = db(db.auth_user).select(db.auth_user.id, orderby=~db.auth_user.id).first()
    servico_pretador_id = db(db.servico).select(db.servico.prestador, orderby=~db.servico.id).first()
    query_tipos=db(db.tipo_servico).select(db.tipo_servico.id, orderby=~db.tipo_servico.id).first()
    tipo=query_tipos['id']
    
    cliente = int(cliente_id)
    prestador = int(servico_pretador_id['prestador'])
    tipo = tipo
    status = 1
    disponibilidade = "horario comercial"
    agendamento = "segunda feira 8:00"
    
    nova_solicitacao = db.solicitacao.insert(
        cliente = cliente,
        prestador = prestador,
        tipo = tipo,
        status = status,
        disponibilidade = disponibilidade,
        agendamento = agendamento)
    
    if(nova_solicitacao):
        total_testes+=1
        relatorio_txt+="    > TESTE SOLICITACAO - registra solicitacao - OK\n"
    else:
        total_testes+=1
        total_falhas+=1
        relatorio_txt+="    > TESTE SOLICITACAO - registra solicitacao - FALHA\n"
        
    return (int(nova_solicitacao),total_testes,total_falhas,relatorio_txt)

def teste_recupera_dados_solicitacao():
    total_testes = 0
    total_falhas = 0
    relatorio_txt = "TESTE: RECUPERA DADOS SOLICITACAO\n"
    
    solicitacao_db = db(db.solicitacao).select(db.solicitacao.ALL, orderby=~db.solicitacao.id).first()
    cliente_id = int(solicitacao_db['cliente'])
    prestador_id = int(solicitacao_db['prestador'])
    solicitacoes_cliente=auxi.dados_solicitacao_cliente(cliente_id)
    solicitacoes_prestador=auxi.dados_solicitacao_prestador(prestador_id)
    
    if(solicitacoes_cliente):
        total_testes+=1
        relatorio_txt+="    > TESTE SOLICITACAO - recupera solicitacoes cliente - OK\n"
        for solicitacao in solicitacoes_cliente:
            relatorio_txt+="        ---"+str(solicitacao)+"   ---\n"
    else:
        total_testes+=1
        total_falhas+=1
        relatorio_txt+="    > TESTE SOLICITACAO - recupera solicitacoes cliente - FALHA\n"
        
    if(solicitacoes_prestador):
        total_testes+=1
        relatorio_txt+="    > TESTE SOLICITACAO - recupera solicitacoes prestador - OK\n"
        for solicitacao in solicitacoes_prestador:
            relatorio_txt+="        ---"+str(solicitacao)+"   ---\n"
    else:
        total_testes+=1
        total_falhas+=1
        relatorio_txt+="    > TESTE SOLICITACAO - recupera solicitacoes prestador - FALHA\n"
        
    return (total_testes,total_falhas,relatorio_txt)

def teste_remove_solicitacao(id_add_solicitacao):
    total_testes = 0
    total_falhas = 0
    relatorio_txt = "TESTE: REMOVE SOLICITACAO\n"
    
    solicitacao = db(db.solicitacao.id == id_add_solicitacao).select().first()
    
    if (solicitacao):
        db(db.solicitacao.id == id_add_solicitacao).delete()
        total_testes+=1
        relatorio_txt+="    > TESTE SOLICITACAO - db remove solicitacao - OK\n"
    else:
        total_testes+=1
        total_falhas+=1
        relatorio_txt+="    > TESTE SOLICITACAO - db remove solicitacaoo - FALHA\n"
        
    return (total_testes,total_falhas,relatorio_txt)
    

def teste_integracao():
    temp_testes=0
    temp_falhas=0
    temp_relatorio=""
    
    total_testes=0
    total_falhas=0
    relatorio_txt=[]
    id_add_usuario=-1
    id_add_servico=-1
    id_add_solicitacao=-1
    
    #Regista usuario
    id_add_usuario,temp_testes,temp_falhas,temp_relatorio=teste_registra_usuario()
    total_testes+=temp_testes
    total_falhas+=temp_falhas
    relatorio_txt.append(temp_relatorio)
    #Registra servico
    id_add_servico,temp_testes,temp_falhas,temp_relatorio=teste_registra_servico(id_add_usuario)
    total_testes+=temp_testes
    total_falhas+=temp_falhas
    relatorio_txt.append(temp_relatorio)
    #Remove servico
    temp_testes,temp_falhas,temp_relatorio=teste_remove_servico(id_add_servico)
    total_testes+=temp_testes
    total_falhas+=temp_falhas
    relatorio_txt.append(temp_relatorio)
    #Remove usuario
    temp_testes,temp_falhas,temp_relatorio=teste_remove_usuario(id_add_usuario)
    total_testes+=temp_testes
    total_falhas+=temp_falhas
    relatorio_txt.append(temp_relatorio)
    #Recupera dados usuario
    temp_testes,temp_falhas,temp_relatorio=teste_recupera_dados_usuario()
    total_testes+=temp_testes
    total_falhas+=temp_falhas
    relatorio_txt.append(temp_relatorio)
    #Recupera dados servico
    temp_testes,temp_falhas,temp_relatorio=teste_recupera_dados_servico()
    total_testes+=temp_testes
    total_falhas+=temp_falhas
    relatorio_txt.append(temp_relatorio)
    #Regista solicitacao
    id_add_solicitacao,temp_testes,temp_falhas,temp_relatorio=teste_registra_solicitacao()
    total_testes+=temp_testes
    total_falhas+=temp_falhas
    relatorio_txt.append(temp_relatorio)
    #Recupera dados solicitacao
    temp_testes,temp_falhas,temp_relatorio=teste_recupera_dados_solicitacao()
    total_testes+=temp_testes
    total_falhas+=temp_falhas
    relatorio_txt.append(temp_relatorio)
    #Remove solicitacao
    temp_testes,temp_falhas,temp_relatorio=teste_remove_solicitacao(id_add_solicitacao)
    total_testes+=temp_testes
    total_falhas+=temp_falhas
    relatorio_txt.append(temp_relatorio)
    
    return dict(
        total_testes=total_testes,
        total_falhas=total_falhas,
        relatorio_txt=relatorio_txt)
    
