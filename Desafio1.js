/*
Micro desafío 1:

Instrucciones
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
2. Crea una función que permita calcular el monto a pagar por el alquiler de un
vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y “silla
para bebe”.
3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las
siguientes consideraciones:
● De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
○ Compacto: $14000
○ Mediano: $17000
○ Camioneta: $28000
● Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día
de $1200
4. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo?
5. Para probar las diferentes respuestas invoca a la función, asigna diferentes valores o
argumentos. Usando el console.log(), muestra los resultados al usuario:

“Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días
utilizados, el monto total a pagar es de $42000 ” .

Recuerda que si el cliente pidió la silla para niños debe también indicarlo en el mensaje final.
*/

let vehiculo="compacto";
let dias=3;
let silla=false;

function montoAPagar (tipoDeVehiculo, diasDeAlquiler, sillaParaBebe)
    {
        if (tipoDeVehiculo==="compacto")
            {
                if (sillaParaBebe===true)
                    {
                        return (diasDeAlquiler * 14000) + (diasDeAlquiler * 1200);
                    }
                else
                    {
                        return (diasDeAlquiler * 14000);
                    }
            }
        else if (tipoDeVehiculo==="mediano")
            {
                if (sillaParaBebe===true)
                    {
                        return (diasDeAlquiler * 17000) + (diasDeAlquiler * 1200);
                    }
                else
                    {
                        return (diasDeAlquiler * 17000);
                    }
            }
        else if (tipoDeVehiculo==="camioneta")
            {
                if (sillaParaBebe===true)
                    {
                        return (diasDeAlquiler * 28000) + (diasDeAlquiler * 1200);
                    }
                else
                    {
                        return (diasDeAlquiler * 28000);
                    }
            }
        else
            console.log("Los tipos de vehiculos son: compacto - mediano - camioneta");
    }

console.log("Estimado cliente: en base al tipo de vehículo ("+vehiculo+") alquilado, "+
"considerando los ("+dias+") días utilizados "+
"y la opcion ("+silla+") de silla de bebe. "+
"El monto total a pagar es de $"+montoAPagar(vehiculo, dias, silla));