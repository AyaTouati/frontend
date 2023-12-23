import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Cardc = ({art}) => {
  return (
    <div>
      <Card key={art._id} sx={{ maxWidth: 'auto', margin: 1 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={art.imageart}
                            title={art.reference}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {art.designation.substr(0, 20)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Prix:{art.prix}DT
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button disabled={art.qtestock <= 1}
                                variant="contained" color="secondary" size="large"
                            >
                                {art.qtestock <= 1 ? "OUT OF SOLD" : "Add to cart"}
                            </Button>
                        </CardActions>
                    </Card>
    </div>
  )
}

export default Cardc