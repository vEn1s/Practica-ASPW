interface IPaciente {
    id: number,
    Nombre: string,
    Identificacion: number
}

interface ITipoExamen {
    id: number,
    Descripcion: string,
    Indicaciones: string
}

interface IResultado {
    id: number,
    idPaciente: number,
    idTipoExamen: number,
    ResultadosE: string,
    ValorP: number
    Observaciones: string
}


const Pacientes: IPaciente[] = [
    { id: 1, Nombre: "Juan", Identificacion: 1234123412 },
    { id: 2, Nombre: "Manuel", Identificacion: 1234112341 },
    { id: 3, Nombre: "Marcos", Identificacion: 12314123 },
    { id: 4, Nombre: "Anderi", Identificacion: 1231234123 },
    { id: 5, Nombre: "Felipe", Identificacion: 123412344 }
]


const TipoExamen: ITipoExamen[] = [
    { id: 1, Descripcion: 'Examen de Sangre', Indicaciones: 'Ayunar durante 8 horas antes del examen.', },
    { id: 2, Descripcion: 'Examen de Orina', Indicaciones: 'Recoger una muestra de orina en la mañana y evitar alimentos que puedan alterar el color de la orina.' },
    { id: 3, Descripcion: 'Examen de Colesterol', Indicaciones: 'Ayunar durante 12 horas antes del examen y evitar alimentos grasos en las 24 horas previas.' },
    { id: 4, Descripcion: 'Examen de Glucosa', Indicaciones: 'Ayunar durante 8 horas y evitar el consumo de alcohol en las 24 horas previas al examen.' },
    { id: 5, Descripcion: 'Examen de Función Hepática', Indicaciones: 'No se requiere preparación especial, pero se recomienda evitar el alcohol y los medicamentos que puedan afectar los resultados.' },
];

const Resultados: IResultado[] = [
    {id: 1, idPaciente: 101, idTipoExamen: 1, ResultadosE: 'Nivel de glóbulos rojos dentro del rango normal.', ValorP: 5.2, Observaciones: 'Resultado normal.' },
    {id: 2, idPaciente: 102, idTipoExamen: 2, ResultadosE: 'Proteínas en orina elevadas.', ValorP: 150, Observaciones: 'Posible indicio de problemas renales. Se recomienda realizar un análisis adicional.'},
    {id: 3, idPaciente: 103, idTipoExamen: 3, ResultadosE: 'Colesterol total ligeramente elevado.', ValorP: 220, Observaciones: 'Se recomienda consultar con un especialista para evaluar riesgos cardiovasculares.' },
    {id: 4, idPaciente: 104, idTipoExamen: 4, ResultadosE: 'Nivel de glucosa en sangre dentro del rango normal.', ValorP: 90, Observaciones: 'Resultado normal.' },
    {id: 5, idPaciente: 105, idTipoExamen: 5, ResultadosE: 'Enzimas hepáticas ligeramente elevadas.', ValorP: 45, Observaciones: 'Revisión adicional sugerida para evaluar la función hepática.' },
];

export  {IPaciente, ITipoExamen, IResultado, Pacientes, TipoExamen, Resultados}