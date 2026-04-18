from django.http import JsonResponse
def prompt_list(request):
    return JsonResponse([{'id':1,'title':'Sample Prompt','complexity':5}], safe=False)
