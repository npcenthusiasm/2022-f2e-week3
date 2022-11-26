
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import LeafBg from '../images/bg/leaf.png'
import './Home.css'
import Hightlight from './styles/Hightlight.styled';

const BoxWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.theme.primary.bgColor.dark};
`;

const BoxCard= styled.div`
  
  padding: 144px 100px;
  background: rgba(10, 13, 20, 0.6);
  border: 2px solid #00FFE0;
  box-shadow: 0px 0px 24px 8px rgba(0, 255, 224, 0.8), 0px 0px 8px 8px rgba(0, 255, 224, 0.95);
  backdrop-filter: blur(5px);
  border-radius: 80px;
  font-family: 'Gen Jyuu Gothic P';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 180%;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  max-width: 908px;
  margin: 0 auto 40px;
`;

const BoxCardWrap= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const BgImg = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`;

const PrimaryBtn = styled.button`
  position: relative;
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 255, 224, 0) 0%,
  ${props => props.theme.primary.colors.default} 100%), 
  ${props => props.theme.primary.colors.dark};
  border-radius: 40px;
  padding: 12px 48px;
  font-size:  ${props => props.size === 'lg' ? '32px': '20px'};
`;

// const Hightlight = styled.span`
//   color: ${props => props.theme.primary.colors.default};
// `;


function Home () {
  const naviagate = useNavigate()

  const handleClick = () => {
    naviagate('/task')
  }

  return (

    <div>
      <BoxWrap>
        <BgImg>
          <img src={LeafBg} alt="" />
        </BgImg>
    
        <BoxCardWrap>
          <BoxCard>
          <div>
            <div>
              呦呼 ， 歡迎進入 <Hightlight>「SCRUM 新手村」</Hightlight> ， 在正式加入專案開發之前 ，需要請你先了解 Scrum 的流程與精神 ！
              <br />
              <br />
              請接受挑戰任務 ， 成功通過 Scrum 新手村的挑戰任務吧～
            </div>
          
            </div>
 
            
            </BoxCard>
              <PrimaryBtn onClick={handleClick}>接受挑戰 </PrimaryBtn>
          </BoxCardWrap>
      </BoxWrap>
    </div>
    )
}

export default Home



