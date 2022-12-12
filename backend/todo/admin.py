from django.contrib import admin
from .models import ToDo
# Register your models here.

class ToDOAdmin(admin.ModelAdmin):
    list_display= ("title","description","completed")
    

#Register the model

admin.site.register(ToDo,ToDOAdmin)