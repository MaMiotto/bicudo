import unittest
from endereco import Endereco

class TestEndereco(unittest.TestCase):
    
    def setUp(self):
        self.endereco = Endereco("Rua Um", "310A", "apt. 101", "Barreiro", "Belo Horizonte", "MG", "31333-333")
        
    def test_troca_endereco(self):
        self.endereco.altera_endereco("Rua Dois", "310B", "apt. 300", "Centro", "BH", "MG", "31333-000")
        self.assertEquals("Rua Dois",self.endereco.logradouro)
        self.assertEquals("310B",self.endereco.numero)
        self.assertEquals("apt. 300",self.endereco.complemento)
        self.assertEquals("Centro",self.endereco.bairro)
        self.assertEquals("BH",self.endereco.cidade)
        self.assertEquals("MG",self.endereco.estado)
        self.assertEquals("31333-000",self.endereco.cep)
        
    def test_pega_item_endereco(self):
        logradouro,numero,complemento,bairro,cidade,estado,cep = self.endereco.pega_itens_endereco()
        self.assertEquals("Rua Um",logradouro)
        self.assertEquals("310A",numero)
        self.assertEquals("apt. 101",complemento)
        self.assertEquals("Barreiro",bairro)
        self.assertEquals("Belo Horizonte",cidade)
        self.assertEquals("MG",estado)
        self.assertEquals("31333-333",cep)
        
    def test_mostra_endereco(self):
        string_teste = "Endereco:\n"+self.endereco.logradouro+" N."+self.endereco.numero+" - complemento: "+self.endereco.complemento+"\nBairro: "+self.endereco.bairro+" "+self.endereco.cidade+" "+self.endereco.estado+" - CEP "+self.endereco.cep
        self.assertEquals(self.endereco.pega_endereco(),string_teste)
        
if __name__ == '__main__':
    unittest.main()

# Como rodar o teste: python3 -m unittest teste_endereco.TestEndereco (nome_do_arquivo.nome_da_calsse_de_teste)

# Como rodar o teste (verbose): python3 -m unittest -v teste_endereco.TestEndereco

# python -m unittest discover (roda todos os testes)
