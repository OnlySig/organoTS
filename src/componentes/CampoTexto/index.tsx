import './CampoTexto.css'

interface CampoTextoProps {
    placeholder: string,
    aoAlterado: (valor: string) => void,
    valor: string,
    label: string,
    obrigatorio: boolean
}

const CampoTexto = ({ aoAlterado, label, obrigatorio, placeholder, valor } :CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto