export interface IColaborador {
    nome: string,
    cargo: string,
    imagem: string,
    time?: string
}

// IColaborador é .ts e nâo .tsx pois IColaborador nâo é um componente para usar o jsx.