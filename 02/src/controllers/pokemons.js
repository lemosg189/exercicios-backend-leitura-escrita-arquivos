const { listarPokemons, detalharPokemon } = require('utils-playground')

const listaDePokemons = async (req, res) => {
    try {
        const lista = await listarPokemons(10)
        return res.json(lista.results)
    } catch (error) {
        console.log(error)
    }
}

const consultarPokemons = async (req, res) => {
    const { nomeOuIdDoPokemon } = req.params

    try {
        const detalhar = await detalharPokemon(nomeOuIdDoPokemon)

        const { id, name, height, weight, base_experience, forms, abilities, species } = detalhar
        return res.json({ id, name, height, weight, base_experience, forms, abilities, species })

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    listaDePokemons,
    consultarPokemons
}