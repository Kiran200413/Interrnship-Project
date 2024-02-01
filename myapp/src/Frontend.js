import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './frontend.css'
const Frontend = () => {
    const [i1,seti1]=useState(false)
    function internet1()
    {
        seti1(true);
    }
    return (
        <>
            <section>
                <div className='row page'>
                    <div className='col-2 box'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Internet</Accordion.Header>
                                <Accordion.Body>
                                    <a onClick={internet1}>How internet works?</a><br/>
                                    <a href='#'>What is HTTPS?</a><br/>
                                    <a href='#'>What is Domain Name?</a><br/>
                                    <a href='#'>What is Hosting?</a><br/>
                                    <a href='#'>DNS and how it works?</a><br/>
                                    <a href='#'>Browser and how it works?</a>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>HTML</Accordion.Header>
                                <Accordion.Body>
                                    <a href='#'>Getting started with HTML</a><br/>
                                    <a href='#'>Learn HTML</a><br/>
                                    <a href='#'>Writing Semantics</a><br/>
                                    <a href='#'>Semantic Markup</a><br/>
                                    <a href='#'>Accessibility</a><br/>
                                    <a href='#'>Search Engine Optimization</a>
                                </Accordion.Body>
                            </Accordion.Item>
                        
                        
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>CSS</Accordion.Header>
                                <Accordion.Body>
                                    <a>Learn CSS</a><br/>
                                    <a>Responsive Web Design</a><br/>
                                    <a>Grid System</a><br/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    {/* main Screen */}

                    <div className='col box'>
                        {/* how internet works */}
                        <div>
                        {i1 && <iframe width="560" height="315" src="https://www.youtube.com/embed/YE-dA5ZXCs0?si=XvqqedJg-MYtjV4h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Frontend