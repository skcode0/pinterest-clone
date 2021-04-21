import React, { useState, createContext } from 'react';

export const BoardsInfoContext = createContext();

export function BoardsInfoProvider({children}){
    // save all created boards
    const [boardsInfo, setBoardsInfo] = useState([]);

    return (
        <BoardsInfoContext.Provider value={[boardsInfo, setBoardsInfo]}>
            {children}
        </BoardsInfoContext.Provider>
    )
}