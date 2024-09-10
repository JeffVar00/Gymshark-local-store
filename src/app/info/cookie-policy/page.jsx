const LASTUPDATED = "6 Sep 2024";
const CookiePolicy = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12 lg:px-20 lg:py-16 h-auto mt-12 mx-6">
      <div className="flex flex-col items-center py-12 lg:py-40">
        <h1 className="text-2xl font-bold text-center lg:text-8xl ">
          POLÍTICAS DE PRIVACIDAD
        </h1>
        <div className="flex flex-row mt-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p className="text-xs md:text-sm text-gray-500">
            Última actualización: {LASTUPDATED}
          </p>
        </div>
      </div>
      <div className="max-w-6xl mt-18 space-y-8 text-left text-gray-800">
        {/* ¿Qué son las cookies? Sección */}
        <div>
          <h2 className="lg:text-lg font-bold">¿Qué son las cookies?</h2>
          <p className="mt-4 text-sm md:text-base">
            Al igual que la mayoría de los sitios web, nuestros sitios web usan
            cookies para recopilar información. Las cookies son pequeños
            archivos de datos que se colocan en su computadora u otros
            dispositivos (como teléfonos inteligentes o tabletas) mientras
            navega por nuestros sitios web. Se utilizan para 'recordar' cuando
            su computadora o dispositivo accede a nuestros sitios web. Nos
            permiten recordar si ha iniciado sesión en el sitio y qué artículos
            tenía en su carrito de compras. Las cookies son esenciales para el
            funcionamiento efectivo de nuestros sitios web y para ayudarle a
            comprar con nosotros en línea. También se utilizan para personalizar
            los productos y servicios que se le ofrecen y publicitan, tanto en
            nuestros sitios web como en otros lugares.
          </p>
        </div>

        {/* Sección de Información Recopilada */}
        <div>
          <h2 className="lg:text-lg font-bold">Información Recopilada</h2>
          <p className="mt-4 text-sm md:text-base">
            Algunas cookies recopilan información sobre el comportamiento de
            navegación y compra cuando accede a nuestros sitios web desde la
            misma computadora o dispositivo. Esto incluye información sobre las
            páginas visitadas, los productos comprados y su recorrido por un
            sitio web. Todos los datos transmitidos por las cookies son anónimos
            y nunca contendrán detalles individuales como su nombre, dirección,
            número de teléfono o información de pago, pero pueden contener
            nuestro número de referencia de cliente único para usted. Para
            obtener información más detallada sobre cómo funcionan las cookies,
            visite
            <a
              href="https://www.allaboutcookies.org"
              className="text-blue-600 hover:underline ml-1"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>
        </div>

        {/* Sección ¿Cómo se gestionan las cookies? */}
        <div>
          <h2 className="lg:text-lg font-bold">
            ¿Cómo se gestionan las cookies?
          </h2>
          <p className="mt-4 text-sm md:text-base">
            Las cookies almacenadas en su computadora u otro dispositivo cuando
            accede a nuestros sitios web son diseñadas por:
          </p>
          <ul className="text-sm md:text-base list-disc list-inside ml-4 mt-2">
            <li>
              Gymshark Limited o en nuestro nombre, y son necesarias para que
              pueda realizar compras en nuestros sitios web.
            </li>
          </ul>
        </div>

        {/* Sección ¿Para qué se usan las cookies? */}
        <div>
          <h2 className="lg:text-lg font-bold">
            ¿Para qué se usan las cookies?
          </h2>
          <p className="mt-4 text-sm md:text-base">
            Las cookies se utilizan con nuestros socios de marketing para
            presentarle ofertas y publicidad adecuadas mientras navega por otros
            sitios en Internet, en función de su actividad de navegación en
            nuestro sitio. Las cookies también nos permiten trabajar junto con
            nuestro socio de análisis web, Google Analytics, para ver cómo le
            gusta usar nuestro sitio web, qué páginas o funciones especiales
            prefiere y nos ayudan a mejorarlas.
          </p>
        </div>

        {/* Sección Tipos de Cookies */}
        <div>
          <h2 className="lg:text-lg font-bold">¿Qué tipo de cookies usamos?</h2>
          <p className="mt-4 text-sm md:text-base">
            Hay dos tipos de cookies que pueden usarse durante su visita a
            nuestro sitio:
          </p>
          <ul className="text-sm md:text-base list-disc list-inside ml-4 mt-2">
            <li>
              <strong>Cookies de sesión:</strong> Estas se eliminan después de
              cada visita a nuestro sitio. Le permiten agregar artículos al
              carrito y avanzar en el proceso de compra. Deshabilitar estas
              cookies impedirá que realice pedidos.
            </li>
          </ul>
        </div>

        {/* Sección Desactivar y eliminar cookies */}
        <div>
          <h2 className="lg:text-lg font-bold">
            Desactivar y eliminar cookies
          </h2>
          <p className="mt-4 text-sm md:text-base">
            La mayoría de los navegadores web proporcionarán la opción de
            desactivar o inhabilitar cookies. Cómo hacerlo depende del navegador
            web que esté utilizando. Las instrucciones para inhabilitar cookies
            generalmente se encuentran en el menú de Ayuda del navegador.
          </p>
          {/* Instrucciones del navegador */}
          <div className={`space-y-4 mt-4 text-sm md:text-base`}>
            <div>
              <strong>Para Microsoft Internet Explorer:</strong>
              <ul className={`list-disc list-inside ml-6 mt-2`}>
                <li>
                  Elija el menú Herramientas y luego Opciones de Internet.
                </li>
                <li>Haga clic en la pestaña Privacidad.</li>
                <li>Seleccione Avanzado.</li>
                <li>Elija la configuración adecuada.</li>
              </ul>
            </div>

            <div>
              <strong>Para Google Chrome:</strong>
              <ul className={`list-disc list-inside ml-6 mt-2`}>
                <li>Elija Configuración y haga clic en Avanzado.</li>
                <li>
                  En Privacidad y seguridad, haga clic en Configuración de
                  contenido.
                </li>
                <li>Haga clic en Cookies.</li>
              </ul>
            </div>

            <div>
              <strong>Para Safari:</strong>
              <ul className={`list-disc list-inside ml-6 mt-2`}>
                <li>Elija Preferencias &gt; Privacidad.</li>
                <li>Haga clic en Bloquear todas las cookies.</li>
              </ul>
            </div>

            <div>
              <strong>Para Mozilla Firefox:</strong>
              <ul className={`list-disc list-inside ml-6 mt-2`}>
                <li>
                  Haga clic en el ícono del menú y luego seleccione Opciones.
                </li>
                <li>Haga clic en el ícono de Privacidad & Seguridad.</li>
                <li>
                  Encuentre el menú de cookies y seleccione las opciones
                  correspondientes.
                </li>
              </ul>
            </div>

            <div>
              <strong>Para Opera 6.0 y posteriores:</strong>
              <ul className={`list-disc list-inside ml-6 mt-2`}>
                <li>Elija el ícono del menú y seleccione Configuración.</li>
                <li>Haga clic en Privacidad & Seguridad.</li>
                <li>Elija la configuración adecuada.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
