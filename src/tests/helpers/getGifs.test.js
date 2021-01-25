import { getGifs } from "../../helpers/getGifs"


describe('Prueba con getGifs Fetch', () => {
  test('debe trar 10 elementos', async () => {
    const gifs = await getGifs('Lol')
    expect(gifs.length).toBe(10)
  })

  test('debe retornar vacío', async () => {
    const gifs = await getGifs('')
    expect(gifs.length).toBe(0)
  })
})