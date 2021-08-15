import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesHeading, ServiceCard, ServiceImg, ServiceInfo, ServiceTitle, ServiceDesc, ServicePrice, ServiceButton } from './ServicesElements';

const Services = ({heading, data}) => {
    return (
        <ServicesContainer>
            <ServicesHeading>{heading}</ServicesHeading>
            <ServicesWrapper>
                {data.map((service, index) => {
                    return (
                        <ServiceCard key={index}>
                            <ServiceImg src={service.img} alt={service.alt} />
                            <ServiceInfo>
                                <ServiceTitle>{service.name}</ServiceTitle>
                                <ServiceDesc>{service.desc}</ServiceDesc>
                                <ServicePrice>{service.price}</ServicePrice>
                                <ServiceButton>{service.button}</ServiceButton>
                            </ServiceInfo>
                        </ServiceCard>
                    )
                })}
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
