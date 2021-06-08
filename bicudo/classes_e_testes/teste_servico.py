import unittest
from endereco import Endereco
from usuario import Usuario
from servico import Servico

class TestServico(unittest.TestCase):
    
    def setUp(self):
        self.endereco = Endereco("Rua Um", "310A", "apt. 101", "Barreiro", "Belo Horizonte", "MG", "31333-333")
        self.usuario = Usuario(10,"Joao","Pedro","000.000.000-01","01/01/2000","Masculino","(31)99999-9999","jp@x.com",self.endereco)
        self.servico = Servico(self.usuario,"Pintura","Pintura de superficies internas e externas")
        
    def test_altera_prestador(self):
        novo_endereco = Endereco("Rua Dois", "310B", "apt. 300", "Centro", "BH", "MG", "31333-000")
        novo_usuario = Usuario(5,"Maria", "Jose", "111.000.000-01", "01/12/1999", "Feminino", "(31)91111-1111", "mj@x.com", novo_endereco)
        self.servico.altera_prestador(novo_usuario)
        self.assertEquals(novo_usuario,self.servico.prestador)
        
    def test_altera_tipo(self):
        self.servico.altera_tipo("Acabamento")
        self.assertEquals("Acabamento",self.servico.tipo)
        
    def test_altera_descricao(self):
        self.servico.altera_descricao("Aplicacao de acabamentos em geral.")
        self.assertEquals("Aplicacao de acabamentos em geral.",self.servico.descricao)
        
    def test_pega_item_servico(self):
        prestador,tipo,descricao = self.servico.pega_item_servico()
        self.assertEquals(self.usuario,prestador)
        self.assertEquals("Pintura",tipo)
        self.assertEquals("Pintura de superficies internas e externas",descricao)
        
    def test_pega_dados_servico(self):
        print(self.servico.pega_dados_servico())
        #self.assertEquals(texto,self.usuario.pega_dados())
        
if __name__ == '__main__':
    unittest.main()

# Como rodar o teste: python3 -m unittest teste_servico.TestServico (nome_do_arquivo.nome_da_calsse_de_teste)

# Como rodar o teste (verbose): python3 -m unittest -v teste_servico.TestServico

# python -m unittest discover (roda todos os testes)
