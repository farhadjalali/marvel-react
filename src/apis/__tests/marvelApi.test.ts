import {fetchCharacterById, fetchCharactersList} from "../marvelApi";

let heroId = 0

test('Fetch Characters List must be 20 items', async () => {
    const response = await fetchCharactersList()
    const res = await response.json()
    const characters = res.data.results
    expect(characters.length).toBe(20)

    heroId = characters[0].id
})

test('Fetch Character by ID', async () => {
    const response = await fetchCharacterById(heroId)
    const res = await response.json()
    const characters = res.data.results
    expect(characters.length).toBe(1)
})
