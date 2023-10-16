El bug a comentar es el siguiente:

En la página principal de Zara: https://www.zara.com/es/ca/

Nos dirigimos al apartado de camisas de hombre:

    https://www.zara.com/es/es/hombre-camisas-l737.html?v1=2297813

Una vez aquí haciendo scroll vemos como todas las camisas tienen nombre y precio a excepción de dos camisas blancas que solo tienen precio, estando en la vista por defecto:

![Zara camisa bug](./image/zara_camisa_bug.PNG)

y otras sin descripción completamente:

![Zara camisas no descripción](./image/zara_camisas_no_descripcion.PNG)

Si cambiamos de vista 

![Zara vista doble fila](./image/vista_doble_fila.PNG)

arriba a la derecha hemos seleccionado la segunda vista del closet, vemos como el caso de las camisas sin descripción se soluciona y aparece su descripción con el precio pero en el caso de las camisas sin nombre no aparece.


Entramos al detalle de una camisa cualquiera

![Zara camisa detail expected](./image/zara_camisa_detail_expected.PNG)

y lo comparamos con la camisa blanca 

![Zara camisa detail bug](./image/zara_camisa_detail_bug.PNG)

y efectivamente comprobamos que es un fallo del producto como también vemos en la consola de desarrollador

![Error en consola](./image/error_en_consdev.PNG)

TO DO: Arreglar los productos para que muestren correctamente su nombre como en las demás prendas.

Prioridad: Media, si bien no afecta a la compra de las camisas ni a su funcionamiento, es una experiencia directa de la compra y no permite buscar el producto desde un buscador.

Impacto: Bajo/Medio, si bien no es un funcionamiento importante, si escalase a más productos no podrían buscarse y eso podría generar un impacto en las ventas.

Probabilidad ocurrencia: Siempre.