from django.db import models

class Type(models.Model):
    name = models.TextField(max_length=30, blank=False, null=False, default="INNE")
    
    def __str__(self):
        return f'Type: {self.name}'