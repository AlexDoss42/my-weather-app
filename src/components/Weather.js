import React from 'react';
import { Card } from 'semantic-ui-react'

function Weather ({ weatherData }) {

    return (
    <Card>
        <Card.Content>
            <Card.Header className="header">{weatherData.name}</Card.Header>
        </Card.Content>
    </Card>
    )
}

export default Weather;