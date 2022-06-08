interface LoginProperties {
    propiedadesImagen: {
        width: number;
        height: number;
        urlImagen: string;
    };
}

type LoginPropiertiesType = {
    propiedadesImagen: {
        width: number;
        height: number;
        urlImagen: string;
    };
}

const LoginHome = (props: LoginProperties) => {
    // const propiedadesImagen = {
    //     width: 200,
    //     height: 100,
    //     urlImagen: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'
    // };
    return (
        <>
            <h1>Login home</h1>
            <img src={props.propiedadesImagen.urlImagen}
                 width={props.propiedadesImagen.width}
                 height={props.propiedadesImagen.height}
                 alt=""/>
        </>
    )
}
export default LoginHome