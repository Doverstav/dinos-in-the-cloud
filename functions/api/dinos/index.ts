export const onRequestGet = () => {
  const dinos = ["Velociraptor", "Stegosaurus", "Tyrannosaurus Rex", "Triceratops"]
  const response = {
    dino: dinos[Math.random() * dinos.length]
  }

  //return new Response(JSON.stringify(response), { headers: { "Content-Type": "application/json" } })
  return new Response(JSON.stringify({dino: "T-Rex"}), { headers: { "Content-Type": "application/json" } })
}
