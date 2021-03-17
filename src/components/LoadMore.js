import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

export default memo(function LoadMore(props) {
    return (
        <Box textAlign="center" mt={2} mb={2}>
            <Button color="primary" variant="contained" data-testid="load-btn" onClick={props.onNext}>Load more</Button>
        </Box>
    );
});