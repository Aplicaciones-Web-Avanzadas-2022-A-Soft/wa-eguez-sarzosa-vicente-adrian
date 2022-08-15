import {Controller, Get, HttpCode, HttpStatus, Param, Query} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Controller('usuario')
export class UsuarioController {
    // Inyectar las dependencias
    constructor(
        private readonly usuarioService: UsuarioService
    ) {}

    // 1 Informativo
    // 2 OK
    // 3 Redireccion
    // 4 Error cliente
    // 5 Error servidor

    // parametros:
            // 1 QueryParams ?id=1&consulta=Adrian
            // 2 BodyParams (viajan en el formulario)
            // 3 Parametros de ruta /usuario/:id/notas

    @Get("/") // GET /usuario/
    @HttpCode(200)
    find(
        @Query() queryParams,
        @Param() params
    ){
        return this.usuarioService.find({});
    }

    @Get("/:id") // GET /usuario/1
    @HttpCode(200)
    findOneById(
        @Query() queryParams,
        @Param() params
    ){
        return this.usuarioService.findOneById(+params.id);
    }
}
