from endereco import Endereco

class Usuario:
    """endereco Objeto Endereco"""
    def __init__(self, id_usuario, primeiro_nome, segundo_nome, cpf, data_nascimento, genero, telefone, email, endereco): 
        self.id_usuario = id_usuario
            
        # Dados pessoais
        self.primeiro_nome = primeiro_nome
        self.segundo_nome = segundo_nome
        self.cpf = cpf
        self.data_nascimento = data_nascimento
        self.genero = genero

        # Contato
        self.telefone = telefone
        self.email = email
        
        self.endereco = endereco
        
    def altera_nome(self, primeiro_nome, segundo_nome): #alteracao = dicionario chave valor
        if primeiro_nome: self.primeiro_nome = primeiro_nome
        if segundo_nome: self.segundo_nome = segundo_nome
        
    def altera_cpf(self, cpf): #alteracao = dicionario chave valor
        self.cpf = cpf
        
    def altera_data_nascimento(self, data_nascimento): #alteracao = dicionario chave valor
        self.data_nascimento = data_nascimento
        
    def altera_genero(self, genero): #alteracao = dicionario chave valor
        self.genero = genero
        
    def altera_telefone(self, telefone): #alteracao = dicionario chave valor
        self.telefone = telefone
        
    def altera_email(self, email): #alteracao = dicionario chave valor
        self.email = email
        
    def altera_endereco(self,endereco):
        self.endereco=endereco
        
    def altera_usuario(self, primeiro_nome, segundo_nome, cpf, data_nascimento, genero, telefone, email, endereco): 
        if primeiro_nome or segundo_nome: self.altera_nome(primeiro_nome, segundo_nome)
        if cpf: self.altera_cpf(cpf)
        if data_nascimento: self.altera_data_nascimento(data_nascimento)
        if genero: self.altera_genero(genero)
        if telefone: self.altera_telefone(telefone)
        if email: self.altera_email(email)
        if endereco: self.altera_endereco(endereco)
        
    def pega_endereco(self):
        return self.endereco
        
    def pega_nome_completo(self):
        return (self.primeiro_nome+" "+self.segundo_nome)
    
    def pega_contato(self):
        return ("e-mail: "+self.email+" - telefone: "+self.telefone)
                
    def pega_dados_pessoais(self):
        nome = self.pega_nome_completo()
        dados_pessoais = "\nCPF: "+self.cpf+"\nData de nascimento: "+self.data_nascimento+"\nGenero: "+self.genero
        return (nome+dados_pessoais)
    
    def pega_dados(self):
        dados_pessoais = self.pega_dados_pessoais()
        contato = self.pega_contato()
        return(dados_pessoais+contato)
        
    def pega_item_usuario(self):
        return (self.id_usuario, self.primeiro_nome, self.segundo_nome, self.cpf, self.data_nascimento, self.genero, self.telefone,self.email,self.endereco)
