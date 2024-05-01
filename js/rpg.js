// Clase Date
class CustomDate extends Date {
    constructor() {
        super();
        this.startTime = this.getTime();
    }

    // Esto registra el tiempo de la simulación en minutos y segundos
    getElapsedTime(startTime) {
        const endTime = this.getTime();
        const elapsedTime = endTime - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = ((elapsedTime % 60000) / 1000).toFixed(0);
        return `${minutes} minutos y ${seconds} segundos`;
    }
}

// Array para las misiones
const misionesDisponibles = [
    {
        nombre: "Matar las ratas de la bodega",
        descripcion: "La bodega del tabernero está infestada de ratas. Elimina todas las ratas para limpiar el lugar.",
        dificultad: "Media",
        recompensa: "Experiencia"
    },
    {
        nombre: "Bloquear la entrada a la red de cloacas",
        descripcion: "La entrada a la red de cloacas está siendo utilizada por las ratas. Bloquea la entrada para detenerlas.",
        dificultad: "Baja",
        recompensa: "Cancelación de la deuda"
    }
];

// Función de Orden Superior para nombre de misiones
function mostrarNombresMisiones() {
    console.log("Lista de misiones disponibles:");
    misionesDisponibles.forEach(mision => {
        console.log(mision.nombre);
    });
    alert("Lista de misiones disponibles:\n\n" +
        misionesDisponibles.map(mision =>
            `Nombre: ${mision.nombre}`
        ).join("\n\n"));
}

// Función de Orden Superior para detalles
function mostrarMisionesDisponibles() {
    console.log("Misiones Disponibles:");
    misionesDisponibles.forEach(mision => {
        console.log("Nombre:", mision.nombre);
        console.log("Descripción:", mision.descripcion);
        console.log("Dificultad:", mision.dificultad);
        console.log("Recompensa:", mision.recompensa);
        console.log("----------------------");
    });

    alert("Misiones Disponibles:\n\n" +
        misionesDisponibles.map(mision =>
            `Nombre: ${mision.nombre}\nDescripción: ${mision.descripcion}\nDificultad: ${mision.dificultad}\nRecompensa: ${mision.recompensa}`
        ).join("\n\n"));
}

// Definir constantes
const regexNombre = /^[a-zA-Z\s]+$/;
const regexGenero = /^[a-zA-Z\s]+$/;

//Class constructora para las estadísticas
class Personaje {
    constructor() {
        this.carisma = 0;
        this.inteligencia = 0;
        this.fuerza = 0;
        this.resistencia = 0;
    }

    mostrarEstadisticas() {
        console.log("Las estadísticas base de tu personaje son:");
        console.log("Carisma:", this.carisma);
        console.log("Inteligencia:", this.inteligencia);
        console.log("Fuerza:", this.fuerza);
        console.log("Resistencia:", this.resistencia);

        alert(`Las estadísticas base de tu personaje son:
            Carisma: ${this.carisma}
            Inteligencia: ${this.inteligencia}
            Fuerza: ${this.fuerza}
            Resistencia: ${this.resistencia}`
        );
    }
}

// Función para validar y obtener el nombre del personaje
function nombreJugador() {
    let nombre = prompt("Escribe el nombre de tu personaje");

    while (!nombreValido(nombre)) {
        alert("Error. El nombre no es válido.");
        nombre = prompt("Escribe el nombre de tu personaje");
    }

    return nombre.trim();
}

// Función para validar el nombre
function nombreValido(nombre) {
    return nombre !== null && nombre !== "" && regexNombre.test(nombre);
}

// Función para obtener el género del personaje
function generoJugador() {
    let genero = prompt("Escribe el género de tu personaje");

    while (!generoValido(genero)) {
        alert("Error. El género no es válido.");
        genero = prompt("Escribe el género de tu personaje");
    }

    return genero.trim();
}

// Función para validar el género
function generoValido(genero) {
    return genero !== null && genero !== "" && regexGenero.test(genero);
}

// Función para la clase del personaje
function claseJugador() {
    let clase = prompt("Escribe la clase de tu personaje: Puedes elegir entre caballero, arquero y hechicero");

    while (!claseValida(clase)) {
        alert("Error. Clase no válida.");
        clase = prompt("Escribe la clase de tu personaje: Puedes elegir entre caballero, arquero y hechicero");
    }

    return clase.trim().toLowerCase();
}

// Función para validar la clase
function claseValida(clase) {
    return clase !== null && (clase.toLowerCase() === "caballero" || clase.toLowerCase() === "arquero" || clase.toLowerCase() === "hechicero");
}

// Función para la interacción con el tabernero
function interactuarConTabernero() {
    let propuesta;
    do {
        propuesta = prompt("¿Qué harás en esta situación? \n Ingresa 1 para convencerlo de aplazar el pago. \n Ingresa 2 para ofrecer un arreglo.");

        if (propuesta === null || propuesta === "" || (propuesta !== "1" && propuesta !== "2")) {
            alert("No has ingresado una propuesta válida.");
        }
    } while (propuesta === null || propuesta === "" || (propuesta !== "1" && propuesta !== "2"));

    return propuesta;
}

// Función para el encuentro con la primera rata
function encuentroConLaRata() {
    let combate;
    do {
        combate = prompt("¿Qué harás en esta situación? \n Ingresa 1 para acabar con la rata. \n Ingresa 2 para dejarla huir y rastrear su madriguera.");

        if (combate === null || combate === "" || (combate !== "1" && combate !== "2")) {
            alert("No has ingresado una propuesta válida.");
        }
    } while (combate === null || combate === "" || (combate !== "1" && combate !== "2"));

    return combate;
}

// Función principal de la aventura
function jugarAventura() {
    let continuar = true;

    while (continuar) {
        const startTime = new CustomDate(); // Hora de inicio de la aventura
        const genero = generoJugador();
        alert(`Tu personaje es del género ${genero}.`);

        const clase = claseJugador();
        alert(`Has elegido ser un ${clase}.`);

        const nombrePersonaje = nombreJugador();
        alert(`El nombre de tu personaje es ${nombrePersonaje}`);
        const resumen = `Ficha de tu personaje:
            Nombre: ${nombrePersonaje}
            Género: ${genero}
            Clase: ${clase}`;

        alert(resumen);
        console.log(resumen);

        const miPersonaje = new Personaje();
        miPersonaje.mostrarEstadisticas();

        // Interacción con el tabernero
        alert("La aventura comienza dentro de la taberna de tu distrito, estando bien entrada la noche. Después de una contundente cena, el tabernero se acerca a ti con la cuenta, cuyo monto claramente excede tus haberes.");
        alert("Intentas explicarle que por ahora no tienes cómo pagarle, pero que dentro de un par de días regresarás al lugar con el dinero adeudado.");
        alert("El tabernero insiste en que no puedes marcharte sin antes haberle pagado por la cena y la bebida.");

        const propuesta = interactuarConTabernero();

        switch (propuesta) {
            case "1":
                alert("Insistes en pagarle después, pero el tabernero elige molerte a palos en su lugar. Despiertas al día siguiente tirado en la calle, desorientado y sin ninguna de tus pertenencias.\nEs el fin de tu aventura.");
                break;
            case "2":
                alert("Le ofreces llegar a un arreglo, despertando el interés del tabernero.");
                alert("Tu inteligencia ha aumentado en +1");

                class NuevoPersonaje extends Personaje {
                    constructor() {
                        super();
                        this.inteligencia += 1;
                    }
                }

                const nuevoPersonaje = new NuevoPersonaje();
                nuevoPersonaje.mostrarEstadisticas();
                alert("El tabernero te cuenta que tuvo que clausurar su bodega principal debido a una reciente infestación de ratas. Necesita deshacerse de ellas urgentemente, antes de que a alguien se le ocurra ordenar el cierre del local.");
                alert("En la desgracia del tabernero tú ves una oportunidad de saldar tu deuda, valiendote de tus habilidades de "+clase+".");
                alert("Le ofreces tus servicios como moneda de cambio por la comida, garantizándole que no solo te encargarás de las ratas, sino que además bloquearás la abertura del lugar por donde entraron.");
                alert("El tabernero se muestra persuadido.");
                alert("Tu carisma ha aumentado en +1");
                class SegundoPersonaje extends Personaje {
                    constructor() {
                        super();
                        this.inteligencia = 1;
                        this.carisma = 1;
                    }
                }
                const segundoPersonaje = new SegundoPersonaje();
                console.log("Nuevo personaje con aumento en inteligencia y carisma:");
                console.log("Inteligencia:", segundoPersonaje.inteligencia);
                console.log("Carisma:", segundoPersonaje.carisma);
                segundoPersonaje.mostrarEstadisticas();

                // Aviso de misiones disponibles
                mostrarNombresMisiones();
                if (confirm("Para recibir más información sobre las misiones, oprime ACEPTAR. Si deseas saltar, haz click en CANCELAR.")) {
                    mostrarMisionesDisponibles();
                }
                alert("El tabernero te guía hacia una trampilla de planta que, al abrirla, desvela la escalera hacia una enorme bodega subterránea.");
                alert("Armado solo con tu equipo y una antorcha, desciendes hacia el subsuelo sin poder vislumbrar nada más allá de un par de metros por delante tuyo.");
                alert("Caminas hasta detenerte en lo que parece ser un pequeño almacen de barricas, aparentemente vacío. Sin embargo, bastan un par de pasos más para que el eco de tus pisadas sea acompañado por un chirrido agudo que emerge de entre los toneles.");
                alert("Una rata anormalmente grande está parada justo frente a ti, a la espera de que hagas el primer movimiento.");
                const combate = encuentroConLaRata();
                switch (combate) {
                    case "1":
                        alert("Eliges acabar con la rata en ese mismo momento.");
                        alert("Aunque el animal ofrece algo de resistencia, no es rival para alguien con tu habilidad. No obstante, aprecias el calentamiento.");
                        alert("Tu resistencia ha aumentado en +1");
                        class TercerPersonaje extends Personaje {
                            constructor() {
                                super();
                                this.inteligencia = 1;
                                this.carisma = 1;
                                this.resistencia = 1;
                            }
                        }
        
                        const tercerPersonaje = new TercerPersonaje();
                        console.log("Nuevo personaje con aumento en inteligencia, carisma y resistencia:");
                        console.log("Inteligencia:", tercerPersonaje.inteligencia);
                        console.log("Carisma:", tercerPersonaje.carisma);
                        console.log("Resistencia:", tercerPersonaje.resistencia);
                        tercerPersonaje.mostrarEstadisticas();
                        alert("La rata está vencida. Ahora tienes la vía libre para seguir explorando el resto de la bodega.");
                        alert("La aventura continuará...");
                        break;
                    case "2":
                        alert("Dejas que la rata huya, mientras le sigues por los pasajes de la bodega.")
                        alert("Tratas de acechar al animal de manera sigilosa y, aunque lo consigues durante un par de minutos, terminas perdiendole el rastro en una intersección de pasillos.");
                        alert("Confundido, sigues avanzando unos cuantos pasos más hasta que, de la nada, sientes que te golpean terriblemente en la parte posterior de la cabeza.");
                        alert("Te derrumbas en el suelo con la visión difusa y, antes de que tus ojos se cierren, logras ver un par de pies con garras enormes acercandose a ti.\nEs el fin de tu aventura.");
                        break;
                
                    default:
                        alert("Error.");
                        break;
                }
                break;
            default:
                alert("Error.");
                break;
        }
        const endTime = new CustomDate(); // Hora al final de la aventura
        const elapsedTime = endTime.getElapsedTime(startTime); // Calcula el tiempo transcurrido
        alert(`La duración de esta partida fue de: ${elapsedTime}`);
        continuar = confirm("¿Deseas volver a iniciar desde la creación de tu personaje?");
    }
}

// Iniciar la aventura
jugarAventura();