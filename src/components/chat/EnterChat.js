import React from 'react';
import {Row,Col,Form,Button} from 'reactstrap'
class EnterChat extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : ''
        }
    }

    changeUsername(e){
        e.preventDefault();
        if(this.state.username.length){
            this.props.setUsername(this.state.username);
        }else{
            alert('Please provide a username');
        }
    }

    onChange(e){
        this.setState({
            username : e.target.value
        })
    }

    render(){
        return(
            
            <Row>
            <Col xs='4' className="bg-white border mx-auto mt-5">
                <div className="mt-4 text-center"><h4>Welcome to Chat App</h4></div>
                    <Form className="mt-2 pb-4 pt-3 px-3" onSubmit={this.changeUsername.bind(this)}>
                    <React.Fragment>
                        <input type="text" className="form-control mb-2" placeholder="Name"
                        value={this.state.username}
                        onChange={this.onChange.bind(this)}/>
                        <div className="d-flex justify-content-between mt-4">
                            <Button className="bg-success m-auto"  type="submit">Start Chatting</Button>
                        </div>
                    </React.Fragment>
                </Form>

            </Col>
            </Row>
        )
    }
}

export default EnterChat;
