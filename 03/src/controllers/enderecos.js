const { buscarEndereco } = require('utils-playground');
const fs = require('fs/promises');

const procurarEndereco = async (req, res) => {
    const { cep } = req.params
    try {
        const lista = JSON.parse(await fs.readFile('./src/enderecos.json'))

        let cepLista = lista.find(endereco => endereco.cep.replace('-', '') === cep)

        if (cepLista) {
            return res.json('CEP já existe')

        } else {
            const adress = await buscarEndereco(cep)

            lista.push(adress)
            await fs.writeFile('./src/enderecos.json', JSON.stringify(lista))
        }

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    procurarEndereco
}