from usuario import Usuario
from endereco import Endereco
from servico import Servico

STATUS = {
    1:"Solicitacao",
    2:"Agendamento",
    3:"Confirmado",
    4:"Finalizado",
    5:"Recusado"
}


class Solicitacao:
    def __init__(self, cliente, prestador, tipo, status, disponibilidade, agendamento): 
        self.cliente = cliente #Classe Usuario
        self.prestador = prestador #Classe Usuario
        self.tipo = tipo
        self.status = status
        self.disponibilidade = disponibilidade #disponibilidade do cliente para receber contato do reatdor
        self.agendamento = agendamento #Resposta do prestador quanto ao contato
        
    def altera_tipo(self, tipo):
        self.tipo=tipo
        
    def altera_status(self, status):
        self.status=status
        
    def altera_disponibilidade(self, disponibilidade):
        self.disponibilidade=disponibilidade
        
    def altera_agendamento(self, agendamento):
        self.agendamento=agendamento
        
    def altera_solicitacao(self,tipo, status, disponibilidade, agendamento):
        if tipo: self.tipo=tipo
        if status: self.status=status
        if disponibilidade: self.disponibilidade=disponibilidade
        if agendamento: self.agendamento=agendamento
        
    def pega_item_solicitacao(self):
        return (self.cliente, self.prestador, self.tipo, self.status, self.disponibilidade, self.agendamento)
    
    def pega_dados_solicitacao(self):
        dados_cliente = self.cliente.pega_dados()
        dados_prestador = self.prestador.pega_dados()
        txt_info="Ciente: "+dados_cliente+"\nPrestador: "+dados_prestador+"\nTipo: "+str(self.tipo)+"\nStatus: "+str(self.status)+"\nDisponibilidade: "+self.disponibilidade+"\nAgendamento: "+self.agendamento
        return(txt_info)
