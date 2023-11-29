import React from 'react';
import Alert from '../alert';
import '../style';

function AlertDemo() {
    return <React.Fragment>
        <Alert kind="warning">这是一条警告提示</Alert>
        <br></br>
        <Alert kind="info">这是一条警告提示</Alert>
    </React.Fragment>
}

export default AlertDemo