function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto prose prose-gray text-gray-900 mt-8">
      <h2 className="text-center text-3xl font-bold mb-6">Preguntas Frecuentes</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-black">¿Cuál es nuestra política de devoluciones?</h3>
        <p>
          En Nukko no ofrecemos devoluciones ni cambios, pero si algo no está bien con tu pedido, ¡queremos ayudarte! 
          Por favor, contáctanos en{" "}
          <a
            href="mailto:support@nukko.com"
            className="text-black underline hover:text-gray-700"
          >
            support@nukko.com
          </a>{" "}
          y estaremos encantados de solucionar el problema.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-black">¿Ofrecen reembolsos?</h3>
        <p>
          Los reembolsos se ofrecen únicamente si recibiste un artículo incorrecto o dañado. 
          En ese caso, por favor, envíanos un correo a{" "}
          <a
            href="mailto:support@nukko.com"
            className="text-black underline hover:text-gray-700"
          >
            support@nukko.com
          </a>{" "}
          con fotos del artículo incorrecto o dañado. Nos encargaremos de corregirlo por ti.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-black">¿Puedo cambiar un artículo por otro tamaño/color?</h3>
        <p>
          Actualmente, no ofrecemos cambios. Si tienes dudas sobre las tallas, consulta nuestras tablas de tallas, 
          disponibles en la descripción de cada producto. 
        </p>
        <p>
          En casos raros, es posible que un artículo haya sido etiquetado incorrectamente. Si esto ocurre, contáctanos dentro 
          de una semana después de recibir tu pedido a{" "}
          <a
            href="mailto:support@nukko.com"
            className="text-black underline hover:text-gray-700"
          >
            support@nukko.com
          </a>. Incluye tu número de pedido y fotos del artículo con el etiquetado incorrecto. Te enviaremos uno nuevo o 
          emitiremos un reembolso.
        </p>
      </div>

      <p className="text-center font-semibold mt-6">
        ¿Tienes alguna otra pregunta? ¡Escríbenos! Estamos aquí para ayudarte. ❤️
      </p>
    </div>
  );
}

export default TermsPage;
