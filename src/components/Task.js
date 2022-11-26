

import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import bg_village_1 from '../images/bg/bg_village_1.png'
import Hightlight from "./styles/Hightlight.styled";


const RoleTerm = styled.div`
background: linear-gradient(180deg, rgba(255, 122, 0, 0) 0%, rgba(255, 122, 0, 0.03) 59.9%, rgba(255, 122, 0, 0.12) 78.12%, rgba(255, 122, 0, 0.36) 100%), rgba(10, 13, 20, 0.6);
border: 2px solid #FF5C00;
border-radius: 40px;
color: #ffffff;
font-size: 20px;
padding: 40px 84px 40px 100px;
margin-bottom: 52px;
`

const DropCOntextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 70px;
  min-height: 500px;
`

const TaskContainer = styled.div`
  /* display: flex; */
  /* justify-content: flex-end; */
  padding-left: 60px;
  padding-right: 60px;
  margin-top: 52px;
`

const SectionWrapper = styled.div`
  flex-basis: 50%;
`;

const TaskCard = styled.div`
  max-width: 480px;
  background-color: rgba(0, 255, 224, 0.3);
  box-shadow: 12px 12px 3px 2px rgb(0 255 224 / 20%),  24px 24px 3px 2px rgb(0 255 224 / 10%);
  border-radius: 20px;
  min-height: 600px;
`;

const TaskCardHeader = styled.div`
  background: #00FFE0;
  border-radius: 20px 20px 0px 0px;
`;


const TaskCardBody = styled.div`
  background-color: rgba(0, 255, 224, 0.3);
  backdrop-filter: blur(5px);
  /* border-radius: 20px; */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 32px;
`;


const TaskTitle = styled.div`
  color:  ${props => props.theme.primary.text.dark};
  font-size: 32px;
  font-weight: 700;
  padding: 16px 32px 0;
  text-align: center;
  /* ({ theme => theme.mobile })} */
  @media (max-width: ${({ theme }) => theme.mobile }) {
    font-size: 16px;
  }
`;


const TaskDescription= styled.div`
  color:  ${props => props.theme.primary.dark};
  font-size: 16px;
  font-weight: 700;
  padding: 0 32px;
  padding-bottom: 16px;
  text-align: center;
`;

// 


// const TaskCardBody = styled.div`
//   background-color: rgba(0, 255, 224, 0.3);
//   backdrop-filter: blur(5px);
//   /* border-radius: 20px; */
//   border-bottom-left-radius: 20px;
//   border-bottom-right-radius: 20px;
//   padding: 32px;
// `;

// background-color: rgba(255, 122, 0, 0.3);

const TaskCardHeaderOrangle = styled(TaskCardHeader)`
  background-color: rgba(255, 122, 0, 0.3);
  border-radius: 20px 20px 0px 0px;

`

const TaskCardOrange = styled(TaskCard)`
  background-color: rgba(255, 122, 0, 0.3);

  box-shadow: 12px 12px 3px 2px rgb(255 122 0 / 20%),  24px 24px 3px 2px rgb(255 122 0 / 10%);
`;
const TaskTitleOrange = styled(TaskTitle)`
  background-color: #FFC700;
`

const TaskDescriptionOrange = styled(TaskDescription)`
  background-color: #FFC700;
  /* #FF7A0066 */
`
// 


const IssueItem = styled.div`
  color: ${props => props.theme.primary.text.white};
  font-size: 20px;
  font-weight: 500;
  background: rgba(10, 13, 20, 0.6);
  border: 4px solid #00FFE0;
  backdrop-filter: blur(2px);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 16px;
`

const BgImg = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  background-image: url(bg_village_1);
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
  flex-shrink: 0;
  white-space: nowrap;
`;



function Task(props) {
  console.log('props: ', props);
  const [itemObj, setItemObj] = useState({
    productBacklog: {
      title: '產品待辦清單',
      description: 'Product Backlog',
      items: [
        {
          content: "前台職缺列表（職缺詳細內容、點選可發送應徵意願）",
          id: nanoid(),
          priority: "3"
        },
        { content: "應徵者的線上履歷編輯器", id: nanoid(), priority: "2" },
        {
          content: "會員系統（登入、註冊、權限管理）",
          id: nanoid(),
          priority: "1"
        },
        {
          content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
          id: nanoid(),
          priority: "4"
        }
      ]
    },
    sprintList: {
      title: '開發Ａ組的短衝待辦清單',
      description: 'Sprint Backlog',
      items: []
    }
  })

  const [totalScoreSum, setTotalScoreSum] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false)
  console.log('itemObj: ', itemObj);
  // const onBeforeCapture=(e) => console.log("onBeforeCapture: ", e)
  // const onBeforeDragStart=(e) => console.log("onBeforeDragStart: ", e)
  // const onDragStart=(e) => console.log("onDragStart: ", e)
  // const onDragUpdate=(e) => console.log("onDragUpdate: ", e)


  const checkOrder = () => {
    const answerList = ['1', '2', '3', '4']
    const priorityList = itemObj.sprintList.items.map(el => el.priority)

    return priorityList.join('') === answerList.join('')

  }

  const onDragEnd=(e) => {
    console.log("onDragEnd: ", e)

    const {source, destination } = e
    
    if (!destination) {
      return
    }
    console.log('source: ', source);

    let newItemObj = {...itemObj}

    const [remove] = newItemObj[source.droppableId].items.splice(source.index, 1)
    newItemObj[destination.droppableId].items.splice(destination.index, 0, remove)
    setItemObj(newItemObj)


    const isAnswer = checkOrder(newItemObj.sprintList.items)
    console.log('isAnswer: ', isAnswer);


    setIsCorrect(isAnswer)

  }
  return (

    <TaskContainer>
      <BgImg>
        <img src={bg_village_1} alt="" />
      </BgImg>

      <RoleTerm>
      換你來試試看吧 ！ 
        <br />
        
        把 <Hightlight>「 產品待辦清單 」</Hightlight> 的項目拖進 <Hightlight>「 開發Ａ組的短衝待辦清單 」 </Hightlight>裡吧 ！
        提示 ： 置入兩項以上的 Story ， 點數總和不能超過團隊負擔上限 20 點唷 ！
      </RoleTerm>



    <DragDropContext
      onBeforeCapture={(e) => console.log("onBeforeCapture: ", e)}
      onBeforeDragStart={(e) => console.log("onBeforeDragStart: ", e)}
      onDragStart={(e) => console.log("onDragStart: ", e)}
      onDragUpdate={(e) => console.log("onDragUpdate: ", e)}
      onDragEnd={onDragEnd}
    >
      <DropCOntextWrapper>
        <SectionWrapper>
          <TaskCard>

              <TaskCardHeader>
                <TaskTitle>{ itemObj.productBacklog.title }</TaskTitle>
                <TaskDescription>{ itemObj.productBacklog.description }</TaskDescription>
              </TaskCardHeader>
            {/* <TaskCardBody> */}
              <Droppable droppableId="productBacklog" style={{padding: '24px'}}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {itemObj.productBacklog.items.map((item, i) => (
                      <div key={item.id}>
                        <Draggable draggableId={item.id} index={i}>
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <IssueItem>{item.content}</IssueItem>
                            </div>
                          )}
                        </Draggable>
                      </div>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            {/* </TaskCardBody> */}
          </TaskCard>

        </SectionWrapper>

        <SectionWrapper>
          <TaskCardOrange>

            <TaskCardHeaderOrangle>
              <TaskTitleOrange>{ itemObj.sprintList.title }</TaskTitleOrange>
              <TaskDescriptionOrange>{ itemObj.sprintList.description }</TaskDescriptionOrange>
            </TaskCardHeaderOrangle>

            <Droppable droppableId="sprintList">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {itemObj.sprintList.items.map((item, i) => (
                    <div key={item.id}>
                      <Draggable draggableId={item.id} index={i}>
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <IssueItem>{item.content}</IssueItem>
                            
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </TaskCardOrange>
        </SectionWrapper>

        <div style={{ textAlign: 'right'}}>
          <PrimaryBtn>開始sprint</PrimaryBtn>
        </div>
      </DropCOntextWrapper>
    </DragDropContext>
  </TaskContainer>

  );
}

export default Task;
