import React, { Children } from 'react';
import { Container } from './styles'

const ModelOverlay: React.FC = () => {
    return(
        <Container>
            {children}
        </Container>
    )
}
export default ModelOverlay
