import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../style/ItemList.css'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  

type propsInfo = {
    repo: string,
}

function ItemList(props: propsInfo):JSX.Element{
    const item = props.repo;

    return(
        <div>
            <Card id='card' sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {new Date(Date.parse(item.created_at)).toLocaleDateString()}
                </Typography>
                <Typography variant="body2">
                {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <a rel="noreferrer" href={item.html_url} target="_blank">Repository Link</a>
            </CardActions>
            </Card><br />
        </div>
    )
}

export default ItemList;
