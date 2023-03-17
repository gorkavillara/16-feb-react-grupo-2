import React, { useEffect, useState } from "react";

const frase = "Las mujeres ya no lloran las mujeres programan";

const Concurso = () => {
  const [fraseCorrecta, setFraseCorrecta] = useState("")
  const [fraseRestante, setFraseRestante] = useState(frase)
  const [inicio, setInicio] = useState<Date | undefined>()

  useEffect(() => {
    if (fraseRestante === "" && inicio) {
      const ahora = new Date()
      alert(
        `Has tardado: ${(ahora.getTime() - inicio.getTime()) / 1000} s!`
      )
    }
  }, [fraseRestante, inicio])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ultimaLetraIntroducida = event.target.value.at(-1)
    const primeraLetraRestante = fraseRestante.at(0)

    if (ultimaLetraIntroducida !== primeraLetraRestante) return
    if (fraseCorrecta === "") {
      setInicio(new Date())
    }

    setFraseCorrecta(prev => `${prev}${ultimaLetraIntroducida}`)
    setFraseRestante(prev => prev.substring(1, prev.length))
  }

  return (
    <div>
      <p>
        <span style={ { color: "green" } }>{fraseCorrecta}</span>
        <span>{fraseRestante}</span>
      </p>
      <input type="text" value={fraseCorrecta} onChange={handleChange} />
    </div>
  );
};

export default Concurso;
