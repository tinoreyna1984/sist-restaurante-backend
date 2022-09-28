Proyecto: sist-restaurante-backend
Desarrollado por: Tino Reyna
Subido: 28/03/2022

Consiste en un API REST que simula las operaciones CRUD de un sistema gestor de un restaurante.

Tecnologías empleadas (las versiones están en package.json):
- Node.js.
- Sequelize.
- SQLite.

Enlace del API: https://sist-restaurante-backend.onrender.com/

Operaciones:

Item de restaurante

GET, POST: {HOST}/itemrestaurante
GET, PUT, DELETE: {HOST}/itemrestaurante/id

Usuario

GET, POST: {HOST}/usuario
GET, PUT, DELETE: {HOST}/usuario/id

Mesero

GET, POST: {HOST}/mesero
GET, PUT, DELETE: {HOST}/mesero/id

Mesa

GET, POST: {HOST}/mesa
GET, PUT, DELETE: {HOST}/mesa/id

Menú

GET, POST: {HOST}/menu
GET, PUT, DELETE: {HOST}/menu/id

Factura: cabecera y detalle

GET, POST: {HOST}/fact_cab
GET, PUT, DELETE: {HOST}/fact_cab/id

GET, POST: {HOST}/fact_det
GET, PUT, DELETE: {HOST}/fact_det/id

Modelo generado para SQLite:

![image](https://user-images.githubusercontent.com/33553107/160494926-b4463872-f184-467b-8f13-f3959051cb0c.png)

Nota: las relaciones no se han generado con Sequelize.

Gracias por leer. Uso libre.
