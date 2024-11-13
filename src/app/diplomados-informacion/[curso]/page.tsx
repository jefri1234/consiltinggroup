"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import Curso from './Curso'



function Page() {
  const { curso } = useParams();


  //si curso es igual a 1 retorna un texto 
  if (curso === '1') {
    return <Curso nombre='SEGURIDAD SALUD EN EL TRABAJO' objetivoDiplomado='Brindar conocimientos teóricos y prácticos sobre la
            normativa de SST y su debida Implementación, además de
            desarrollar herramientas para gestionar de manera
            efectiva las inspecciones de SUNAFIL y auditorías de SST.
            Desarrollar herramientas de diagnóstico y evaluación de
            indicadores ligados a la gestión de SST. Realizar
            diagnósticos de higiene ocupacional. Desarrollar
            metodologías de BSC.'
      perfilParticipante='El programa está dirigido a directores, gerentes, jefes,
            supervisores y profesionales en general que estén
            interesados en gestionar de manera eficiente la seguridad
            y salud en sus organizaciones.'
      imgProfe='/icons-profes/ing-sst.jpeg'
      nombreProfe='ING. MARCOS ANTONIO COLONIA ROMERO'
      descripcionProfesor='Ingeniero Industrial y consultor en sistemas integrados de
            gestión, certificado en ISO 45001, ISO 9001, ISO 37001, ISO
            14001, ISO 31000, OHSAS 18001, SA 8000:2014, con 13 años
            de experiencia en el sector industrial, retail, hidrocarburos y de
            servicios, liderando seguridad y salud integral, ambiental,
            calidad, proyectos, mantenimiento, producción y operaciones.
            Con MBA (UTP) en Administración de Empresas, Máster en
            Prevención de Riesgos Laborales, Diplomado en Habilidades
            Directivas en la Universidad ESAN.'
       linkWatsap='https://bit.ly/3xbZ9WQ'     
    >
      <div className='flex flex-col gap-1 items-center'>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo I</h3>
          <p className="mt-1">NORMATIVA LEGAL VIGENTE APLICABLE A LA SEGURIDAD Y SALUD EN EL TRABAJO</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo II</h3>
          <p className="mt-1">SISTEMA DE GESTION DE SEGURIDAD Y SALUD EN EL TRABAJO </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo III</h3>
          <p className="mt-1">IDENTIFICACIÓN DE PELIGROS, EVALUACION DE RIESGOS Y MEDIDAS DE CONTROL (IPERC)</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo IV</h3>
          <p className="mt-1">PROGRAMA DE SEGUIRDAD Y SALUD EN EL TRABAJO ESTÁNDARES DE SEGURIDAD</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo V</h3>
          <p className="mt-1">CULTURA DE SST/SEGURIDAD BASADA EN EL COMPORTAMIENTO (SBC)</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VI</h3>
          <p className="mt-1">HIGIENE INDUSTRIAL, E INVESTIGACIÓN DE ACCIDENTES</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VII</h3>
          <p className="mt-1">INSPECCIONES INTERNAS - FISCALIZACIÓN Y AUDITORÍAS DE SEGURIDAD Y SALUD EN EL TRABAJO DE SUNAFIL</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VIII</h3>
          <p className="mt-1">IMPLEMENTACIÓN Y AUDITORIA DE SGSST BASADO EN LA ISO 45001:2018</p>
        </div>
      </div>

    </Curso >;

  }
  if (curso === '2') {
    return <Curso
      nombre='Supervisor Lider SSOMA'
      objetivoDiplomado='Desarrollar en el participante la competencia de
identificar y aplicar los conceptos teóricos y
prácticos, que son necesarios para el momento de
integrarse al mercado laboral contable.'
      perfilParticipante='Profesionales, técnicos y estudiantes de diversas
carreras que posean la necesidad de capacitarse en
forma práctica y rápida en las técnicas más comunes
relacionadas en las área de seguridad, salud y medio
ambiente, y que les permitan entrar a laborar'
      imgProfe='/icons-profes/ing-sst.jpeg'
      nombreProfe='ING. MARCOS ANTONIO COLONIA ROMERO'
      descripcionProfesor='Ingeniero Industrial y consultor en sistemas integrados de
      gestión, certificado en ISO 45001, ISO 9001, ISO 37001, ISO
      14001, ISO 31000, OHSAS 18001, SA 8000:2014, con 13 años
      de experiencia en el sector industrial, retail, hidrocarburos y de
      servicios, liderando seguridad y salud integral, ambiental,
      calidad, proyectos, mantenimiento, producción y operaciones.
      Con MBA (UTP) en Administración de Empresas, Máster en
      Prevención de Riesgos Laborales, Diplomado en Habilidades
      Directivas en la Universidad ESAN.'
      linkWatsap='https://bit.ly/3TQdJMt'
    >
      <div className='flex flex-col gap-1 items-center'>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo I</h3>
          <p className="mt-1">Política y Organizacion del Sistema de Gestión en Seguridad y Salud en el Trabajo de Acuerdo A la Ley 29783</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo II</h3>
          <p className="mt-1">Planificación de la Actividad Preventiva </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo III</h3>
          <p className="mt-1">Identifiación de Peligros, Evaluación de Riesgos y Controles operacionales (IPERC)</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo IV</h3>
          <p className="mt-1">Plan de Respuestas ante Emergencias, Almacenamiento, Manipuleo y Transporte de Materiales Peligrosos</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo V</h3>
          <p className="mt-1">Supervisión y Liderazgo</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VI</h3>
          <p className="mt-1">Investigación y Reportes de Incidentes, Accidentes y Enfermedades Ocupacionales</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VII</h3>
          <p className="mt-1">Auditor Líder y Autitoría Interna:Sistema de Gestion de SST de acuerdo a la Ley 29783</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VIII</h3>
          <p className="mt-1">Auditor Líder y Auditoría Interna:ISO 45001 y medio ambiente ISO 14001-2015</p>
        </div>
      </div>
    </Curso>
  }
  if (curso === '3') {
    return <Curso
      nombre='SISTEMA INTEGRADO DE ADMINISTRACIÓN FINANCIERA (SIAF)'
      objetivoDiplomado='Registrar, Analizar, Interpretar las diferentes Operaciones
Administrativas, Presupuestales registradas en el DEMO SIAF
incluyendo el registro de información en un entorno local.'
      perfilParticipante='A servidores públicos
que laboran entidades
del gobierno nacional,
regional y local así
c o m o a s e s o r e s,
c o n s u l t o r e s y
estudiantes'
      imgProfe=''
      nombreProfe=''
      descripcionProfesor=''
      linkWatsap='https://bit.ly/3Yhsudu'
    >
      <div className='flex flex-col gap-1 items-center'>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo I</h3>
          <p className="mt-1">MARCO JURÍDICO, PRESUPUESTAL Y FINANCIERO DE ENTIDADES PÚBLICAS </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo II</h3>
          <p className="mt-1">MÓDULO PRESUPUESTAL SIAF <span className='text-blue-400'>(NUEVO)</span> ACCESO VÍA WEB Y APLICACIONES EN EL SIAF ADMINISTRATIVO</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo III</h3>
          <p className="mt-1">MÓDULO ADMINISTRATIVO APLICACIONES EN EL SIAF</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo IV</h3>
          <p className="mt-1">MÓDULO TESORERIA APLIACIONES EN EL SIAF</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo V</h3>
          <p className="mt-1">MÓDULO CONTABLE WEB Y CLIENTE</p>
        </div>
      </div>
    </Curso>
  }
  if (curso === '4') {
    return <Curso
    nombre='ASISTENTE DE PLANILLA Y LEGISLACIÓN LABORAL'
    objetivoDiplomado='Al finalizar el curso, el participante estará en condiciones
de construir, analizar y gestionar la planilla de una empresa.'
    perfilParticipante='Profesionales de las carreras de
administración, contabi l idad,
economía entre otras profesiones
que desean especializarse en la
gestión de planillas, egresados y
estudiantes universitarios y técnicos.'
    imgProfe='/icons-profes/lucia-sacramento.jpg'
    nombreProfe='CPC. LUCIA SACRAMENTO JIMENEZ'
    descripcionProfesor='Titulada y colegiada en Contabilidad con pos grado
en la UPC. Especialista en compensaciones lo que me
permite optimizar costos y reducir contingencias
legales. Actualmente trabaja en Industria San Miguel
- ISM, con conocimientos en legislación laboral,
Reclutamiento y Selección, Bienestar Social,
Administración de personal y análisis de cuentas
contables, con conocimientos en 5S, TPM, SAP, ISO
9001, ISO 14001, ISO 45001. '
    linkWatsap='https://api.whatsapp.com/send?phone=51991403402&text=Hola,%20me%20puedes%20informar%20sobre%20el%20Diplomado%20Especializado%20Gratuito%20en%20%E2%80%9CGesti%C3%B3n%20de%20Planillas%20y%20Legislaci%C3%B3n%20Laboral%E2%80%9D,%20mi%20nombre%20es:'
    
    >
       <div className='flex flex-col gap-1 items-center'>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo I</h3>
          <p className="mt-1">LEGISLACION LABORAL</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo II</h3>
          <p className="mt-1">EVALUACIÓN Y DISEÑOS SALARIALES </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo III</h3>
          <p className="mt-1">REGÍMENES PENSIONARIOS Y APORTES DEL EMPLEADOR</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo IV</h3>
          <p className="mt-1">ADMINISTRACIÓN LABORAL I</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo V</h3>
          <p className="mt-1">ADMINISTRACIÓN LABORAL II</p>
        </div>
      
      </div>
    </Curso>
  }
  if (curso === '5') {
    return <Curso
      nombre='AUDITORIA Y CONTROL GUBERNAMENTAL'
      objetivoDiplomado='Desarrollar en el participante la competencia de
identificar y aplicar los conceptos teóricos y
prácticos, que son necesarios para el momento de
integrarse al mercado laboral en el sector público y
privado.'
      perfilParticipante='Funcionarios y servidores públicos de distintas áreas
como: planificación, inversión, control, presupuesto,
contrataciones, recursos humanos. Profesionales,
técnicos y estudiantes de diversas carreras que
posean la necesidad de capacitarse en forma
práctica'
      imgProfe=''
      nombreProfe='CPC. JUAN CARLOS
MORENO PONCE'
      descripcionProfesor='Especialista en control interno, auditoría y control
gubernamental (con 11 años de experiencia)
ejecutando, dirigiendo y supervisando, auditorías
nancieras, auditorías de cumplimiento, servicios
relacionados, implementación y funcionamiento del
sistema de control interno, servicios de control
simultáneo y servicios de control especíco a hechos
con presunta irregularidad, en diversos procesos
vinculados a: contrataciones, obras públicas,
programas sociales, tributación, gestión de la
propiedad mobiliaria e inmobiliaria Estatal, etc.
Contador Publico Colegiado, con maestría en Gestión
Publica y docente en Escuelas de Pos Grados.'
    linkWatsap='https://bit.ly/3vgt27e'
    >
      <div className='flex flex-col gap-1 items-center'>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo I</h3>
          <p className="mt-1">Marco Conceptual y normativo del Sistema Nacional de control -SNC y control gubernamental</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo II</h3>
          <p className="mt-1">Servicios de Control previo, simultaneo (control concurrente,visita de control y orientacion de oficio)</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo III</h3>
          <p className="mt-1">Implementacion del Sistema de Control de Control Interno y Gestion de Riesgos en las entidades públicas</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo IV</h3>
          <p className="mt-1">Planificacion y ejecución de la Auditoria de Cumplimiento y del Servicio de Control Especifico a hechos con presunta Irregularidad</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo V</h3>
          <p className="mt-1">Elaboracion del Informe de Auditoria de Cumplimiento y del servicio de control especifico a hechos con presunta Irregularidad </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VI</h3>
          <p className="mt-1">HIGIENE INDUSTRIAL, E INVESTIGACIÓN DE ACCIDENTES</p>
        </div>
      </div>
    </Curso>
  }
  if (curso === '6') {
    return <Curso
      nombre='ANALISTA DE RECURSO HUMANOS (RR.HH)'
      objetivoDiplomado='Al finalizar el curso, el participante estará en
condiciones de construir, analizar y gestionar el
personal de una empresa.'
      perfilParticipante='Profesionales técnicos, estudiantes,
universitarios y publico en general
que desean especializarse en la
gestión de planillas, egresados y
estudiantes universitarios y técnicos'
      imgProfe=''
      nombreProfe='Dr.FREDDY FREDRICH CABELLO VICENTE'
      descripcionProfesor='Doctor en administración y Maestro en
Administración y Dirección de Empresas, docente en
escuelas de pre y pos grado. Actualmente es Gerente
General de la empresa Apiviall. Con publicaciones en
revistas científicas con el tema: La cultura tributaria
como un instrumento para combatir la evasión
tributaria en las mypes. Es consultor en temas de
recursos humanos y gestión de empresas '
linkWatsap=' https://bit.ly/4dP5BSF '
    >
      <div className='flex flex-col gap-1 items-center'>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo I</h3>
          <p className="mt-1">EL PLANTEAMIENTO ESTRATEGICO Y EL PROCESO DE RECLUTAMIENTO Y SELECCION DE PERSONAL</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo II</h3>
          <p className="mt-1">ANALISIS DE LA ESTRUCTURA ORGANIZACIONAL IDENTIFICACIÓN DESCRIPCIÓN Y ANALISIS DE PUESTOS DE TRABAJO</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo III</h3>
          <p className="mt-1">FASES DEL PROCESO DE RECLUTAMIENTO Y SELECCIÓN DE PERSONAL</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo IV</h3>
          <p className="mt-1">TIPOS DE ENTREVISTA, ENTREVISTA POR COMPETENCIAS ESTRATEGICA DE EVALUACION DE COMPETENCIAS METOLOGIA STAR</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo V</h3>
          <p className="mt-1">ANALISIS DE IMFORMES PSICOLABORALES. R & S ¿GASTO O INVERSIONES? TRES MEDIDADAS BÁSICAS DEL PROCESO R & S </p>
        </div>
      </div>
    </Curso>
  }
  if (curso === '7') {
    return <Curso
      nombre='GESTIÓN DE RECURSOS HUMANOS'
      objetivoDiplomado='Facilitar al profesional que se desempeña en el área de
Recursos Humanos, con las habilidades y los
conocimientos necesarios que le permitan
desempeñarse óptimamente y acorde con las
necesidades y requerimientos de las empresas de hoy'
      perfilParticipante='Asistentes, analistas, supervisores, coordinadores,
responsables de procesos específicos de administración
de personal y universitarios y técnicos de los últimos
ciclos. '
      imgProfe='/icons-profes/fernando-castillo.jpg'
      nombreProfe='FERNANDO CASTILLO G.'
      descripcionProfesor='Consultor Senior de Recursos Humanos,
Trabajo como Jefe de Gestión Humana -
Industria San Miguel, Confipetrol Andina
S.A, Maestría en Dirección Estratégica del
Factor Humano - UPC, Especialista en
Community Manager y Coaching Personal,
Auditor de Gestión de Recursos Humano -
AMB BUSINESS Certificación Personal
Development Analysis - HS LATIN
AMERICA.'
linkWatsap=' https://bit.ly/4aQ4u3O '
    >
      <div className='flex flex-col gap-1 items-center'>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo I</h3>
          <p className="mt-1">PLANEAMIENTO ESTRATÉGICO EN LA NUEVA NORMALIDAD</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo II</h3>
          <p className="mt-1">NUEVAS REGULACIONES LABORALES</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo III</h3>
          <p className="mt-1">LEVANTAMIENTO DE PERFIL Y DESCRIPCIÓN DE PUESTO </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo IV</h3>
          <p className="mt-1">ATRACCIÓN, SELECCIÓN Y FIDELIZACIÓN DEL TALENTO HUMANO
          </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo V</h3>
          <p className="mt-1">PLAN DE CAPACITACION Y DESARROLLO DEL TALENTO</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VI</h3>
          <p className="mt-1">GESTIÓN DEL DESEMPEÑO E INDICADORES DE GESTIÓN
          </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VII</h3>
          <p className="mt-1">RECURSOS HUMANOS AGIL Y GESTIÓN DEL CAMBIO</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VIII</h3>
          <p className="mt-1">SEGURIDAD, SALUD Y BIENESTAR EN EL TRABAJO</p>
        </div>
      </div>
    </Curso>
  }
  if (curso === '8') {
    return <Curso
      nombre='GESTIÓN PÚBLICA MUNICIPAL Y REGIONAL'
      objetivoDiplomado='Desarrollar el proceso de modernización de la
gestión pública a fin de mejorar el conocimiento
de los servidores respecto de las competencias,
funciones y atribuciones de la administración
pública. Promover la implantación de las reformas
en todos los ámbitos de la gestión pública.'
      perfilParticipante='Servidores de las entidades de los gobiernos
regionales y gobiernos locales; así como a las
personas que requieran conocer la gestión pública y
desean laborar.'
      imgProfe='/icons-profes/eduardo-maximo-ulloa.jpg'
      nombreProfe='ECON. EDUARDO MÁXIMO ULLOA GONZALES'
      descripcionProfesor='Titulado por la Universidad de Lima, egresado de la
Maestría en Regulación de Servicios Públicos
UPC/Escuela de Postgrado Laureates, que cuenta
con una acreditación internacional en CQRM:
Certicación en Gestión Cuantitativa del Riesgo.
Experiencia en la Formulación, Evaluación,
Implementación, Supervisión y Gestión de
Proyectos Públicos y Privados bajo un enfoque de “Cadena de Valor”, he liderado estudios cuantitativos y
cualitativos: Es experto en Determinación de Modelos
de Negocio, Precios y Tarifas Reguladas, entre otras de
Gas Natural, Tarifas de compartición de infraestructuras
eléctricas, Proyectos de Telecomunicaciones'
linkWatsap='https://api.whatsapp.com/send?phone=51991403402&text=Hola,%20me%20puedes%20informar%20sobre%20el%20Diplomado%20Especializado%20Gratuito%20en%20“Gestión%20Pública%20Municipal%20y%20Regional”,%20mi%20nombre%20es:'
    >
      <div className='flex flex-col gap-1 items-center'>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo I</h3>
          <p className="mt-1">: Sistema Nacional de Programación Multianual y Gestión de Inversiones Públicas Locales</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo II</h3>
          <p className="mt-1"> Formulación y Evaluación de Proyectos e IOARRs en Gestión Pública Local</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo III</h3>
          <p className="mt-1">Gestión de las Políticas Públicas Municipales en el Perú </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo IV</h3>
          <p className="mt-1">Gestión Articulada Regional y Municipal de los Sistemas Administrati
          </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo V</h3>
          <p className="mt-1">Gestión por Resultados Regional y Municipal</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VI</h3>
          <p className="mt-1"> Modalidad de Obras por Impuestos en la Gestión Pública Local (I y II). 
          </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-900 text-white shadow-md text-center w-full">
          <h3 className="font-bold text-xl text-yellow-300">Módulo VII</h3>
          <p className="mt-1"> Sistema Nacional de Planeamiento Público y la Gestión Pública Local</p>
        </div>
      </div>
    </Curso>
  }
  if (curso === '9') {
    return <Curso
    nombre='GESTIÓN DE LA LOGÍSTICA Y OPERACIONES'
    objetivoDiplomado='Comprender los conceptos fundamentales, las
prácticas más comunes y las técnicas analíticas
usadas, relacionadas con los procesos que
constituyen los sistemas de operaciones de
producción de bienes y servicios, analizando las
etapas de planeamiento, organización, dirección
y control.'
    perfilParticipante='Profesionales que se están desempeñando en el área
de operaciones de la empresa. Así como ejecutivos
que tienen relación indirecta con esta área,
considerando que el área de operaciones es la que
consume la mayor cantidad de recursos y juega un
rol fundamental en la competitividad y rentabilidad
de las empresas. Universitarios y técnicos.'
    imgProfe='/icons-profes/carlos-peralta-vega.png'
    nombreProfe='ING.CARLOS PERALTA VEGA'
    descripcionProfesor='Ejecutivo Senior en Supply Chain Management con mas
de 20 años de experiencia y Docente a nivel de Post
Grado, Consultor y ejecutivo con amplia experiencia en las
áreas de Supply Chain, Logística, Operaciones, Comercio
Exterior y Sistemas Integrados de Gestión. Ingeniero
Industrial bilingüe con post grados en Operaciones y
Logística. '
linkWatsap='https://bit.ly/3NsMmnn '
    >

    </Curso>
  }

  return (
    <div>
      el curso no fue encontrado asi que <span className='text-blue-800 text-2xl font-bold'>CURSO NO ENCONTRADO</span>
    </div>
  )
}

export default Page;
