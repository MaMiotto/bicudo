import unittest
from endereco import Endereco
from usuario import Usuario
from servico import Servico
from solicitacao import Solicitacao

class TestSolicitacao(unittest.TestCase):
    
    def setUp(self):
        self.endereco = Endereco("Rua Um", "310A", "apt. 101", "Barreiro", "Belo Horizonte", "MG", "31333-333")
        self.cliente = Usuario(10,"Joao","Pedro","000.000.000-01","01/01/2000","Masculino","(31)99999-9999","jp@x.com",self.endereco)
        self.prestador = Usuario(10,"Pedro","Paulo","000.000.000-02","01/01/2000","Masculino","(31)99999-8888","pp@x.com",self.endereco)
        self.tipo="pintura"
        self.status="Agendamento"
        self.disponibilidade="Visita qualquer dia de 14:00 a 18:00"
        self.agendamento="Segunda 16:00"
        #self.servico = Servico(self.prestador,self.tipo,self.descricao)
        self.solicitacao = Solicitacao(self.cliente, self.prestador, self.tipo, self.status, self.disponibilidade, self.agendamento)
        
    def test_altera_tipo(self):
        self.solicitacao.altera_tipo("geral")
        self.assertEquals("geral",self.solicitacao.tipo)
        
    def test_altera_status(self):
        self.solicitacao.altera_status("OK")
        self.assertEquals("OK",self.solicitacao.status)
        
    def test_altera_disponibilidade(self):
        self.solicitacao.altera_disponibilidade("Ligar horario comercial")
        self.assertEquals("Ligar horario comercial",self.solicitacao.disponibilidade)
        
    def test_altera_agendamento(self):
        self.solicitacao.altera_agendamento("Quinta 14:00")
        self.assertEquals("Quinta 14:00",self.solicitacao.agendamento)
        
    def test_altera_solicitacao(self):
        self.solicitacao.altera_solicitacao("geral","OK","Visita comercial","Quarta 17:00")
        self.assertEquals("geral",self.solicitacao.tipo)
        self.assertEquals("OK",self.solicitacao.status)
        self.assertEquals("Visita comercial",self.solicitacao.disponibilidade)
        self.assertEquals("Quarta 17:00",self.solicitacao.agendamento)
        
    def test_pega_item_solicitacao(self):
        cliente,prestador,tipo,status,disponibilidade,agendamento=self.solicitacao.pega_item_solicitacao()
        self.assertEquals(cliente,self.solicitacao.cliente)
        self.assertEquals(prestador,self.solicitacao.prestador)
        self.assertEquals("pintura",self.solicitacao.tipo)
        self.assertEquals("Agendamento",self.solicitacao.status)
        self.assertEquals("Visita qualquer dia de 14:00 a 18:00",self.solicitacao.disponibilidade)
        self.assertEquals("Segunda 16:00",self.solicitacao.agendamento)
        
    def teste_pega_dados_solicitacao(self):
        txt_dados = self.solicitacao.pega_dados_solicitacao()
        print(txt_dados)
        txt_assert = "Ciente: Joao Pedro\nCPF: 000.000.000-01\nData de nascimento: 01/01/2000\nGenero: Masculinoe-mail: jp@x.com - telefone: (31)99999-9999\nPrestador: Pedro Paulo\nCPF: 000.000.000-02\nData de nascimento: 01/01/2000\nGenero: Masculinoe-mail: pp@x.com - telefone: (31)99999-8888\nTipo: pintura\nStatus: Agendamento\nDisponibilidade: Visita qualquer dia de 14:00 a 18:00\nAgendamento: Segunda 16:00"
        self.assertEquals(txt_assert,txt_dados)
        
#if __name__ == '__main__':
    #unittest.main()

# Como rodar o teste: python3 -m unittest teste_solicitacao.TestSolicitacao (nome_do_arquivo.nome_da_calsse_de_teste)

# Como rodar o teste (verbose): python3 -m unittest -v teste_solicitacao.TestSolicitacao

# python -m unittest discover (roda todos os testes)

# coverage run -m unittest discover

# coverage run -m unittest discover
# coverage report -m
