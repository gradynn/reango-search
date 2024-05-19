from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json

from . import helpers

# Create your views here.
@api_view(['GET'])
def index(request):
    """
    Index route to check health of the server.
    """
    response = {
        "message": "Server is up and running."
    }
    return Response(response)


@api_view(['GET'])
def search(request, country_name):
    """
    Search route takes a country name and returns foreign translations of that countries name.
    """
    with open('./api/countries-sorted.json') as file:
        data = json.load(file)
    
    country_data = helpers.binary_search_country(data, country_name)
    if not country_data:
        return Response({ 'message': "Country not found in dataset" }, status=status.HTTP_404_NOT_FOUND)
    
    response = []
    for cca3 in country_data.keys():
        common_name = helpers.search_cca3(data, cca3)
        if not common_name:
            response.append({
                cca3: country_data[cca3]
            })
        else:
            response.append({
                common_name: country_data[cca3]
            })

    return Response(response)