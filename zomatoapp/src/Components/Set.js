import React from "react";
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack';



const Set=() =>{
    return(
        <div>
            <Stack spacing={1} style={{width:'22 rem'}} className="mb-4">
<Skeleton variant="rectangular" animation='wave'  width={'21 rem'} height={200}  className="rounded"/>
<div className="d flex justify-content-between">
<Skeleton variant="text" animation='wave' width={'12 rem'}/>
<Skeleton variant="text"  animation='wave' width={'5rem'} />
</div>
<div className="d flex justify-content-between">
<Skeleton variant="text" animation='wave' width={'12 rem'}/>
<Skeleton variant="text"  animation='wave' width={'5rem'} />
</div>
<div className="d flex justify-content-between">
<Skeleton variant="text" animation='wave' width={'20rem'} height={20}/>
<Skeleton variant="text"  animation='wave' width={'5rem'} />
</div>
</Stack>
        </div>
    )
}

export default Set;