import React, { useState, useContext } from 'react';
import { CreateBoardModalWrapper, CreateBoardOverlay, CreateBoardModal, StyledDeleteWrapper } from './CreateBoard.style';
import { BoardsInfoContext } from './contexts/BoardsInfoContext';
import { v4 as uuidv4 } from 'uuid';

function CreateBoard({ closeModal, modalClose, shouldEdit, closeEditModal, editId, editName, editIsPrivate }) {
    const [ boardName, setBoardName ] = useState("");
    const [ privateBoard, setPrivateBoard ] = useState(false);
    const [ boardsInfo, setBoardsInfo ] = useContext(BoardsInfoContext);
    // for edit
    const [ nameEdit, setNameEdit ] = useState(editName);
    const [ editPrivate, setEditPrivate ] = useState(editIsPrivate);

    function handleInput(event){
        if(shouldEdit){
            setNameEdit(event.target.value);
        }
        else{
            setBoardName(event.target.value);
        }
    }

    let createBtnStyles= {
        color: `${boardName ? "white" : "#767676"}`,
        backgroundColor: `${boardName && "#e60023"}`,
        cursor: `${boardName && "pointer"}`
    }

    let editBtnStyles= {
        color: `${nameEdit ? "white" : "#767676"}`,
        backgroundColor: `${nameEdit && "#e60023"}`,
        cursor: `${nameEdit && "pointer"}`
    }

    function makePrivate(event){
        if(shouldEdit){
            event.target.checked ? setEditPrivate(true) : setEditPrivate(false);
        }
        else{
            if(event.target.checked){
                setPrivateBoard(true);
            }
            else{
                setPrivateBoard(false);
            }
        }
    }

    function deleteBoard(){
        setBoardsInfo(boardsInfo.filter(board => board.boardId !== editId));
    }

    function addBoard(){
        if(shouldEdit){
            // edit existing board
            if(nameEdit){
                // avoid duplicate board name
                if((boardsInfo.filter(board => board.boardId !== editId)).every(board => board.boardName !== nameEdit)){
                    setBoardsInfo(
                        boardsInfo.map(board =>{
                            if(board.boardId === editId){
                                return({
                                    ...board,
                                    boardName: nameEdit,
                                    isPrivate: editPrivate,
                                    createdDate: new Date().getTime()
                                })
                            }
                            else{
                                return board
                            }
                        })
                    )
                    closeEditModal();
                }
            }
            
        }
        else{
            if(boardName){
                // avoid duplicate board name
                if(boardsInfo.every(board => board.boardName !== boardName)){
                    // add info to board component
                    setBoardsInfo([
                        ...boardsInfo,
                        {
                            boardId: uuidv4(),
                            boardName,
                            boardImgs: [],
                            isPrivate: privateBoard,
                            createdDate: new Date().getTime()
                        }
                    ]);
                    setBoardName("");
                    closeModal();
                    setPrivateBoard(false);
                }
            }
        }
    }

    return (
        <CreateBoardModalWrapper style={{display: modalClose ? "none" : "block"}}>
            {
                shouldEdit ? <CreateBoardOverlay onClick={closeEditModal} /> : <CreateBoardOverlay onClick={closeModal}/>
            }
            <CreateBoardModal>
                {
                    shouldEdit ? <h1>Edit Your Board</h1> : <h1>Create Board</h1>
                }
                {
                    shouldEdit && <div onClick={closeEditModal} className="close-btn">✖</div>
                }
                <div className="board-name">
                    <p>Name</p>
                    <input type="text" placeholder='Like "Places to Go" or "Recipes to Make"' value={shouldEdit ? nameEdit : boardName} onChange={handleInput} maxLength="50"/>
                    {
                        (shouldEdit ? nameEdit.length >= 50  : boardName.length >= 50) && <p style={{fontSize: "12px", color: "#e60023"}}>Please enter no more than 50 characters.</p>
                    }
                </div>
                <form>
                    <div className="secret-container">
                        <input type="checkbox" onChange={makePrivate} checked={shouldEdit ? editPrivate : privateBoard}/>
                    </div>
                    <label>
                        <h3>Keep this board secret</h3>
                        <p>So only you and collaborators can see it.<a rel="noreferrer" target="_blank" href="https://help.pinterest.com/en/article/secret-boards?source=secret_create"> Learn more</a></p>
                    </label>
                </form>
                {
                    // delete board option in edit
                    shouldEdit && 
                        <StyledDeleteWrapper onDoubleClick={deleteBoard}>
                            <h1>Delete Board (double click)</h1>
                            <p>Delete this board and all it's Pin forever.</p>
                            <p>You can't undo this!</p>
                        </StyledDeleteWrapper>
                }
                {/* if input has nothing, grey and no pointer; if input has something, change to red and pointer */}
                <div className="btn-container">
                    {
                        (boardsInfo.some(board => board.boardName === nameEdit && board.boardId !== editId) || boardsInfo.some(board => board.boardName === boardName)) ? 
                        <button style={{color: "#767676", cursor: "default"}} onClick={addBoard}>{shouldEdit ? "Done" : "Create"}</button> : 
                        <button style={shouldEdit ? editBtnStyles : createBtnStyles} onClick={addBoard}>{shouldEdit ? "Done" : "Create"}</button>
                    }
                </div>

                {/* if board name is duplicate, show error */}
                {
                    (boardsInfo.some(board => board.boardName === nameEdit && board.boardId !== editId) || boardsInfo.some(board => board.boardName === boardName)) && <p style={{color: "#e60023"}}>Duplicate Name.</p>
                }
            </CreateBoardModal>
        </CreateBoardModalWrapper>
    )
}

CreateBoard.defaultProps ={
    shouldEdit: false,
}

export default CreateBoard
