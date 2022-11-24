import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const DropCOntextWrapper = styled.div`
font-family: sans-serif;
display: flex;
align-items: stretch;
justify-content: center;
gap: 10px;
min-height: 500px;
`

const SectionWrapper = styled.div`
  flex-basis: 50%;
`;

function App() {
  const [itemObj, setItemObj] = useState({
    productBacklog: {
      items: [
        {
          content: "前台職缺列表（職缺詳細內容、點選可發送應徵意願）",
          id: nanoid(),
          score: 5
        },
        { content: "應徵者的線上履歷編輯器", id: nanoid(), score: 13 },
        { content: "會員系統（登入、註冊、權限管理）", id: nanoid(), score: 8 },
        {
          content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
          id: nanoid(),
          score: 8
        }
      ]
    },
    sprintList: {
      items: []
    }
  })

  const [totalScoreSum, setTotalScoreSum] = useState(0);
  console.log('itemObj: ', itemObj);
  // const onBeforeCapture=(e) => console.log("onBeforeCapture: ", e)
  // const onBeforeDragStart=(e) => console.log("onBeforeDragStart: ", e)
  // const onDragStart=(e) => console.log("onDragStart: ", e)
  // const onDragUpdate=(e) => console.log("onDragUpdate: ", e)
  const onDragEnd=(e) => {
    console.log("onDragEnd: ", e)

    const {source, destination } = e
    
    if (!destination) {
      return
    }
    console.log('source: ', source);

    let newItemObk = {...itemObj}

    const [remove] = newItemObk[source.droppableId].items.splice(source.index, 1)
    newItemObk[destination.droppableId].items.splice(destination.index, 0, remove)
    setItemObj(newItemObk)

  }
  return (
    <DragDropContext
      onBeforeCapture={(e) => console.log("onBeforeCapture: ", e)}
      onBeforeDragStart={(e) => console.log("onBeforeDragStart: ", e)}
      onDragStart={(e) => console.log("onDragStart: ", e)}
      onDragUpdate={(e) => console.log("onDragUpdate: ", e)}
      onDragEnd={onDragEnd}
    >
      <DropCOntextWrapper>
        <SectionWrapper>
          <h1>productBacklog</h1>
          <Droppable droppableId="productBacklog">
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
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

        </SectionWrapper>
        <SectionWrapper>
          <h1>sprintList</h1>

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
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </SectionWrapper>

      </DropCOntextWrapper>
    </DragDropContext>
  );
}

export default App;
