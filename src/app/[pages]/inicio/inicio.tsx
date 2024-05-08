import Navbar from "app/app/_components/Navbar";
import Link from "next/link";


export default function Inicio() {

    return(
        <div>
            <div>
                <h1>Queres subir tu complejo deportivo? <Link href="/registroalquiler" className="text-green-400">Ingresa aca</Link></h1>
            </div>
            <main className="flex min-h-screen flex-col items-center justify-center bg-white">
                <div>
                    <h1>Alquilar una cancha</h1>
                </div>
                <div className="bg-slate-200 rounded-lg">
                    <input></input>
                </div>
            </main>
        </div>
    )
}
{/* <div className="py-3 pl-7 pr-3 flex flex-col lg:flex-row lg:justify-between"><div>
    <div className="Flex-sc-kiay30-0 indexstyled__InputContainer-sc-c207f5-3 hnpNvK">
        <svg width="26" height="25" viewBox="0 0 30 29" fill="none"><path d="M14.81 15.708a3.625 3.625 0 100-7.25 3.625 3.625 0 000 7.25z" stroke="#00B04B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.81 2.417a9.667 9.667 0 00-9.666 9.666c0 2.287.485 3.782 1.812 5.438l7.854 9.062 7.854-9.062c1.327-1.656 1.813-3.152 1.813-5.438a9.667 9.667 0 00-9.667-9.666v0z" stroke="#00B04B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            </path>
            </svg>
            <input placeholder="Buscar Ciudad" type="text" className="indexstyled__StyledInput-sc-c207f5-2 hjsWwV" value=""/>
                </div>
                </div>
                <div className="Flex-sc-kiay30-0 DropDown__Container-sc-2l1mua-1 dkppuj DropDown_Container ">
                    <svg width="20" height="20"><defs>
                        <style></style>
                    </defs>
                    <g id="ico-futbol_svg__Capa_2" data-name="Capa 2">
                        <g id="ico-futbol_svg__Capa_1-2" data-name="Capa 1">
                            <g id="ico-futbol_svg__Capa_2-2" data-name="Capa 2">
                            <g id="ico-futbol_svg__Capa_1-2-2" data-name="Capa 1-2">
                                <g id="ico-futbol_svg__Capa_2-2-2" data-name="Capa 2-2">
                                    <g id="ico-futbol_svg__Capa_1-2-2-2" data-name="Capa 1-2-2">
                                        <g id="ico-futbol_svg__Capa_1-3" data-name="Capa 1-3">
                                            <path className="ico-futbol_svg__cls-1" d="M16.41 2.78a9.65 9.65 0 102.86 6.81 9.64 9.64 0 00-2.86-6.81zm-2.8 14.48l.39-1.79a.54.54 0 00-.36-.63l-2.17-.61a.55.55 0 00-.46.08L8.7 15.92a.52.52 0 00-.15.7l1 1.5v.13A8.66 8.66 0 012.82 15l1.46-.52a.54.54 0 00.35-.48l-.44-3a.5.5 0 00-.19-.42l-1.55-1a.54.54 0 00-.73.16.08.08 0 010 .07l-.61 1.33a8.7 8.7 0 011.18-6.27.11.11 0 000 .08l.06.15a.52.52 0 00.65.29h.1l2-1.47a.5.5 0 00.15-.14L6 2.57a.53.53 0 00-.13-.72.49.49 0 00-.17 0 8.72 8.72 0 013.91-1l2.47 1.76a.61.61 0 00.18.09l4 1.17a8.88 8.88 0 011.58 2.71.49.49 0 00-.5-.13.55.55 0 00-.34.31c-.43 1-.62 1.39-.7 1.58a.63.63 0 00-.05.3l.43 3a.54.54 0 00.54.45h.43a.49.49 0 00.35-.13 8.57 8.57 0 01-4.39 5.3zM10.88 4.41zM10.88 4.41z"></path>
                                            <path className="ico-futbol_svg__cls-1" d="M14.74 8l-1.68-.54-.06-.03-.05-.1-1.4-2.55-.05-.17a1 1 0 010-.17l.32-.93a.06.06 0 000-.08.06.06 0 00-.09 0l-.7.85a2.58 2.58 0 01-.42.13l-2.72.53h-.27l-1.39-.56a.08.08 0 00-.09 0 .09.09 0 000 .12l1 .78a.94.94 0 01.09.12v.33L7 8.07v.21a.35.35 0 01-.08.16l-.15.15-1.44 1.34v.05a.06.06 0 00.07 0L7 9.07A1.33 1.33 0 017.37 9l.11.05h.11l2.35 1 .19.09h.07a.7.7 0 01.12.28l.56 1.85H11v-.06l-.22-2.07a1.92 1.92 0 010-.22l.13-.1L12.85 8h.21l1.66.17V8.1v-.08z">
                                                </path></g></g></g></g></g></g></g></svg>
                                                <span className="DropDown__Text-sc-2l1mua-0 iVWaBC DropDown__Text placeholder" title="Elige deporte">Elige deporte</span>
                                                </div>
                                                <article className="Flex-sc-kiay30-0 dhILBC">
                                                    <div className="react-datepicker-wrapper">
                                                        <div className="react-datepicker__input-container">
                                                            <div data-cy="datepicker" className="Flex-sc-kiay30-0 styled__ContainerDate-sc-18nhrbl-5 ehlnzq datepicker-container-date" role="presentation"><svg width="26" height="25" viewBox="0 0 30 29" fill="none"><path d="M25.703 5.21h-4.758V3.399a.227.227 0 00-.227-.226h-1.586a.227.227 0 00-.226.226v1.813h-7.25V3.398a.227.227 0 00-.227-.226H9.843a.227.227 0 00-.226.226v1.813H4.859a.905.905 0 00-.906.906v18.805c0 .501.405.906.906.906h20.844a.905.905 0 00.906-.906V6.117a.905.905 0 00-.906-.906zM24.57 23.79H5.992V13.026H24.57V23.79zM5.992 11.101V7.25h3.625v1.36c0 .124.102.226.226.226h1.586a.227.227 0 00.227-.227V7.25h7.25v1.36c0 .124.102.226.226.226h1.586a.227.227 0 00.227-.227V7.25h3.625v3.852H5.992z" fill="#00B04B"></path></svg><span className="styled__TextDate-sc-18nhrbl-4 jEZQrr filled">Mañana 09/05</span>
                                                            </div>
                                                            </div>
                                                            
                                                            </div>
                                                            </article>
                                                            <div className="Flex-sc-kiay30-0 DropDown__Container-sc-2l1mua-1 dkppuj DropDown_Container ">
                                                                <svg width="26" height="25" viewBox="0 0 30 29" fill="none"><path d="M14.832 2.417c-6.663 0-12.083 5.42-12.083 12.083s5.42 12.083 12.083 12.083 12.083-5.42 12.083-12.083-5.42-12.083-12.083-12.083zm0 21.75c-5.33 0-9.667-4.337-9.667-9.667s4.337-9.667 9.667-9.667 9.666 4.337 9.666 9.667-4.336 9.667-9.666 9.667z" fill="#00B04B">
                                                                    </path>
                                                                    <path d="M16.04 8.458h-2.416V15l3.979 3.98 1.708-1.71-3.27-3.27V8.458z" fill="#00B04B">
                                                                        </path>
                                                                        </svg>
                                                                        <span className="DropDown__Text-sc-2l1mua-0 iVWaBC DropDown__Text filled" title="20:00hs">20:00hs</span></div><a className="min-w-[10rem] flex items-center justify-center py-2 px-5 text-sm font-semibold transition-colors cursor-pointer rounded-3xl bg-primary-p1 text-misc-white hover:bg-primary-p2 bg-grey-p4 text-misc-white hover:bg-grey-p4 pointer-events-none select-none" id="tag-manager-home-desktop-courts-searcher" href="/results?horario=20%3A00&amp;tipoDeporte=1&amp;dia=2024-05-09&amp;placeId=69y7pkxfg&amp;locationName=">Buscar canchas</a>
                                                                        </div> */}