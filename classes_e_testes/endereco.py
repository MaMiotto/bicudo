class Endereco:
    """Usuario geral do sistema"""
    def __init__(self, logradouro, numero, complemento, bairro, cidade, estado, cep):

        self.logradouro = logradouro
        self.numero = numero
        self.complemento = complemento
        self.bairro = bairro
        self.cidade = cidade
        self.estado = estado
        self.cep = cep
        
    def altera_logradouro(self, logradouro): #alteracao = dicionario chave valor
        self.logradouro = logradouro
        
    def altera_numero(self, numero): #alteracao = dicionario chave valor
        self.numero = numero
        
    def altera_complemento(self, complemento): #alteracao = dicionario chave valor
        self.complemento = complemento
        
    def altera_bairro(self, bairro): #alteracao = dicionario chave valor
        self.bairro = bairro
        
    def altera_cidade(self, cidade): #alteracao = dicionario chave valor
        self.cidade = cidade
        
    def altera_estado(self, estado): #alteracao = dicionario chave valor
        self.estado = estado
        
    def altera_cep(self, cep): #alteracao = dicionario chave valor
        self.cep = cep
        
    def altera_endereco(self, logradouro, numero, complemento, bairro, cidade, estado, cep):
        if logradouro: self.altera_logradouro(logradouro)
        if numero: self.altera_numero(numero)
        if complemento: self.altera_complemento(complemento)
        if bairro: self.altera_bairro(bairro)
        if cidade: self.altera_cidade(cidade)
        if estado: self.altera_estado(estado)
        if cep: self.altera_cep(cep)
        
    def pega_itens_endereco(self):
        return (self.logradouro,self.numero,self.complemento,self.bairro,self.cidade,self.estado,self.cep)
            
    def pega_endereco(self):
        if self.complemento:
            return("Endereco:\n%s N.%s - complemento: %s\nBairro: %s %s %s - CEP %s"%(self.logradouro, self.numero, self.complemento, self.bairro, self.cidade, self.estado, self.cep)) 
        else:
            return("Endereco:\n%s N.%s - complemento: %s\nBairro: %s %s %s - CEP %s"%(self.logradouro, self.numero, self.bairro, self.cidade, self.estado, self.cep)) 
