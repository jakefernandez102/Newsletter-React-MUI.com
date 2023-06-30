/* eslint-disable react/prop-types */
import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';

const Noticia = ({noticia}) => {

    const {urlToImage,url,title,description,source} =noticia;

  return (
    <>
        <Grid
            item
            xs={1}
            md={6}
            lg={4}
            >
            <Card>
                <CardMedia
                    component='img'
                    alt={`news notice image: ${title}`}
                    image={urlToImage}
                    height={'250'}
                    
                    />
                <CardContent>
                    <Typography
                        variant={'body1'}
                        color={'error'}
                        >
                        {source?.name}
                    </Typography>
                    <Typography
                        variant={'h5'}
                        component={'div'}
                        >
                        {title}
                    </Typography>
                    <Typography
                        variant={'body2'}
                        >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        href={url}
                        variant={'button'}
                        width={'100%'}
                        textAlign={'center'}
                        sx={{textDecoration:'none'}}
                        target={'_blank'}
                        >Read New</Link>
                </CardActions>
            </Card>
        </Grid>
    </>
  )
}

export default Noticia
