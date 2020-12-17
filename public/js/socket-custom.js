const socket = io();

            socket.on("connect", function () {
                console.log("Conectado al servidor");
            });
            //En el caso que cierre la pestaña o la pagina
            socket.on("disconnect", function () {
                console.log("Perdimos conexion con el servidor");
            });

            //Enviar informacion del front al back
            socket.emit(
                "enviarMensaje",
                {
                    usuario: "Ezequiel",
                    mensaje: "Hola Mundo",
                },
                function (resp) {
                    console.log("respuesta server: ", resp);
                }
            );

            //Escuchar informacion del Back
            socket.on("enviarMensaje", function (respuesta) {
                console.log("Servidor:", respuesta);
            });