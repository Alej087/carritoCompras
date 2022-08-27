import { useState } from "react";

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item(props) {
    const [stockInicial, setStockInicial] = useState(props.stock);
    const [habilitarBoton, setHabilitarBoton] = useState(false);
    const [nombreBoton, setNombreBoton] = useState("COMPRAR");

    function comprarStock() {
        if (stockInicial >= 1) {
            props.onComprar();
            setStockInicial(stockInicial - 1);
            if (stockInicial - 1 === 0) {
                setStockInicial("agotado");
                setHabilitarBoton(true);
                setNombreBoton("SIN STOCK");
            }
        }
    }
    return (
        <div className="producto">
            <h3>{props.nombre}</h3> <p>{props.descripcion}</p>
            <h5>
                En stock: <span>{stockInicial}</span>
            </h5>
            <button disabled={habilitarBoton} onClick={comprarStock}>
                {nombreBoton}
            </button>
        </div>
    );
}
