import * as React from "react"
import styled from "styled-components"



import Servicesection from "./Servicesection";
import ServiceTabletsection from "./Servicetabletsection";
import ServiceMobilesection from "./Servicemobilesection";

const Services = props => {
  return (
    <ServicesBlock>
      <div className="desktop">
        <Servicesection />
      </div>
      <div className="tablet">
        <ServiceTabletsection />
      </div>
      <div className="mobile">
        <ServiceMobilesection />
      </div>
    </ServicesBlock>
  )
}
export default Services

const ServicesBlock = styled.div`
  .desktop,
  .tablet,
  .mobile {
    display: none;
  }
  @media (min-width: 1025px) {
    .desktop {
      display: block;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .tablet {
      display: block;
    }
  }
  @media (max-width: 767px) {
    .mobile {
      display: block;
    }
  }
`
