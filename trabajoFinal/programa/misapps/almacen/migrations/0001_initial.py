# Generated by Django 5.0.6 on 2024-06-26 04:56

import django.core.validators
import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Equipment',
            fields=[
                ('idEquipment', models.CharField(editable=False, max_length=10, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='Nombre')),
                ('quantity', models.IntegerField(default=0, verbose_name='Cantidad')),
                ('level', models.IntegerField(choices=[(0, 'Elija un nivel'), (1, 'Bajo'), (2, 'Medio'), (3, 'Mayor')], default=0, verbose_name='Nivel')),
                ('stock', models.IntegerField(default=0, verbose_name='Stock')),
                ('guideNumber', models.IntegerField(default=0, verbose_name='Número de Guía')),
            ],
        ),
        migrations.CreateModel(
            name='Material',
            fields=[
                ('idMaterial', models.CharField(editable=False, max_length=10, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='Nombre')),
                ('quantity', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)], verbose_name='Cantidad')),
                ('stock', models.IntegerField(default=0)),
                ('guideNumber', models.IntegerField(default=0, verbose_name='Número de Guía')),
                ('unit', models.CharField(default='', max_length=20, verbose_name='Unidad')),
            ],
        ),
        migrations.CreateModel(
            name='Ppe',
            fields=[
                ('idPpe', models.CharField(editable=False, max_length=10, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='Nombre')),
                ('quantity', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)], verbose_name='Cantidad')),
                ('unitCost', models.DecimalField(decimal_places=2, default=0.0, max_digits=8, verbose_name='Costo Unitario')),
                ('totalCost', models.DecimalField(decimal_places=2, default=0.0, editable=False, max_digits=10, verbose_name='Costo Total')),
                ('guideNumber', models.IntegerField(default=0, verbose_name='Número de Guía')),
                ('stock', models.IntegerField(default=0)),
                ('unit', models.CharField(default='', max_length=20, verbose_name='Unidad')),
                ('image', models.ImageField(blank=True, null=True, upload_to='uploads/')),
            ],
        ),
        migrations.CreateModel(
            name='Tool',
            fields=[
                ('idTool', models.CharField(editable=False, max_length=10, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='Nombre')),
                ('quantity', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)], verbose_name='Cantidad')),
                ('level', models.IntegerField(choices=[(0, 'Elija un nivel'), (1, 'Bajo'), (2, 'Medio'), (3, 'Mayor')], default=0, verbose_name='Nivel')),
                ('stock', models.IntegerField(default=0)),
                ('guideNumber', models.IntegerField(default=0, verbose_name='Número de Guía')),
            ],
        ),
        migrations.CreateModel(
            name='Worker',
            fields=[
                ('dni', models.IntegerField(default=0, primary_key=True, serialize=False, verbose_name='DNI')),
                ('position', models.CharField(default=None, max_length=20, verbose_name='Cargo')),
                ('contractDate', models.DateField(default=django.utils.timezone.now, verbose_name='Fecha de Contrato')),
                ('name', models.CharField(max_length=20, verbose_name='Nombres')),
                ('surname', models.CharField(max_length=20, verbose_name='Apellidos')),
                ('workerStatus', models.BooleanField(default=True, verbose_name='Estado (Activo/Inactivo)')),
            ],
        ),
        migrations.CreateModel(
            name='PpeLoan',
            fields=[
                ('idPpeLoan', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('loanDate', models.DateField(default=django.utils.timezone.now, verbose_name='Fecha de Entrega')),
                ('newLoanDate', models.DateField(default=django.utils.timezone.now, verbose_name='Fecha de Nueva Entrega')),
                ('manager', models.CharField(default='', max_length=20, verbose_name='Nombre del Responsable')),
                ('description', models.TextField(default='Es su primera entrega.', verbose_name='Descripción')),
                ('ppe', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='almacen.ppe')),
                ('worker', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='almacen.worker')),
            ],
        ),
        migrations.CreateModel(
            name='Loan',
            fields=[
                ('idLoan', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('workOrderCode', models.IntegerField(default=0, verbose_name='Código de Órden de Trabajo')),
                ('loanDate', models.DateField(default=django.utils.timezone.now, verbose_name='Fecha de Entrega')),
                ('returnLoanDate', models.DateField(default=django.utils.timezone.now, verbose_name='Fecha de Devolución')),
                ('loanStatus', models.BooleanField(default=False, verbose_name='Estado (Devuelto/No devuelto)')),
                ('equipment', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='almacen.equipment')),
                ('material', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='almacen.material')),
                ('tool', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='almacen.tool')),
                ('worker', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='almacen.worker')),
            ],
        ),
    ]
