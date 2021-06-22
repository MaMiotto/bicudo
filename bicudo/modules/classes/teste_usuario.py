import unittest
from endereco import Endereco
from usuario import Usuario

class TestUsuario(unittest.TestCase):
    
    def setUp(self):
        self.endereco = Endereco("Rua Um", "310A", "apt. 101", "Barreiro", "Belo Horizonte", "MG", "31333-333")
        self.usuario = Usuario(10,"Joao","Pedro","000.000.000-01","01/01/2000","Masculino","(31)99999-9999","jp@x.com",self.endereco)
        
    def test_altera_usuario(self):
        self.usuario.altera_usuario("Maria", "Jose", "111.000.000-01", "01/12/1999", "Feminino", "(31)91111-1111", "mj@x.com", self.endereco)
        self.assertEquals("Maria",self.usuario.primeiro_nome)
        self.assertEquals("Jose",self.usuario.segundo_nome)
        self.assertEquals("111.000.000-01",self.usuario.cpf)
        self.assertEquals("01/12/1999",self.usuario.data_nascimento)
        self.assertEquals("Feminino",self.usuario.genero)
        self.assertEquals("(31)91111-1111",self.usuario.telefone)
        self.assertEquals("mj@x.com",self.usuario.email)
        
    def test_pega_item_usuario(self):
        logradouro,numero,complemento,bairro,cidade,estado,cep = self.endereco.pega_itens_endereco()
        id_usuario, primeiro_nome, segundo_nome, cpf, data_nascimento, genero, telefone, email, endereco = self.usuario.pega_item_usuario()
        self.assertEquals(10,id_usuario)
        self.assertEquals("Joao",primeiro_nome)
        self.assertEquals("Pedro",segundo_nome)
        self.assertEquals("000.000.000-01",cpf)
        self.assertEquals("01/01/2000",data_nascimento)
        self.assertEquals("Masculino",genero)
        self.assertEquals("(31)99999-9999",telefone)
        self.assertEquals("jp@x.com",email)
        self.assertEquals(self.endereco,endereco)
        
    def test_pega_endereco(self):
        endereco = self.usuario.pega_endereco()
        self.assertEquals(endereco,self.endereco)
        
    def test_pega_dados(self):
        texto = "Joao Pedro\nCPF: 000.000.000-01\nData de nascimento: 01/01/2000\nGenero: Masculinoe-mail: jp@x.com - telefone: (31)99999-9999"
        self.assertEquals(texto,self.usuario.pega_dados())
        
if __name__ == '__main__':
    unittest.main()

# Como rodar o teste: python3 -m unittest teste_usuario.TestUsuario (nome_do_arquivo.nome_da_calsse_de_teste)

# Como rodar o teste (verbose): python3 -m unittest -v teste_usuario.TestUsuario

# python -m unittest discover (roda todos os testes)
