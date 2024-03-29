import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/AdminMenu';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const Messages = () => {

    const [messages, setMessage] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/messages`)
            .then((res) => res.json())
            .then((info) => setMessage(info));
    }, []);


    return (
        <>
        <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div>
                            <h3>Welcome to Admin Panel</h3>
                            <AdminMenu></AdminMenu>

                            <h3>Unread messages</h3>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">SL No</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Message Status</th>
                                        <th scope="col">Read Now</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages
                                        .filter(message => message.messageStatus === 'UnRead')
                                        .map((unreadMessage, index) => (
                                            <tr key={unreadMessage._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{unreadMessage.fullName}</td>
                                                
                                                <td>{unreadMessage.emailAddress}</td>
                                                <td>{unreadMessage.subject}</td>
                                                
                                                <td>{unreadMessage.messageStatus}</td>
                                                <td>
                                                    <Link to={`/view/${unreadMessage._id}`} class="theme-btn " data-animation="fadeInRight" data-delay=".8s">
                                                        View Message
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>


                            <h3 className='mt-5'>Read messages</h3>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">SL No</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Message Status</th>
                                        <th scope="col">Read Now</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages
                                        .filter(message => message.messageStatus === 'Read')
                                        .map((readMessage, index) => (
                                            <tr key={readMessage._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{readMessage.fullName}</td>
                                                <td>{readMessage.emailAddress}</td>
                                                <td>{readMessage.subject}</td>
                                                <td>{readMessage.messageStatus}</td>
                                                <td>
                                                    <Link to={`/view/${readMessage._id}`} class="theme-btn " data-animation="fadeInRight" data-delay=".8s">
                                                        View Message
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>



                        </div>


                    </div>
                </div>
            </section>



        </>
    );
};

export default Messages;