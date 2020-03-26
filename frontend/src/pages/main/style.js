import styled from 'styled-components'
import { ReactComponent as Medic } from '../../images/Medic.svg'


export const MainContainer = styled.main`
    width: 100%;
    height: 100vh;
    padding: 10vw;
    background-color: #FBFBFB;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const H1 = styled.h1`
    font-size: 3em;
    text-align: center;
`

export const MedicImg = styled(Medic)`
    max-width: 40vw;
    max-height: 60vh;
`

