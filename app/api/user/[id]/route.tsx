const BEARER_TOKEN: string | undefined = process.env.PRINTFUL_API_KEY;

interface ErrorResponse {
  message: string;
  error: string;
}

export async function GET(request: Request): Promise<Response> {
  const params = new URL(request.url).searchParams;
  const categories = params.get('category');
  console.log(categories);

  try {
    let response: Response;
    
    // Si no hay categorías, se hace la solicitud sin filtro
    if (!categories || categories === null) {
      response = await fetch(`https://api.printful.com/store/products`, {
        headers: {
          'Authorization': `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      
    } else {
      const categoryList = categories.split(',').map(id => id.trim());
      console.log(`Fetching products for categories: ${categoryList}`);
      const categoryParams = categoryList.map(id => `category_id=${id}`).join('&');
      response = await fetch(`https://api.printful.com/store/products?${categoryParams}`, {
        headers: {
          'Authorization': `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
    }

    console.log(response);
    
    // Manejo de respuestas no exitosas
    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      return new Response(JSON.stringify(errorData), { 
        status: response.status, 
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Respuesta exitosa
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    // Verificamos si el error es un objeto y contiene la propiedad 'message'
    if (error instanceof Error) {
      const errorResponse: ErrorResponse = {
        message: 'Internal Server Error',
        error: error.message || 'Unknown Error',
      };
      return new Response(JSON.stringify(errorResponse), { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Si el error no es una instancia de Error, devolvemos un error genérico
    const errorResponse: ErrorResponse = {
      message: 'Internal Server Error',
      error: 'Unknown Error',
    };
    return new Response(JSON.stringify(errorResponse), { 
      status: 500, 
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
