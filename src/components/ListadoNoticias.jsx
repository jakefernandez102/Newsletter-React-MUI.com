import { Grid, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {
    
    const {noticias,totalNoticias,handleChangePagina,pagina}=useNoticias()

    const totalPaginas = Math.ceil(totalNoticias /20);

  return (
    <>
        <Typography
            textAlign='center'
            marginY={5}
            variant='h3'
            component='h2'
        >Last News</Typography>
        <Grid
            container
            spacing={2}
        >
            {noticias.map((noticia)=>(
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
            
        </Grid>

        <Stack 
            spacing={5}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{marginY:5}}
        >
            <Pagination 
                count={totalPaginas} 
                color="primary" 
                onChange={handleChangePagina}
                page={pagina}    
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias
