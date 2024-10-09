/*1.Hallar el total de días asignado a cada trabajador si este es mayor que 20*/

select Num_Dias, Nombre,Tipo_Oficio, sum(tblAsignar.Num_Dias) from tblAsignar join tblTrabajador
on tblAsignar.Cedula=tblTrabajador.Cedula 
group by  tblAsignar.Num_Dias, tblTrabajador.Nombre, tblTrabajador.Tipo_Oficio
having sum(tblAsignar.Num_Dias)>20

select*from tblEdificio
select*from tblArea
select*from tblAsignar
select*from tblOficio
select*from tblTrabajador
/*3. Hallar el tipo la dirección y la fecha que se inició la construcción del edificio tipo oficina*/ 
select Tipo, Direccion, Fecha_I 
from tblEdificio join tblAsignar
on tblEdificio.Iden_Edif = tblAsignar.Iden_Edif
where Tipo='Oficina';

/*5.Hallar la cantidad de trabajadores por oficio con la bonificación correspondiente*/ 
select count(*) as Cantidad_Trabajadores, Tipo_Oficio, Bonificacion 
from tblTrabajador join tblOficio on
tblOficio.Cedula=tblTrabajador.Cedula
group by Tipo_Oficio, Bonificacion;

select tblTrabajador.Nombre,tblOficio.Bonificacion from tblTrabajador  
  inner join  tblOficio on tblTrabajador.Tipo_Oficio= tblOficio.Tipo_Oficio
  WHERE Bonificacion>1500

/*7.Hallar los trabajadores que son decoradores o trabajan en los edificios 435*/ 
select tblTrabajador.*, tblAsignar.Iden_Edif 
from tblTrabajador join tblAsignar
on tblTrabajador.Cedula = tblAsignar.Cedula 
where Tipo_Oficio = 'Decorador' or Iden_Edif = 435



/*9.Hallar el nombre y el total de dias asignado a cada trabajador mostrar si el total de días 
Es mayor que el mínimo valor de num_horas*/ 
select Nombre, sum(tblAsignar.Num_Dias) as TotalDias
from tblTrabajador join tblAsignar 
on tblTrabajador.Cedula=tblAsignar.Cedula
group by tblTrabajador.Nombre
having sum(tblaAsignar.Num_Dias) > (select min(Horas_Semana) from tblOficio)