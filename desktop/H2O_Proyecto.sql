create database H2o
use H2o

create table tbl_rol(id int primary key auto_increment,
nombre varchar(25)
);

create table tbl_estilos(id int primary key auto_increment,
nombre varchar(25)
);

create table tbl_usuario(id int primary key auto_increment,
nombre_usuario varchar(50) not null, 
correo varchar(150),
password varchar(30) not null,
id_rol int, 
foreign key (id_rol) references tbl_rol(id)
);

create table tbl_distancia(id int primary key auto_increment,
distancia_m int not null,
id_estilos int, 
foreign key (id_estilos) references tbl_estilos(id)
);
-- tiempo_prueba_s se va almacenar en segundos
create table tbl_tiempos(id int primary key auto_increment,
fecha date,
tiempo_prueba_s int, 
id_distancia int,
foreign key(id_distancia) references tbl_distancia(id)
);

create table tbl_capacidad(id int primary key auto_increment,
r1 int,
r2 int,
vo2 int,
tolerancia int,
id_tiempos int,
foreign key(id_tiempos) references tbl_tiempos(id)
);
