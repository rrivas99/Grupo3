import axios from './root.service';

export async function getAllActividades() {
    try {
        const response = await axios.get('/actividades');

        if (response?.data?.data){
            return response.data.data;
        }else{
            console.warn("No estan los datos esperados", response);
            return [];
        }
    } catch (error) {
        console.error("Error obteniendo las actividades", error);
        return [];
    }
}

export async function createActividad(actividad) {
    try {
        const response = await axios.post('/actividades/crear', actividad);
        return[response.data, null];
    } catch (error) {
        console.error("Error al crear la actividad", error);
        return [null, error];
    }
}