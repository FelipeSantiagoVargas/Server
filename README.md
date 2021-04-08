# Server

## Para correr cada uno de los contenedores es necesario ejecutar los comandos: 

docker build -t server .

docker run -dit --rm --name server1 -p 3001:3000 --network clocks server

# Servidor 1.0.0 documentation

Servidor encargado de visualizar y modificar la hora para la sincronización del reloj
## Table of Contents

* [Channels](#channels)

## Channels

### **client/date** Channel

#### `subscribe` Operation

##### Message

*Obtiene la hora para ser mostrada del lado del cliente*

###### Payload

| Name | Type | Description | Accepted values |
|-|-|-|-|
| hours | string | Hora | _Any_ |
| minutes | string | Minutos | _Any_ |
| seconds | string | Segundos | _Any_ |

> Examples of payload _(generated)_

```json
{
  "hours": "string",
  "minutes": "string",
  "seconds": "string"
}
```




### **client/info** Channel

#### `subscribe` Operation

##### Message

*Crea las filas para mostrar en la tabla del logs del lado del cliente*

###### Payload

| Name | Type | Description | Accepted values |
|-|-|-|-|
| actualDate | string | Hora | _Any_ |
| newDate | string | Minutos | _Any_ |
| adjust | string | Segundos | _Any_ |

> Examples of payload _(generated)_

```json
{
  "actualDate": "string",
  "newDate": "string",
  "adjust": "string"
}
```




### **server/date** Channel

#### `subscribe` Operation

##### Message

*Emite la información del server (Nueva hora, ajuste, antigua hora) para ser visualizada en el log*

###### Payload

| Name | Type | Description | Accepted values |
|-|-|-|-|
| actualDate | string | Hora | _Any_ |
| newDate | string | Minutos | _Any_ |
| adjust | string | Segundos | _Any_ |

> Examples of payload _(generated)_

```json
{
  "actualDate": "string",
  "newDate": "string",
  "adjust": "string"
}
```



