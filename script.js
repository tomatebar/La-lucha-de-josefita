const malla = {
  "1er Semestre": [
    "Introducción a la T.O",
    "Ética en Salud",
    "Integrado Químico Biológico",
    "Habilidades de Comunicación Oral y Escrita",
    "Introducción al Trabajo Comunitario en Salud",
    "Inglés I",
    "Psicología de la Comunicación",
    "Práctica Curricular I"
  ],
  "2do Semestre": [
    "Fundamentos para la T.O",
    "Integrado Morfología Humana",
    "Socioantropología",
    "Inglés II",
    "Inclusión Social I",
    "Curso Transversal Institucional I",
    "Electivo Formación General",
    "Práctica Curricular II"
  ],
  "3er Semestre": [
    "Modelos de Intervención en la T.O I",
    "Integrado de Fisiología Humana",
    "Educación en Salud",
    "Integrado Anatomía Funcional y Biomecánica del Aparato Locomotor",
    "Habilidades y Actividades Terapéuticas I",
    "Inclusión Social II",
    "Curso de Vida I",
    "Práctica Curricular III"
  ],
  "4to Semestre": [
    "Modelos de Intervención en T.O II",
    "Integrado Neurociencia",
    "Integrado Salud Pública",
    "Habilidades y Actividades Terapéuticas II",
    "Curso de Vida II",
    "Inclusión Social III",
    "Curso Transversal Institucional II",
    "Práctica Curricular IV"
  ],
  "5to Semestre": [
    "Examen de Competencias Tramo Básico",
    "Integrado T.O en Niños/as y Adolescentes I",
    "Integrado T.O en Adultos I",
    "Integrado T.O en Personas Mayores I",
    "Gestión en Salud",
    "Introducción al Análisis de Datos",
    "Metodología de la Investigación I",
    "Práctica Curricular V"
  ],
  "6to Semestre": [
    "Integrado T.O en Niños/as y Adolescentes II",
    "Integrado T.O en Adultos II",
    "Integrado T.O en Personas Mayores II",
    "Nuevas Tecnologías Aplicadas a la T.O",
    "Gestión y Liderazgo en Salud Comunitaria",
    "Metodología de la Investigación II",
    "Salud Ocupacional y Ergonomía I",
    "Práctica Curricular VI"
  ],
  "7mo Semestre": [
    "Integrado T.O en Niños/as y Adolescentes III",
    "Integrado T.O en Adultos III",
    "Integrado T.O en Personas Mayores III",
    "Salud Ocupacional y Ergonomía II",
    "Proyecto de Inclusión Social I",
    "Ortotica I",
    "Proyecto de Investigación I",
    "Práctica Curricular VII"
  ],
  "8vo Semestre": [
    "Integrado T.O en Niños/as y Adolescentes IV",
    "Integrado T.O en Adultos IV",
    "Integrado T.O en Personas Mayores IV",
    "Ortotica II",
    "Proyecto de Inclusión Social II",
    "Proyecto de Investigación II",
    "Bioética",
    "Práctica Curricular VIII"
  ],
  "9no y 10mo Semestre": [
    "Examen de Competencias de Tramo",
    "Práctica Profesional I",
    "Práctica Profesional II",
    "Práctica Profesional III",
    "Examen de Competencias Profesionales"
  ]
};

function crearMalla() {
  const contenedor = document.getElementById("malla");
  Object.entries(malla).forEach(([semestre, ramos]) => {
    const bloque = document.createElement("div");
    bloque.className = "semestre";
    const titulo = document.createElement("h3");
    titulo.textContent = semestre;
    bloque.appendChild(titulo);

    ramos.forEach(ramo => {
      const item = document.createElement("div");
      item.className = "ramo";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", actualizarProgreso);

      const label = document.createElement("label");
      label.textContent = " 📚 " + ramo;

      item.appendChild(checkbox);
      item.appendChild(label);
      bloque.appendChild(item);
    });

    contenedor.appendChild(bloque);
  });

  actualizarProgreso();
}

function actualizarProgreso() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const total = checkboxes.length;
  const completados = Array.from(checkboxes).filter(cb => cb.checked).length;
  const porcentaje = Math.round((completados / total) * 100);
  document.getElementById("barra-progreso").style.width = porcentaje + "%";
  document.getElementById("barra-progreso").textContent = porcentaje + "%";
}

window.onload = crearMalla;

