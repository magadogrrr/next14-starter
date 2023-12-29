
import { Button } from '@mui/material';

const PageRef = ({ pref }) => {
    return (
        <Button
                variant='text'
                key={pref.title}
                href={pref.path} 
                //onClick={followLink}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700}}
              >
                {pref.title}
        </Button>
    );
  }

export default PageRef;