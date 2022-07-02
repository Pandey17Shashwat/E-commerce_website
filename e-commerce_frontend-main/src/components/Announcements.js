import styled from "styled-components"

const Container=styled.div`
    height: 30px;
    background-color : teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 14px;
`
const Announcements = () => {
    return (
        <Container>
            SALE STARTS FROM TODAY
        </Container>
    )
      
}

export default Announcements
