import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

function BookItem({ book }) {
    return (
        <Card sx={{ p: 2, my: 4 }}>
            <CardContent>
                <Typography gutterBottom variant="h5">
                    "{book.title}""
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    "{book.description}"
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: <bold>${book.price}</bold>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Category: <bold>{book.category}</bold>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Published: <bold>{book.publishedDate.toLocaleDateString()}</bold>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default BookItem;