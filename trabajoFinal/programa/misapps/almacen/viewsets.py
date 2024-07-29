from rest_framework import viewsets
from .models.Worker import Worker
from .models.Equipment import Equipment
from .models.Material import Material
from .models.Tool import Tool
from .models.Ppe import Ppe
from .models.Loan import Loan
from .models.PpeLoan import PpeLoan
from .serializer import miAppSerializerWorker, miAppSerializerEquipment, miAppSerializerMaterial, miAppSerializerTool, miAppSerializerPpe, miAppSerializerLoan, miAppSerializerPpeLoan

class MiAppViewSetWorker(viewsets.ModelViewSet):
    queryset = Worker.objects.all()
    serializer_class = miAppSerializerWorker

class MiAppViewSetEquipment(viewsets.ModelViewSet):
    queryset = Equipment.objects.all()
    serializer_class = miAppSerializerEquipment
    
class MiAppViewSetMaterial(viewsets.ModelViewSet):
    queryset = Material.objects.all()
    serializer_class = miAppSerializerMaterial

class MiAppViewSetTool(viewsets.ModelViewSet):
    queryset = Tool.objects.all()
    serializer_class = miAppSerializerTool
    
class MiAppViewSetPpe(viewsets.ModelViewSet):
    queryset = Ppe.objects.all()
    serializer_class = miAppSerializerPpe
    
class MiAppViewSetLoan(viewsets.ModelViewSet):
    queryset = Loan.objects.all()
    serializer_class = miAppSerializerLoan
    
class MiAppViewSetPpeLoan(viewsets.ModelViewSet):
    queryset = PpeLoan.objects.all()
    serializer_class = miAppSerializerPpeLoan

    