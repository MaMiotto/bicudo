def cors_origin():
    origin = request.env.http_origin
    headers = {}
    headers['Access-Control-Allow-Origin'] = origin

    headers['Access-Control-Allow-Methods'] = '*'
    headers['Access-Control-Allow-Headers'] = '*'
    headers['Access-Control-Allow-Credentials'] = 'true';
    response.headers.update(headers)

    if request.env.request_method == 'OPTIONS':
        headers['Content-Type'] = None
        raise HTTP(200, '', **headers)

def cors_allow(action):

    def f(*args, **kwargs):
        cors_origin()
        return action(*args, **kwargs)

    f.__doc__ = action.__doc__
    f.__name__ = action.__name__
    f.__dict__.update(action.__dict__)

    return f

@cors_allow
@request.restful()
def api():

    def GET(*args, **vars):
        categorias = ["Pintura", "Manutenção", "Reparos", "Elétrica"]
        return response.json(categorias)
    return locals()