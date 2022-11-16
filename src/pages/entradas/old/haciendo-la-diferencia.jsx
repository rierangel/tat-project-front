import Layer from "src/components/Layer";
import NoticiaList from "src/components/Layer/data_display/EntradasList";

export default function Page() {
    // const cont = [...Array(10).keys()];

    return (
        <Layer>

            <div className="subtitle ">
                <i>
                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.12511 0C5.03109 0 3.98188 0.434597 3.2083 1.20818C2.43471 1.98177 2.00011 3.03098 2.00011 4.125V10.8855C2.6751 10.3278 3.43461 9.88122 4.25011 9.5625V4.125C4.25011 3.09 5.09011 2.25 6.12511 2.25H27.8751C28.9101 2.25 29.7501 3.09 29.7501 4.125V19.875C29.7501 20.91 28.9101 21.75 27.8751 21.75H15.4626L17.7126 24H27.8751C28.4168 24 28.9532 23.8933 29.4537 23.686C29.9542 23.4787 30.4089 23.1749 30.7919 22.7918C31.175 22.4088 31.4788 21.954 31.6861 21.4536C31.8934 20.9531 32.0001 20.4167 32.0001 19.875V4.125C32.0001 3.03098 31.5655 1.98177 30.7919 1.20818C30.0183 0.434597 28.9691 0 27.8751 0H6.12511ZM11.9946 10.5C12.8542 11.1056 13.5908 11.8692 14.1651 12.75H24.8751C25.1735 12.75 25.4596 12.6315 25.6706 12.4205C25.8816 12.2095 26.0001 11.9234 26.0001 11.625C26.0001 11.3266 25.8816 11.0405 25.6706 10.8295C25.4596 10.6185 25.1735 10.5 24.8751 10.5H11.9946ZM21.8751 17.25H15.5001C15.5008 16.4893 15.3964 15.7321 15.1896 15H21.8751C22.1735 15 22.4596 15.1185 22.6706 15.3295C22.8816 15.5405 23.0001 15.8266 23.0001 16.125C23.0001 16.4234 22.8816 16.7095 22.6706 16.9205C22.4596 17.1315 22.1735 17.25 21.8751 17.25V17.25ZM9.12511 6C8.82674 6 8.54059 6.11853 8.32962 6.32951C8.11864 6.54048 8.00011 6.82663 8.00011 7.125C8.00011 7.42337 8.11864 7.70952 8.32962 7.92049C8.54059 8.13147 8.82674 8.25 9.12511 8.25H18.8751C19.1735 8.25 19.4596 8.13147 19.6706 7.92049C19.8816 7.70952 20.0001 7.42337 20.0001 7.125C20.0001 6.82663 19.8816 6.54048 19.6706 6.32951C19.4596 6.11853 19.1735 6 18.8751 6H9.12511ZM7.25011 24C8.65187 24.002 10.0192 23.5657 11.1606 22.752L15.0801 26.67C15.1831 26.7805 15.3073 26.8692 15.4453 26.9307C15.5833 26.9922 15.7323 27.0252 15.8833 27.0279C16.0344 27.0306 16.1844 27.0028 16.3245 26.9462C16.4646 26.8896 16.5918 26.8054 16.6987 26.6986C16.8055 26.5917 16.8897 26.4645 16.9463 26.3244C17.0029 26.1843 17.0307 26.0343 17.028 25.8832C17.0253 25.7322 16.9923 25.5832 16.9308 25.4452C16.8693 25.3072 16.7806 25.183 16.6701 25.08L12.7521 21.1605C13.6287 19.9271 14.0655 18.435 13.9924 16.9236C13.9192 15.4122 13.3403 13.9692 12.3486 12.8263C11.357 11.6834 10.01 10.9068 8.52407 10.6213C7.03809 10.3357 5.49927 10.5577 4.15462 11.2517C2.80997 11.9457 1.73748 13.0713 1.10934 14.4479C0.481186 15.8245 0.333805 17.3723 0.69085 18.8427C1.0479 20.3132 1.88866 21.621 3.07817 22.5562C4.26768 23.4915 5.73695 24 7.25011 24V24ZM7.25011 21.75C6.05664 21.75 4.91204 21.2759 4.06813 20.432C3.22422 19.5881 2.75011 18.4435 2.75011 17.25C2.75011 16.0565 3.22422 14.9119 4.06813 14.068C4.91204 13.2241 6.05664 12.75 7.25011 12.75C8.44359 12.75 9.58818 13.2241 10.4321 14.068C11.276 14.9119 11.7501 16.0565 11.7501 17.25C11.7501 18.4435 11.276 19.5881 10.4321 20.432C9.58818 21.2759 8.44359 21.75 7.25011 21.75V21.75Z" fill="#0054A4" />
                    </svg>
                </i>
                <h1 className="">Haciendo la Diferencia</h1>
            </div>

            <p className="mt-6 mb-16">
                {`Como parte de nuestra "visión" encaminada a "Ser reconocidos por la calidad y efectividad de nuestras actuaciones y mantener un recurso humano calificado", el Tribunal Administrativo Tributario organiza y participa de distintas actividades que promueven la responsabilidad social de la institución.`}
                </p>

            <NoticiaList />
        </Layer>
    )
}