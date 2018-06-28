from django.shortcuts import render


def top_page(request):
    return render(request, 'homepage/top_page.html', {})

def members(request):
    return render(request, 'homepage/members.html', {})
