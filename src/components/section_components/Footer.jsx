import ListToBottomList from "@/components/menu_components/ListToBottomList";
import Contact from "@/components/section_components/Contact";
import { wixClientServer } from "@/lib/wixClientServer";
import { members } from "@wix/members";

const Footer = async () => {
  const wixClient = await wixClientServer();

  let user;
  try {
    user = await wixClient.members.getCurrentMember({
      fieldsets: [members.Set.FULL],
    });
  } catch (error) {
    user = null;
  }

  return (
    <footer className="bg-websecundary text-webprimary">
      <div className="px-4 lg:px-16 lg:py-8 border-t-2 border-b-2 border-webprimary">
        <div className="flex flex-col lg:flex-row justify-between lg:gap-6 xl:gap-8">
          <div className="flex flex-col lg:flex-row justify-start lg:gap-4">
            <ListToBottomList
              title={"Tienda"}
              references={[
                { id: 1, title: "Inicio", link: "/" },
                {
                  id: 2,
                  title: "Todos los Productos",
                  link: "/colecciones?cat=all-products",
                },
                {
                  id: 3,
                  title: "Accesorios",
                  link: "/colecciones?cat=accesorios",
                },
                {
                  id: 4,
                  title: "Hogar",
                  link: "/colecciones?cat=hogar",
                },
                {
                  id: 5,
                  title: "Ropa",
                  link: "/colecciones?cat=all-products&collections=Hombre%2CMujer",
                },
              ]}
            />
            <ListToBottomList
              title={"Ayuda"}
              references={[
                // {
                //   id: 1,
                //   title: "Términos y Condiciones",
                //   link: "/info/terminos-condiciones",
                // },
                // { id: 2, title: "Términos de Uso", link: "/info/terminos-uso" },
                {
                  id: 3,
                  title: "Política de Privacidad",
                  link: "/info/politica-privacidad",
                },
              ]}
            />
            <ListToBottomList
              title="Compañía"
              references={[
                { id: 1, title: "Contáctanos", link: "/info/contactanos" },
                // { id: 2, title: "Nosotros", link: "/info/nosotros" },
              ]}
            />
            <ListToBottomList
              title="Mi Cuenta"
              references={
                !user?.member?.contactId
                  ? [
                      {
                        id: 1,
                        title: "Iniciar Sesión",
                        link: "/iniciar-sesion",
                      },
                      {
                        id: 2,
                        title: "Registrarse",
                        link: "/iniciar-sesion?mode=signUp",
                      },
                    ]
                  : [{ id: 1, title: "Perfil", link: "/perfil" }]
              }
            />
          </div>
          <div className="hidden lg:flex ">
            <Contact />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-2 items-center md:items-end md:flex-row md:justify-between my-8 lg:my-0 mx-2">
          <div className="flex lg:hidden">
            <Contact />
          </div>
          <div className="flex flex-col gap-2 lg:hidden items-center md:items-end text-sm text-webprimary font-semibold">
            <div className="flex flex-row ">
              <span className="hidden md:flex font-bold mr-4">{"Idioma"}</span>
              <span>
                {"Costa Rica"} | {"Español"}
              </span>
            </div>
            <div className="flex flex-row">
              <span className="hidden md:flex font-bold mr-4">{"Moneda"}</span>
              <span>{"₡ CRC"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-center py-4 px-6 text-center">
        <p className="text-xs  xl:text-sm  font-semibold text-webprimary ">
          {
            "© 2024 Tienda M&M CR | Todos los Derechos Reservados. | Nos dedicamos a ti."
          }
        </p>
        <div className="hidden lg:flex justify-center space-x-4 text-xs xl:text-sm font-semibold text-webprimary">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="">
              <span className="font-bold mr-4">{"Idioma"}</span>
              <span className="font-medium">
                {"Costa Rica"} | {"Español"}
              </span>
            </div>
            <div className="">
              <span className="font-bold mr-4">{"Moneda"}</span>
              <span className="font-medium">{"₡ CRC"}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
