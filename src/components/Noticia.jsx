/* eslint-disable react/prop-types */
import { Box, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';

const Noticia = ({ article}) => {

    // const {urlToImage,url,title,description,source} =noticia;
    const {image,url,title,body,source,time} =article;

  return (
    <>
        <Grid
            item
            
            md={6}
            lg={4}
            >
            <Card
                width={'1000%'}
                sx={{
                    boxShadow:'-2px 3px 9px .1px gray',
                    borderLeft:'4px solid lightgray',
                    borderBottom:'3px solid lightgray',
                    borderTopLeftRadius:'50px'
                }}
            >
                <CardMedia
                    component='img'
                    alt={`news notice image: ${title}`}
                    image={image}
                    height={'250'}
                    
                    />
                <CardContent 
                   
                >
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        marginBottom={1}
                    >
                    <Typography
                        variant={'body1'}
                        color={'error'}
                        >
                        {source?.title}
                    </Typography>
                    <Typography
                        variant={'body1'}
                        color={'error'}
                        >
                        {time}
                    </Typography>
                            </Box>
                    <Typography
                        variant={'h5'}
                        component={'div'}
                        fontWeight={700}
                        >
                        {title}
                    </Typography>
                    <Typography
                        className={'clamp'}
                        variant={'p'}
                        >
                        {body}
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
                        padding={1}
                        borderTop={'1px solid black'}
                        >Read New</Link>
                </CardActions>
            </Card>
        </Grid>
    </>
  )
}

export default Noticia
