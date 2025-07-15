const malla = {
  "1er Semestre": [
    "Introducción a la T.O","Ética en Salud","Integrado Químico Biológico",
    "Habilidades de Comunicación Oral y Escrita","Introducción al Trabajo Comunitario en Salud",
    "Inglés I","Psicología de la Comunicación","Práctica Curricular I"
  ],
  // Sigue con los demás semestres...
  "9no y 10mo Semestre": [
    "Examen de Competencias de Tramo","Práctica Profesional I","Práctica Profesional II",
    "Práctica Profesional III","Examen de Competencias Profesionales"
  ]
};

function crearMalla() {
  const cont = document.getElementById("malla");
  Object.entries(malla).forEach(([sem, ramos]) => {
    const sec = document.createElement("section");
    sec.className = "semestre";
    const h3 = document.createElement("h3");
    h3.textContent = sem;
    sec.appendChild(h3);

    ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.addEventListener("change", actualizarProgreso);

      const lbl = document.createElement("label");
      lbl.textContent = " 📚 " + ramo;

      const notasCont = document.createElement("span");
      notasCont.className = "notas";

      for (let i=1; i<=4; i++) {
        const inp = document.createElement("input");
        inp.type = "number"; inp.min = 1; inp.max = 7; inp.step = 0.1;
        inp.placeholder = "N"+i;
        inp.className = "nota";
        inp.addEventListener("input", () => calcularPromedio(div));
        notasCont.appendChild(inp);
      }

      const promSpan = document.createElement("span");
      promSpan.className = "promedio";
      promSpan.textContent = "📊 -";

      div.append(cb, lbl, notasCont, promSpan);
      sec.appendChild(div);
    });

    cont.appendChild(sec);
  });

  actualizarProgreso();
}

function calcularPromedio(div) {
  const vals = Array.from(div.querySelectorAll("input.nota"))
                .map(i => parseFloat(i.value));
  if (vals.some(v => isNaN(v))) {
    div.querySelector(".promedio").textContent = "📊 -";
    return;
  }
  const prom = vals[0]*0.2 + vals[1]*0.25 + vals[2]*0.3 + vals[3]*0.25;
  const txt = prom.toFixed(1);
  const sp = div.querySelector(".promedio");
  sp.textContent = "📊 " + txt;
  sp.style.color = prom >= 4.0 ? "green" : "red";
}

function actualizarProgreso() {
  const cbs = document.querySelectorAll("div.ramo input[type='checkbox']");
  const tot = cbs.length;
  const done = Array.from(cbs).filter(c=>c.checked).length;
  const pct = Math.round((done/tot)*100);
  const bar = document.getElementById("barra-progreso");
  bar.style.width = pct + "%";
  bar.textContent = pct + "%";
}

window.onload = crearMalla;
