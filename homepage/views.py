from django.shortcuts import render


def top_page(request):
    return render(request, 'homepage/top_page.html', {})
