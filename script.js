fetch('cursos.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('contenedor-cursos');
    data.forEach(curso => {
      const div = document.createElement('div');
      div.classList.add('curso');
      div.innerHTML = `
        <h2>${curso.nombre}</h2>
        <p>${curso.descripcion}</p>
        <p><strong>Créditos:</strong> ${curso.creditos}</p>
      `;
      contenedor.appendChild(div);
    });
  });
