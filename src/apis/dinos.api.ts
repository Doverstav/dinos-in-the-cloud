export const fetchDino = async () => {
  try {
    console.log('Fetching dino')
    const response = await fetch('/api/dinos')
    console.log(await response.json())
  } catch (error) {
    console.error(error)
  }
}