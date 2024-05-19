def binary_search_country(data, country_name):
    l, r = 0, len(data) - 1

    while l <= r:
        m = (l + r) // 2
        mid_country = data[m]['name']['common']

        if country_name == mid_country:
            return data[m]['translations']
        elif country_name < mid_country:
            r = m - 1
        else:
            l = m + 1

    return None

def search_cca3(data, country_cca3):
    for country in data:
        if country['cca3'].lower() == country_cca3:
            return country['name']['common']
    return None