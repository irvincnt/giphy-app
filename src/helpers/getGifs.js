export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Vayn9iHp5MI9X8tSgXdfQWbJJK5CiHyz`

  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifsData = data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    }
  })
  
  return gifsData
}