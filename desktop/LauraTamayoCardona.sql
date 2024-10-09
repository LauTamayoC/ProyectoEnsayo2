create database Clinica
use Clinica
CREATE TABLE Paciente (
  cedulaPaciente INT PRIMARY KEY,
  nombrePaciente VARCHAR(50),
  apellidosPaciente VARCHAR(50),
  direccionPaciente VARCHAR(100),
  ciudadPaciente VARCHAR(50),
  telefonoPaciente VARCHAR(15),
  fecha_nacimiento DATE
);

CREATE TABLE Medico (
  cedulaMedico INT PRIMARY KEY,
  nombreMedico VARCHAR(50),
  apellidosMedico VARCHAR(50),
  telefonoMedico INT,
  especialidad VARCHAR(50)
);

CREATE TABLE Ingreso (
  codigoIngreso INT PRIMARY KEY,
  cedulap INT,
  numeroHabitacion INT,
  numeroCama INT,
  fecha_ingreso DATE,
  FOREIGN KEY (cedulap) REFERENCES Paciente(cedulaPaciente)
);

CREATE TABLE Atenciones (
  id_atencion INT PRIMARY KEY,
  codigo_ingreso INT,
  cedulaMedico INT,
  FOREIGN KEY (codigo_ingreso) REFERENCES Ingreso(codigoIngreso),
  FOREIGN KEY (cedulaMedico) REFERENCES Medico(cedulaMedico)
);

-- Inserción de datos en la tabla Paciente
INSERT INTO Paciente (cedulaPaciente, nombrePaciente, apellidosPaciente, direccionPaciente, ciudadPaciente, telefonoPaciente, fecha_nacimiento)
VALUES
    (23456789, 'Laura', 'Hernandez', 'Calle X #456', 'Madrid', 7777777, '1992-08-17'),
    (34567890, 'Andres', 'Ramirez', 'Calle Y #789', 'Medellin', 8888888, '1985-04-25'),
    (45678901, 'Sofia', 'Gomez', 'Calle Z #123', 'Cartagena', 9999999, '1977-11-30');

-- Inserción de datos en la tabla Medico
INSERT INTO Medico (cedulaMedico, nombreMedico, apellidosMedico, telefonoMedico, especialidad)
VALUES
    (44444444, 'Carolina', 'Lopez', 111-222-3333, 'Ginecologa'),
    (55555555, 'Mario', 'Fernandez', 444-333-2222, 'Dermatologo'),
    (66666666, 'Sara', 'Rodriguez', 666-555-4444, 'Oftalmologa');

-- Inserción de datos en la tabla Ingreso
INSERT INTO Ingreso (codigoIngreso,cedulap,  numeroHabitacion, numeroCama, fecha_ingreso)
VALUES
    (124578,23456789, 44444444, 201, 2, '2023-07-20'),
    (784512,34567890, 55555555, 202, 1, '2023-07-21'),
    (369852,45678901, 66666666, 303, 3, '2023-07-22'),
    (852147,23456789, 44444444, 201, 2, '2023-07-25'),
    (987456,34567890, 55555555, 204, 5, '2023-07-25'),
    (321456,45678901, 66666666, 305, 3, '2023-07-26');

INSERT INTO Atenciones (id_atencion, codigo_ingreso, cedulaMedico)
VALUES
(1, 1, 44444444),
(2, 2, 55555555),
(3, 3, 66666666);


----Vista que permita ver los datos de las atenciones medicas
CREATE VIEW Vista1 AS
SELECT
    nombrePaciente,apellidosPaciente,ciudadPaciente,fecha_nacimiento,
    codigoIngreso,fecha_ingreso,nombreMedico,apellidosMedico,
    especialidad
FROM Paciente JOIN Ingreso  
ON Paciente.cedulaPaciente = Ingreso.cedulap
JOIN Atenciones  ON Ingreso.codigoIngreso = Atenciones.codigo_ingreso
JOIN Medico  ON Atenciones.cedulaMedico = Medico.cedulaMedico;

SELECT * FROM Vista1;

--Vista que permita mostrar todos los datos de los ingresos medicos
CREATE VIEW Vista2 AS
SELECT
    Paciente.nombrePaciente,Paciente.apellidosPaciente,Paciente.ciudadPaciente,
    Paciente.fecha_nacimiento,Ingreso.fecha_ingreso,Ingreso.numeroHabitacion,
    Ingreso.numeroCama
FROM
    Paciente
JOIN Ingreso ON Paciente.cedulaPaciente = Ingreso.cedulap;

SELECT * FROM Vista2;

--Vista que permite ver la informacion de los pacientes, como la cantidad de medicos que los 
--atendieron, la cantidad de atenciones realizadas

CREATE VIEW Vista_3 AS
SELECT
    pa.cedulaPaciente,pa.nombrePaciente, pa.apellidosPaciente,
    pa.ciudadPaciente,pa.fecha_nacimiento, med.cedulaMedico,
    med.nombreMedico,med.apellidosMedico, med.especialidad,
    COUNT(ate.id_atencion) AS cantidadAtenciones
FROM
    Paciente pa
JOIN Ingreso ing ON pa.cedulaPaciente = ing.cedulap
JOIN Atenciones ate ON ing.codigoIngreso = ate.codigo_ingreso
JOIN Medico med ON ate.cedulaMedico = med.cedulaMedico
GROUP BY
    pa.cedulaPaciente,pa.nombrePaciente, pa.apellidosPaciente,
    pa.ciudadPaciente,pa.fecha_nacimiento,med.cedulaMedico,
    med.nombreMedico,med.apellidosMedico,med.especialidad;

SELECT * FROM Vista_3;

--Vista que muestra la informacion sobre cada ingreso de cada medico y del 
--paciente que atendieron
CREATE VIEW Vista4 AS
SELECT
    med.nombreMedico, med.apellidosMedico, med.especialidad,
    ing.codigoIngreso,ing.fecha_ingreso,pac.nombrePaciente,
    pac.apellidosPaciente,pac.ciudadPaciente, pac.fecha_nacimiento
FROM
    Medico med
JOIN Atenciones ate ON med.cedulaMedico = ate.cedulaMedico
JOIN Ingreso ing ON ate.codigo_ingreso = ing.codigoIngreso
JOIN Paciente pac ON ing.cedulap = pac.cedulaPaciente;

SELECT * FROM Vista4;

--Vista que muestre la cantidad de medicos que atendieron a un paciente
CREATE VIEW Vista5
AS
SELECT
    pa.nombrePaciente,pa.apellidosPaciente,
    pa.ciudadPaciente,pa.fecha_nacimiento,
    COUNT(aten.cedulaMedico) AS cantidadMedicos
FROM
    Paciente pa
JOIN Ingreso ing ON pa.cedulaPaciente = ing.cedulap
JOIN Atenciones aten ON ing.codigoIngreso = aten.codigo_ingreso
GROUP BY
    pa.cedulaPaciente,
    pa.nombrePaciente,
    pa.apellidosPaciente,
    pa.ciudadPaciente,
    pa.fecha_nacimiento;

SELECT * FROM Vista5;

