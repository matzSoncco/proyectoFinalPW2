<div align="center">
<table>
    <theader>
        <tr>
            <td style="width:25%;"><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:80%; height:auto"/></td>
            <td>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">DEPARTAMENTO ACADÉMICO DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </td>            
        </tr>
    </theader>
    <tbody>
        <tr>
        <td colspan="2"><span style="font-weight:bold;">Proyecto web</span>: Desarrollo de una aplicación web para control y manejo de Epp en almacen</td>
        </tr>
        <tr>
        <td colspan="2"><span style="font-weight:bold;">Fecha</span>:  2024/07/28</td>
        </tr>
    </tbody>
</table>
</div>

<div align="center">
<span style="font-weight:bold;">PROYECTO WEB</span><br />
</div>


<table>
<theader>
<tr><th>INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
    <tr>
        <td>ASIGNATURA:</td><td>Programación Web 2</td>
    </tr>
    <tr>
        <td>SEMESTRE:</td><td>III</td>
    </tr>
    <tr>
        <td>FECHA INICIO:</td><td>15-Jul-2024</td><td>FECHA FIN:</td>
        <td>28-Jul-2023</td><td>DURACIÓN:</td><td>04 horas</td>
    </tr>
    <tr>
        <td colspan="3">DOCENTES:
        <ul>
        <li>Richart Smith Escobedo Quispe - rescobedoq@unsa.edu.pe</li>
        </ul>
        </td>
    </<tr>
</tdbody>
</table>

#   WebApp con Django
<!-- 
[![License][license]][license-file]
[![Downloads][downloads]][releases]
[![Last Commit][last-commit]][releases]

[![Debian][Debian]][debian-site]
[![Git][Git]][git-site]
[![GitHub][GitHub]][github-site]
[![Vim][Vim]][vim-site]
[![Java][Java]][java-site] -->



##  Tipo de Sistema
Se trata de una aplicación web construida con el framework Django 5, que permita el 
    manejo y control de un almacen de Epp

## Objetivos
Desarrollar una aplicación web utilizando Django 5.0 para la gestión de equipos, herramientas, materiales, equipo de protección personal (EPP), préstamos de EPP y trabajadores en un entorno de almacén.

##  Requisitos del sistema
El sistema debe satisfacer los siguientes requisitos funcionales y no funcionales:

- RQ01: El sistema debe permitir gestionar EPP, herramientas, materiales, equipos, préstamos y trabajadores.
- RQ02: El sistema debe proporcionar una interfaz de administración para gestionar los datos y realizar consultas.
- RQ03: El sistema debe permitir la generación de reportes sobre el estado de los EPP y los préstamos.

##  Modelo de datos
El modelo de datos esta conformado por las siguientes entidades.

- Equipment: Esta entidad representa equipos de protección personal (EPP) en un sistema de gestión de almacén, almacenando información como identificador único, nombre, cantidad, nivel de importancia, stock y número de guía. Además, valida datos y genera identificadores automáticamente.
-   Loan: Esta entidad representa un préstamo de materiales, herramientas, o equipos de protección personal (EPP) a un trabajador dentro del sistema de gestión de almacén, almacenando información como el trabajador asociado, el código de orden de trabajo, las fechas de préstamo y devolución, y el estado del préstamo.
-   Material: Esta entidad representa un tipo de material disponible en el almacén, almacenando información como el ID del material, el nombre, la cantidad, el stock, el número de guía y la unidad de medida.
-   Ppe: Esta entidad representa un tipo de equipo de protección personal (EPP) disponible en el almacén, almacenando información como el ID del EPP, el nombre, la cantidad, el costo unitario, el costo total, el número de guía, el stock, la unidad de medida y una imagen opcional del EPP.
-   PpeLoan: Esta entidad representa el préstamo de un equipo de protección personal (EPP) a un trabajador, registrando información sobre el trabajador que recibe el préstamo, el EPP prestado, las fechas de entrega, el responsable del préstamo y una descripción del préstamo.
-   Tool: Esta entidad representa herramientas disponibles en un almacén, registrando información sobre el ID, nombre, cantidad, nivel de importancia, stock y número de guía.
-   Worker: Esta entidad representa a los trabajadores del almacén, registrando información sobre su DNI, cargo, fecha de contrato, nombre, apellido y estado (activo/inactivo).


##  Diccionario de datos

En la construcción de software y en el diccionario de datos sobre todo se recomienda y se utilizará el idioma inglés para especificar objetos, atributos, etc.

| Equipment | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo  | Clave  | Predeterminado  | Descripción |
| idEquipment  | Cadena  | No  | Sí  | Ninguno  | ID |
| name  | Cadena  | No  | No  | Ninguno  | Nombre |
| quantity  | Entero  | No  | No  | 0  | Cantidad |
| level  | Entero  | No  | No  | -1  | Nivel |
| stock  | Entero  | No  | No  | 0  | Stock |
| guideNumber  | Entero  | No  | No  | 0  | Número de Guía |

| Loan | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo  | Clave  | Predeterminado  | Descripción |
| idLoan  | Auto  | No  | Sí  | Ninguno  | ID de Préstamo |
| worker  | FK  | Sí  | No  | Ninguno  | Trabajador |
| material  | FK  | Sí  | No  | Ninguno  | Material |
| tool  | FK  | Sí  | No  | Ninguno  | Herramienta |
| equipment  | FK  | Sí  | No  | Ninguno  | Equipo |
| workOrderCode  | Entero  | No  | No  | 0  | Código de Órden de Trabajo |
| loanDate  | Fecha  | No  | No  | timezone.now  | Fecha de Entrega |
| returnLoanDate  | Fecha  | No  | No  | timezone.now  | Fecha de Devolución |
| loanStatus  | Bool  | No  | No  | False  | Estado del Préstamo |

|Material  | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo  | Clave  | Predeterminado | Descripción |
| idMaterial  | Cadena  | No  | Sí  | Ninguno  | ID |
| name  | Cadena  | No  | No  | Ninguno  | Nombre |
| quantity  | Entero  | No  | No  | 0  | Cantidad |
| stock  | Entero  | No  | No  | 0  | Stock |
| guideNumber  | Entero  | No  | No  | 0  | Número de Guía |
| unit  | Cadena  | No  | No  | ''  | Unidad |

| Ppe | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo  | Clave  | Predeterminado  | Descripción |
| idPpe  | Cadena  | No  | Sí  | Ninguno  | ID |
| name  | Cadena  | No  | No  | Ninguno  | Nombre |
| quantity  | Entero  | No  | No  | 0  | Cantidad |
| unitCost  | Decimal  | No  | No  | 0.0  | Costo Unitario |
| totalCost  | Decimal  | No  | No  | 0.0  | Costo Total |
| guideNumber  | Entero  | No  | No  | 0  | Número de Guía |
| stock  | Entero  | No  | No  | 0  | Stock |
| unit  | Cadena  | No  | No  | Ninguno  | Unidad |
| image  | Imagen  | Sí  | No  | Ninguno  | Imagen |

| PpeLoan | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo  | Clave  | Predeterminado  | Descripción |
| idPpeLoan  | Auto  | No  | Sí  | Ninguno  | ID de Préstamo de EPP |
| worker  | FK  | Sí  | No  | Ninguno  | Trabajador |
| ppe  | FK  | Sí  | No  | Ninguno  | Equipo de Protección Personal |
| loanDate  | Fecha  | No  | No  | timezone.now  | Fecha de Entrega |
| newLoanDate  | Fecha  | No  | No  | timezone.now  | Fecha de Nueva Entrega |
| manager  | Cadena  | No  | No  | Ninguno  | Nombre del Responsable |
| description  | Texto  | No  | No  | 'Es su primera entrega.'  | Descripción |

Tool | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo | Tipo |   | Nulo  | Clave  | Predeterminado  | | Descripción |
| iDTool  | Cadena  | No  | Sí  | Ninguno  | ID |
| name  | Cadena  | No  | No  | Ninguno  | Nombre |
| quantity  | Entero  | No  | No  | 0  | Cantidad |
| level  | Entero  | No  | No  | -1  | Nivel |
| stock  | Entero  | No  | No  | 0  | Stock |
| guideNumber  | Entero  | No  | No  | 0  | Número de Guía |

| Worker | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo | Tipo | Nulo | Clave | Predeterminado | Descripción |
| dni | Entero | No | Sí | Ninguno | DNI |
| position | Cadena | No | No | Ninguno | Cargo |
| contractDate | Fecha | No | No | timezone.now | Fecha de Contrato |
| name | Cadena | No | No | Ninguno | Nombres |
| surname | Cadena | No |   | No | Ninguno | Apellidos |
| workerStatus | Bool | No | No | True | Estado (Activo/Inactivo) |


##  Diagrama Entidad-Relación

<img src="https://github.com/matzSoncco/proyectoFinalPW2/blob/main/img/erd.png?raw=true" alt="" style="width:100%; height:auto"/>

##  Administración con Django
Instalar Django
```bash
pip install django
```

Crear el proyecto Django
```bash
django-admin startproject <your-name-project>
cd <your-name-project>
```

Crear tu app dentro del proyecto
```bash
django-admin startapp <your-name-app>
```

Agregar la app dentro de las configuraciones del proyecto
```python
INSTALLED_APPS = [
    ...
    '<your-name-app>',
]
```

Crear y aplicar las migraciones  
```bash
python manage.py makemigrations
python manage.py migrate
```






## CRUD - Core Business - Gestión de EPP
El núcleo de negocio del sistema de gestión de Equipos de Protección Personal (EPP) tiene valor de aceptación para los usuarios finales (trabajadores y administradores) y radica en realizar el proceso de gestión de EPP de manera eficiente, que comienza desde que:

1. El administrador inicia sesión:
- El administrador debe autenticarse en el sistema utilizando sus credenciales para acceder a la plataforma de gestión.

2. El administrador añade nuevos EPPs al inventario:
- El administrador puede añadir nuevos equipos de protección personal al inventario del sistema, especificando atributos como el nombre, cantidad, costo unitario, costo total, número de guía, etc.

3. El administrador registra trabajadores:
- El administrador puede registrar nuevos trabajadores en el sistema, proporcionando información como DNI, nombre, apellidos, cargo, fecha de contrato, y estado (activo/inactivo).

4. El administrador realiza préstamos de EPPs a los trabajadores:
- El administrador puede registrar el préstamo de EPPs a los trabajadores, especificando detalles como el trabajador, el EPP prestado, la fecha de préstamo, la fecha de devolución, el nombre del responsable y una descripción del préstamo.

5. El administrador puede actualizar el inventario de EPPs:
- El administrador puede modificar la información de los EPPs existentes en el inventario, ajustando la cantidad, el costo, el número de guía y otros atributos según sea necesario.

6. El administrador anula préstamos de EPPs:
- El administrador tiene la posibilidad de anular un préstamo de EPP por diversas razones, como cambio de trabajador, corrección de errores, etc.

7. El administrador puede ver el consolidado de los préstamos y el inventario de EPPs:
- El administrador puede acceder a una vista consolidada de todos los préstamos realizados, así como del inventario actual de EPPs, lo que le permite una gestión eficiente y controlada del stock.

8. El administrador cierra sesión:
- Una vez finalizadas las tareas de gestión, el administrador cierra sesión para asegurar la privacidad y seguridad de la información.



<!-- ## Github del proyecto: -->

## Servicios mediante una API RESTful
Se ha creado una aplicación que pone a disposición cierta información para ser consumida por otros clientes HTTP. La API RESTful permite gestionar y consultar datos de los Equipos de Protección Personal (EPP), trabajadores y préstamos de EPP.

- GET: Con el método GET se devolverá la lista de EPPs, trabajadores y préstamos registrados, permitiendo a los clientes ver esta información en cualquier otro medio. La información se entrega en formato JSON.

- POST: Con este método se enviará la información de nuevos EPPs, trabajadores o préstamos al sistema. Los datos enviados se almacenarán en la base de datos y se devolverá una confirmación de la operación en formato JSON.
 
 ## Consumiendo la API con Vue.js
 Instalacion de Vue js
 
```bash
npm install -g @vue/cli
```
Visualizacion de la web
- Principal
<img src="https://github.com/matzSoncco/proyectoFinalPW2/blob/main/img/home.jpeg?raw=true" alt="" style="width:100%; height:auto"/>

- Adminisrador
<img src="https://github.com/matzSoncco/proyectoFinalPW2/blob/main/img/administrator.jpeg?raw=true" alt="" style="width:100%; height:auto"/>

- Lista de trabajadores
<img src="https://github.com/matzSoncco/proyectoFinalPW2/blob/main/img/WorkersList.jpeg?raw=true" alt="" style="width:100%; height:auto"/>


- Consulta api

<img src="https://github.com/matzSoncco/proyectoFinalPW2/blob/main/img/api.jpeg?raw=true" alt="" style="width:100%; height:auto"/>


<!-- [license]: https://img.shields.io/github/license/rescobedoq/pw2?label=rescobedoq
[license-file]: https://github.com/rescobedoq/pw2/blob/main/LICENSE

[downloads]: https://img.shields.io/github/downloads/rescobedoq/pw2/total?label=Downloads
[releases]: https://github.com/rescobedoq/pw2/releases/

[last-commit]: https://img.shields.io/github/last-commit/rescobedoq/pw2?label=Last%20Commit -->

<!-- [Debian]: https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white
[debian-site]: https://www.debian.org/index.es.html -->

[Git]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[git-site]: https://git-scm.com/

[GitHub]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[github-site]: https://github.com/

<!-- [Vim]: https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white
[vim-site]: https://www.vim.org/

[Java]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white
[java-site]: https://docs.oracle.com/javase/tutorial/ -->


<!-- [![Debian][Debian]][debian-site] -->
[![Git][Git]][git-site]
[![GitHub][GitHub]][github-site]
<!-- [![Vim][Vim]][vim-site]
[![Java][Java]][java-site] -->


<!-- [![License][license]][license-file]
[![Downloads][downloads]][releases]
[![Last Commit][last-commit]][releases] -->
