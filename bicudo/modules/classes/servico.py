from classes.usuario import Usuario

class Servico:
    """recebe um objeto usuario = prestador do servico"""
    def __init__(self, usuario, tipo, descricao): 
        self.prestador = usuario
        self.tipo = tipo
        self.descricao = descricao
        
    def altera_prestador(self, usuario): #recebe um objeto usuario
        self.prestador = usuario
        
    def altera_tipo(self, tipo): #alteracao = dicionario chave valor
        self.tipo = tipo
        
    def altera_descricao(self, descricao): #alteracao = dicionario chave valor
        self.descricao = descricao
        
    def pega_item_servico(self):
        return (self.prestador, self.tipo, self.descricao)
    
    def pega_dados_servico(self):
        dados_prestador = self.prestador.pega_dados()
        dados_servico = "Tipo: "+self.tipo+"\nDescricao: " + self.descricao
        return(dados_prestador+"\n"+dados_servico)
