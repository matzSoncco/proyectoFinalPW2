from rest_framework import serializers
from .models.Worker import Worker
from .models.Equipment import Equipment
from .models.Material import Material
from .models.Tool import Tool
from .models.Ppe import Ppe
from .models.Loan import Loan
from .models.PpeLoan import PpeLoan

class miAppSerializerWorker(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = '__all__'

class miAppSerializerEquipment(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = '__all__'

class miAppSerializerMaterial(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = '__all__'

class miAppSerializerTool(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'
        
class miAppSerializerPpe(serializers.ModelSerializer):
    class Meta:
        model = Ppe
        fields = '__all__'
        
class miAppSerializerLoan(serializers.ModelSerializer):
    class Meta:
        model = Loan
        fields = '__all__'
        
class miAppSerializerPpeLoan(serializers.ModelSerializer):
    class Meta:
        model = PpeLoan
        fields = '__all__'

        