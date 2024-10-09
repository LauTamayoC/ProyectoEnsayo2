--Procedimientos almacenados
-- 1. Mostrar todos los empleados que ingresaron entre una fecha inicial y 
--una fecha final y que pertenecen a un determinado departamento (todos dados como parametros de entrada).

select*from Empleados
CREATE PROCEDURE procedimiento1
    @fechaInicial DATE,
    @fechaFinal DATE,
    @idDepartamento INT
AS
   
    SELECT *
    FROM Empleados
    WHERE FechaContratacion BETWEEN @fechaInicial AND @fechaFinal
    AND Departamento = @idDepartamento;

	EXEC proceprocedimiento1'2023-01-01', '2023-06-30', 123;

--2. Crear un procedimiento almacenado que inserte un empleado

CREATE PROCEDURE procedimiento2
    @apellidos varchar(20),
    @nombre varchar(20),
    @cargo varchar(40),
    @tratamiento varchar(40),
    @fechaNacimiento date,
    @fechaContratacion date,
    @direccion varchar(60),
    @ciudad varchar(15),
    @region varchar(15),
    @codPostal varchar(10),
    @pais varchar(15),
    @telDomicilio varchar(24),
    @extension varchar(4),
    @notas text,
    @jefe int,
    @sueldoBasico decimal
 AS
    INSERT INTO Empleados (Apellidos, Nombre, Cargo, Tratamiento, FechaNacimiento, 
	FechaContratacion, Direccion, Ciudad, Region, CodPostal, Pais, TelDomicilio, 
	Extension, Notas, Jefe, SueldoBasico)
    VALUES (@apellidos, @nombre, @cargo, @tratamiento, @fechaNacimiento, @fechaContratacion, 
	@direccion, @ciudad, @region, @codPostal, @pais, @telDomicilio, @extension, @notas, @jefe, @sueldoBasico);

EXEC procedimiento2
    @apellidos = 'Apellido del Empleado',
    @nombre = 'Nombre del Empleado',
    @cargo = 'Cargo del Empleado',
    @tratamiento = 'Tratamiento del Empleado',
    @fechaNacimiento = '1990-01-01',
    @fechaContratacion = '2023-08-08',
    @direccion = 'Dirección del Empleado',
    @ciudad = 'Ciudad del Empleado',
    @region = 'Región del Empleado',
    @codPostal = '12345',
    @pais = 'País del Empleado',
    @telDomicilio = '123-456-7890',
    @extension = '1234',
    @notas = 'Notas sobre el Empleado',
    @jefe = 1,
    @sueldoBasico = 50000.00;

--3. Crear un procedimiento que muestre el nombre de departamento y numero de personas que hay en 
--cada departamento a partir del numero de departamento ingresado como parametro de entrada

CREATE PROCEDURE procedimiento3
    @numeroDepartamento INT
 AS
    SELECT Departamento.nombre , COUNT(Empleados.IdEmpleado) AS NumeroPersonas
    FROM Departamentos 
    LEFT JOIN Empleados  ON Departamento.idDepartamento = Empleados.idDepartamento
    WHERE Departamento.idDepartamento = @numeroDepartamento
    GROUP BY Departamentos.nombre;

EXEC procedimiento3 @numeroDepartamento = 123;

--4. Crear un procedimiento que muestre el apellido de las personas que trabajan en determinado departamento 
--con su salario y nombre del departamento pasandole como parametro de entrada el nombre del departamento

CREATE PROCEDURE procedimiento4
    @nombreDepartamento VARCHAR(45)
 AS
    SELECT Empleados.Apellidos, Empleados.SueldoBasico, Departamento.Nombre AS NombreDepartamento
    FROM Empleados 
    INNER JOIN Departamentos  ON Empleados.idDepartamento = Departamento.idDepartamento
    WHERE Departamento.Nombre = @nombreDepartamento;

EXEC procedimientoprocedimiento4 @nombreDepartamento = 'Nombre del Departamento';

--5. Crear procedimiento que muestre salario, oficio y comisión del empleado, pasándole el apellido como parámetro de entrada*/


create proc procedimiento5
    @Apellido VARCHAR(50)
AS
select Oficio, Salario, Comision
from Empleados
where Apellido =  @Apellido;



exec procedimiento5 @Apellido ='Suyama'


--6. Hacer un procedimiento igual que el anterior, pero si no le pasamos ningún valor, 
--mostrará los datos de todos los empleados.*/

create proc procedimiento6
    @Apellido VARCHAR(50) = null
as 
select Apellido, Oficio, Salario, Comision
from Empleados

exec procedimiento6

--7. Crear un procedimiento para mostrar el salario, oficio, apellido y 
--nombre del departamento de todos los empleados que contengan en su apellido la letra que le pasemos como parámetro.*/

create proc procedimiento7 
@letra varchar(1)
as 
select Apellido, Oficio, Salario, Comision, DNombre
from Empleados
join Departamento
on [dbo].[tblEmpleado].Dept_No = [dbo].[tblDept].Dept_No
where 
[dbo].[tblEmpleado].Apellido like '%' + @Letra + '%';



exec procedimiento7 @Letra = 's'

--



