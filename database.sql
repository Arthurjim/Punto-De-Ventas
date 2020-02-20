create table productos 
(cod_pro int primary key, 
nombre varchar (30) not null,
cantidad integer not null, 
existencia integer not null,
precio decimal not null,
tipo  int references categoria (id_categoria),
inventario_prod int references inventario (id_inventario));

create table categoria 
(id_categoria int primary key,
nombre varchar (30) not null);

Insert into categoria values
  (123, 'Paquete');


 --Ticket

create table ticket
(id_compra int primary key,
fecha_hora timestamp not null,
productos varchar(40) not null,
cantidad_prod integer not null,
cantidad_total integer not null);

create table ventas
(id_ventas int primary key,
 id_compra int references ticket(id_compra),
fecha date not null,
precio decimal not null);


create table inventario
(id_inventario int primary key,
nombre varchar (30) not null,
existencia integer not null,
fecha_cad date not null)


create table administrador
(id_administrador int primary key,
nombre varchar(30) not null,
clave varchar(10) not null,
codigo_admin integer unique not null)

create table usuario
(id_usuario int primary key,
nombre varchar (30) not null,
clave varchar(10) not null,
 codigo_admin integer references administrador (codigo_admin))

