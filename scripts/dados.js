let base = [
    // ... seus dados anteriores ...

    // Novos pontos turísticos
    {
        nome: "Bonito",
        descricao: "Um paraíso para os amantes da natureza, com rios cristalinos, grutas e cachoeiras.",
        regiao: "Centro-Oeste",
        tipo: "Natureza",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Abismo_Anhumas%2C_Bonito%2C_MS.JPG/640px-Abismo_Anhumas%2C_Bonito%2C_MS.JPG",
        link: "https://pt.m.wikipedia.org/wiki/Bonito_(Mato_Grosso_do_Sul)"
    },
    {
        nome: "Ouro Preto",
        descricao: "Uma cidade histórica com rica arquitetura colonial e museus.",
        regiao: "Sudeste",
        tipo: "Histórico",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG/378px-Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG",
        link: "https://pt.m.wikipedia.org/wiki/Ouro_Preto"
    },
    {
        nome: "Foz do Iguaçu",
        descricao: "Lar das Cataratas do Iguaçu, uma das maiores quedas d'água do mundo.",
        regiao: "Sul",
        tipo: "Natureza",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Foz_do_Igua%C3%A7u_-_panoramio.jpg/540px-Foz_do_Igua%C3%A7u_-_panoramio.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Foz_do_Igua%C3%A7u"
    },
    {
        nome: "Paraty",
        descricao: "Uma cidade histórica com ruas de paralelepípedos, casarões coloniais e praias paradisíacas.",
        regiao: "Sudeste",
        tipo: "Histórico",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Paraty_05.JPG/540px-Paraty_05.JPG",
        link: "https://pt.m.wikipedia.org/wiki/Paraty"
    },
    {
        nome: "Lençóis Maranhenses",
        descricao: "Um dos maiores campos de dunas do mundo, com lagoas cristalinas entre as dunas de areia branca.",
        regiao: "Nordeste",
        tipo: "Natureza",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Len%C3%A7%C3%B3is_Maranhenses_2018.jpg/550px-Len%C3%A7%C3%B3is_Maranhenses_2018.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Parque_Nacional_dos_Len%C3%A7%C3%B3is_Maranhenses"
    },
    {
        nome: "Alter do Chão",
        descricao: "Conhecida como o Caribe brasileiro, com praias de água doce e paisagens paradisíacas.",
        regiao: "Norte",
        tipo: "Natureza",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Alter_do_Ch%C3%A3o_486a.jpg/500px-Alter_do_Ch%C3%A3o_486a.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Alter_do_Ch%C3%A3o_(Santar%C3%A9m)"
    },
    {
        nome: "Chapada dos Veadeiros",
        descricao: "Uma das áreas de proteção ambiental mais importantes do Brasil, com paisagens exuberantes e rica biodiversidade.",
        regiao: "Centro-Oeste",
        tipo: "Natureza",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Chapada_Veadeiros%2C_Alto_Paraiso_GO_-_40252529604.jpg/580px-Chapada_Veadeiros%2C_Alto_Paraiso_GO_-_40252529604.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Parque_Nacional_da_Chapada_dos_Veadeiros"
    },
    {
        nome: "Fernando de Noronha",
        descricao: "Um arquipélago paradisíaco, com praias cristalinas e vida marinha abundante.",
        regiao: "Nordeste",
        tipo: "Natureza",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Forte_de_Nossa_Senhora_dos_Rem%C3%A9dios_de_Fernando_de_Noronha02.jpg/540px-Forte_de_Nossa_Senhora_dos_Rem%C3%A9dios_de_Fernando_de_Noronha02.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Fernando_de_Noronha"
    },
    {
        nome: "Pelourinho",
        descricao: "Centro histórico de Salvador, com casarões coloniais coloridos e muita história.",
        regiao: "Nordeste",
        tipo: "Histórico",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Largo_do_Pelourinho_-_Salvador.JPG/600px-Largo_do_Pelourinho_-_Salvador.JPG",
        link: "https://pt.m.wikipedia.org/wiki/Pelourinho_(Salvador)"
    },
    {
        nome: "Jalapão",
        descricao: "Região com paisagens exuberantes, dunas, cachoeiras e rios cristalinos.",
        regiao: "Norte",
        tipo: "Natureza",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Terras_Altas_do_Brasil.jpg/590px-Terras_Altas_do_Brasil.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Parque_Estadual_do_Jalap%C3%A3o"
    },
    {
        nome: "Pantanal",
        descricao: "A maior planície inundável do mundo, com uma rica biodiversidade.",
        regiao: "Centro-Oeste",
        tipo: "Natureza",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/As_montanhas_da_plan%C3%ADcie.jpg/560px-As_montanhas_da_plan%C3%ADcie.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Pantanal"
    },
    {
        nome: "Manaus",
        descricao: "Portão de entrada para a Amazônia, com rica cultura e história.",
        regiao: "Norte",
        tipo: "Cultural",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Manaus_amazonas.jpg/312px-Manaus_amazonas.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Manaus"
    },
    {
        nome: "Recife",
        descricao: "Uma cidade vibrante, com belas praias, rica cultura e história.",
        regiao: "Nordeste",
        tipo: "Cultural",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Antonio_Vaz_island_-_Recife%2C_Pernambuco%2C_Brazil_%28cropped%29.jpg/556px-Antonio_Vaz_island_-_Recife%2C_Pernambuco%2C_Brazil_%28cropped%29.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Recife"
    },
    {
        nome: "Curitiba",
        descricao: "Uma cidade planejada, com parques, museus e uma rica vida cultural.",
        regiao: "Sul",
        tipo: "Cultural",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Curitiba_Eixos_e_densidade_02_2006_80.JPG/556px-Curitiba_Eixos_e_densidade_02_2006_80.JPG",
        link: "https://pt.m.wikipedia.org/wiki/Curitiba"
    },
    {
        nome: "Mercado Ver-o-Peso",
        descricao: "Um dos maiores mercados públicos da América Latina, com uma variedade de produtos regionais.",
        regiao: "Norte",
        tipo: "Cultural",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Mercado_Ver-o-Peso_-_Mercado_Ver-o-Peso_-_20231223164208.jpg/440px-Mercado_Ver-o-Peso_-_Mercado_Ver-o-Peso_-_20231223164208.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Mercado_Ver-o-Peso"
    },
    {
        nome: "Ilha de Marajó",
        descricao: "A maior ilha fluvial do mundo, conhecida por suas praias, campos alagados e búfalos.",
        regiao: "Norte",
        tipo: "Natureza",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXM9eoFYT-eJjAuZHDrdwfq2Uj7GMnokaCEQ&s",
        link: "https://pt.m.wikipedia.org/wiki/Ilha_de_Maraj%C3%B3"
    },
    {
        nome: "Parque Nacional da Amazônia",
        descricao: "Uma das maiores unidades de conservação do mundo, com rica biodiversidade.",
        regiao: "Norte",
        tipo: "Natureza",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Parque-nacional-da-amazonia-7.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Parque_Nacional_da_Amaz%C3%B4nia#:~:text=O%20Parque%20Nacional%20da%20Amaz%C3%B4nia,caminho%20entre%20Manaus%20e%20Bel%C3%A9m."
    },
    {
        nome: "Fortaleza de São José de Macapá",
        descricao: "Uma fortificação histórica que oferece uma vista panorâmica da cidade.",
        regiao: "Norte",
        tipo: "Histórico",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fortifica%C3%A7%C3%A3o.jpg/400px-Fortifica%C3%A7%C3%A3o.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Fortaleza_de_S%C3%A3o_Jos%C3%A9_de_Macap%C3%A1"
    },
    {
        nome: "Praias de Alter do Chão",
        descricao: "Praias de água doce com areia branca e paisagens paradisíacas.",
        regiao: "Norte",
        tipo: "Natureza",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Alter_do_Ch%C3%A3o_486a.jpg/500px-Alter_do_Ch%C3%A3o_486a.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Alter_do_Ch%C3%A3o_(Santar%C3%A9m)#:~:text=Praias%20em%20Alter%20do%20Ch%C3%A3o,-Nas%20margens%20do&text=Existem%20tamb%C3%A9m%20praias%20menores%2C%20como,Ponta%20de%20Pedras%2C%20em%20Santar%C3%A9m."
    },
    {
        nome: "Lago de Carajás",
        descricao: "Um lago artificial formado pela barragem de Carajás, com paisagens deslumbrantes.",
        regiao: "Norte",
        tipo: "Natureza",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Carajas_Mine.jpg/360px-Carajas_Mine.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Serra_dos_Caraj%C3%A1s"
    },
    {
        nome: "Bosque da Ciência",
        descricao: "Um museu a céu aberto com diversas espécies da flora amazônica.",
        regiao: "Norte",
        tipo: "Cultural",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Instituto_de_Pesquisas_da_Amaz%C3%B4nia.JPG/440px-Instituto_de_Pesquisas_da_Amaz%C3%B4nia.JPG",
        link: "https://pt.m.wikipedia.org/wiki/Instituto_Nacional_de_Pesquisas_da_Amaz%C3%B4nia#:~:text=Bosque%20da%20Ci%C3%AAncia,-Inaugurado%20em%201&text=O%20bosque%20possui%20uma%20%C3%A1rea,e%20aos%20ecossistemas%20Amaz%C3%B4nicos%20existentes."
    },
    {
        nome: "Centrais Elétricas de Tucuruí",
        descricao: "Uma das maiores usinas hidrelétricas do mundo, com um lago artificial gigante.",
        regiao: "Norte",
        tipo: "Industrial",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Usina_de_Tucuru%C3%AD.jpg/440px-Usina_de_Tucuru%C3%AD.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Usina_Hidrel%C3%A9trica_de_Tucuru%C3%AD#:~:text=A%20Usina%20Hidrel%C3%A9trica%20de%20Tucuru%C3%AD,instalada%20de%208%20370%20MW."
    },
    {
        nome: "Cristo Redentor",
        descricao: "Cristo Redentor é uma estátua que retrata Jesus Cristo localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, com vista para parte considerável da cidade brasileira do Rio de Janeiro.",
        regiao: "Sudeste",
        tipo: "Historico,Cultural",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/440px-Christ_the_Redeemer_-_Cristo_Redentor.jpg",
        link: "https://pt.m.wikipedia.org/wiki/Cristo_Redentor"
    }
];