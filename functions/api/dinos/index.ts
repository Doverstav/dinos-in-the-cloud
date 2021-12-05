export enum Dinos {
  Stegosaurus = "Stegosaurus",
  Velociraptor = "Velociraptor",
  TyrannosaurusRex = "Tyrannosaurus Rex",
  Triceratops = "Triceratops",
}

export interface dinoResponse {
  dino: Dinos
}

export const onRequestGet = () => {
  const dinos = ["Velociraptor", "Stegosaurus", "Tyrannosaurus Rex", "Triceratops"]
  const response = {
    dino: dinos[Math.round(Math.random() * dinos.length)]
  }

  return new Response(JSON.stringify(response), { headers: { "Content-Type": "application/json" } })
}
