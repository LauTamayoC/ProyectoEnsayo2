CREATE DATABASE Casacultura

create table musico(
    idMusico varchar(45) primary key,
    nombreMusico varchar(45),
    fechanacimiento date,
    fechaMuerte date,
    historia varchar(100)
);

create table epoca(
    idEpoca varchar(45) primary key,
    nombreUnico varchar(25),
    caracteristicas varchar(45),
    periodo varchar(45),
);


create table instrumento(
    idInstrumento varchar(45) primary key,
    nombreInstrumento varchar(45),
    lugarCreacion varchar(45),
    creador varchar(40),
    tipo varchar(20),
    materiales varchar(45)
);

create table genero(
    idGenero varchar(45) primary key,
    nombreUnico varchar(25),
    caracteristicas varchar(45),
    origenes varchar(45),
    idmusico varchar(45),
    idInstrumento varchar(45),
    foreign key(idmusico) references musico(idMusico),
    foreign key(idInstrumento) references instrumento(idInstrumento)
);

create table obrasFamosas(
    idObra varchar(45) primary key,
    nombreObra varchar(45),
    añoObra date,
    Autor varchar(45),  
    partitura varchar(45),
    idgenero varchar(45),
    foreign key(idgenero) references genero(idGenero)
);

create table generoInstrumento(
	idgenero varchar(45), 
	foreign key (idgenero) references genero (idGenero),
	idInstrumento varchar(45),
	foreign key(idInstrumento) references instrumento(idInstrumento)
);

create table ObraMusico(
    idObra varchar(45),
    idMusico varchar(45),
    foreign key(idObra) references obrasFamosas(idObra),
    foreign key(idMusico) references musico(idMusico)
);

