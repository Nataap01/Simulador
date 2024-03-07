function inversion(){

    // CAMPTURAMOS LOS ELEMENTOS DE HTML QUE SE VAN A MANIPULAR
    const cNombres = document.getElementById("nombres").value;
    const cEmail   = document.getElementById("email").value;
    const cMonto   = document.getElementById("inversion").value;
    const cTiempo  = document.getElementById("tiempo").value;

    const preSimulacion  = document.querySelector(".pre-simulation");
    const postSimulacion = document.querySelector(".post-simulation");

    const showNombre = document.getElementById("nombres-show");
    const showEmail = document.getElementById("email-show");

    const showTiempo = document.getElementById("tiempo-show");
    const showInteres = document.getElementById("interes-show");
    const showTotal = document.getElementById("total-show");
    const showGanancia = document.getElementById("ganancia-show");

    let gananciaTotal = 0;
    let ganancia = 0;

    postSimulacion.classList.remove("disabled");
    preSimulacion.classList.add("disabled");

    showNombre.innerText = cNombres;
    showEmail.innerText = cEmail;

    switch (cTiempo) {
        case "1":
                showTiempo.innerText = "12 Meses";
                showInteres.innerText = "0.8%";
                ganancia= (cMonto * 0.8)/100 * 12; //(cMonto * 0,096 ) * 12
                gananciaTotal = parseInt(cMonto) + parseInt(ganancia);

                showTotal.innerText = gananciaTotal;
                showGanancia.innerText = ganancia;

            break;
        case "2":
                showTiempo.innerText = "24 Meses";
                showInteres.innerText = "1.3%";
                ganancia= (cMonto * 1.3)/100 * 24; //(cMonto * 0,156 ) * 24
                gananciaTotal = parseInt(cMonto) + parseInt(ganancia);

                showTotal.innerText = gananciaTotal;
                showGanancia.innerText = ganancia;

            break;
        case "3":
                showTiempo.innerText = "36 Meses";
                showInteres.innerText = "1.7%";
                ganancia= (cMonto * 1.7)/100 * 36; //(cMonto * 0,204 ) * 36
                gananciaTotal = parseInt(cMonto) + parseInt(ganancia);

                showTotal.innerText = gananciaTotal;
                showGanancia.innerText = ganancia;
            break;
    }


}